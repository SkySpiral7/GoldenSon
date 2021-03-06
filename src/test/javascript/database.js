'use strict';
TestSuite.database = {};
/**This tests for integrity of original DB and that the preprocessing works. Therefore it requires the generated DB*/
TestSuite.database.integrityForClasses = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   try
   {
      for (var className of database.classes.names)
      {
         var elementCount = Object.keys(database.classes[className].requirements).length;
         assertions.push({
            Expected: true,
            Actual: (elementCount > 0),
            Description: 'class ' + className + ' has element requirements'
         });
         for (var element in database.classes[className].requirements)
         {
            var combatTypeCount = Object.keys(database.classes[className].requirements[element]).length;
            assertions.push({
               Expected: true,
               Actual: (combatTypeCount > 0),
               Description: 'class ' + className + ' requirements.' + element + ' has combatTypes'
            });
            for (var combatType in database.classes[className].requirements[element])
            {
               var djinnCount = database.classes[className].requirements[element][combatType];
               var totalDjinnCount = (djinnCount.earth + djinnCount.fire + djinnCount.ice + djinnCount.wind);
               assertions.push({
                  Expected: database.classes[className].totalDjinn,
                  Actual: totalDjinnCount,
                  Description: element + ' class ' + className + ' requirements.' + element + '.' + combatType + ' djinnCount matches totalDjinn'
               });
            }
         }
      }
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'All classes have requirements'});
   }

   try
   {
      var count = Object.keys(database.classes.byRequirement).length;
      assertions.push({
         Expected: true,
         Actual: (count > 0),
         Description: 'database.classes.byRequirement has elements'
      });
      for (var element in database.classes.byRequirement)
      {
         count = Object.keys(database.classes.byRequirement[element]).length;
         assertions.push({
            Expected: true,
            Actual: (count > 0),
            Description: 'database.classes.byRequirement.' + element + ' has combatTypes'
         });
         for (var combatType in database.classes.byRequirement[element])
         {
            count = database.classes.byRequirement[element][combatType].length;
            assertions.push({
               Expected: true,
               Actual: (count > 0),
               Description: 'database.classes.byRequirement.' + element + '.' + combatType + ' has classes'
            });
            var baseClassList = [];
            for (var myClass of database.classes.byRequirement[element][combatType])
            {
               if (0 === myClass.totalDjinn) baseClassList.push(myClass.name);
            }
            assertions.push({
               Expected: 1,
               Actual: baseClassList.length,
               Description: element + ' ' + combatType + ' exactly 1 base class'
            });
         }
      }
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'exactly 1 base class'});
   }

   return TestRunner.displayResults('TestSuite.database.integrityForClasses', assertions, testState);
};
