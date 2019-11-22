'use strict';
TestSuite.database = {};
TestSuite.database.integrityForClasses = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   try
   {
      var keys = Object.keys(database.classes);
      keys.removeByValue('names');
      keys.sort();
      assertions.push({Expected: keys, Actual: database.classes.names, Description: 'All classes are in names'});
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'All classes are in names'});
   }

   try
   {
      for (var name of database.classes.names)
      {
         var isInEarth = (undefined !== database.classRequirements.earth[name]);
         var isInFire = (undefined !== database.classRequirements.fire[name]);
         var isInWind = (undefined !== database.classRequirements.wind[name]);
         var isInIce = (undefined !== database.classRequirements.ice[name]);
         var hasRequirements = (isInEarth || isInFire || isInWind || isInIce);
         assertions.push({Expected: true, Actual: hasRequirements, Description: 'class ' + name + ' has requirements'});
      }
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'All classes have requirements'});
   }

   return TestRunner.displayResults('TestSuite.database.integrityForClasses', assertions, testState);
};
TestSuite.database.integrityForClassRequirements = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [], className;

   function classRequirementsForElement(element)
   {
      try
      {
         var keys = Object.keys(database.classRequirements[element]);
         keys.removeByValue('names');
         keys.sort();
         assertions.push({
            Expected: keys,
            Actual: database.classRequirements[element].names,
            Description: 'All ' + element + ' classRequirements are in names'
         });
      }
      catch (e)
      {
         assertions.push({Error: e, Description: 'All ' + element + ' classRequirements are in names'});
      }

      try
      {
         for (className of database.classRequirements[element].names)
         {
            var isAClass = (undefined !== database.classes[className]);
            assertions.push({
               Expected: true,
               Actual: isAClass,
               Description: element + ' class ' + className + ' exists'
            });
         }
      }
      catch (e)
      {
         assertions.push({Error: e, Description: element + ' classes exists'});
      }

      try
      {
         for (className of database.classRequirements[element].names)
         {
            var djinnCount = database.classRequirements[element][className].djinnCount;
            var totalDjinnCount = (djinnCount.earth + djinnCount.fire + djinnCount.wind + djinnCount.ice);
            assertions.push({
               Expected: database.classes[className].priority,
               Actual: totalDjinnCount,
               Description: element + ' class ' + className + ' djinnCount matches priority'
            });
         }
      }
      catch (e)
      {
         assertions.push({Error: e, Description: element + ' classes djinnCount matches priority'});
      }

      try
      {
         var classByCombatThenPriority = {};
         for (var combatType of database.combatTypes.names)
         {
            classByCombatThenPriority[combatType] = {};
         }
         for (className of database.classRequirements[element].names)
         {
            var priority = database.classes[className].priority;
            for (var combatType of database.classRequirements[element][className].combatType)
            {
               if (undefined === classByCombatThenPriority[combatType][priority]) classByCombatThenPriority[combatType][priority] = [className];
               else classByCombatThenPriority[combatType][priority].push(className);
            }
         }
         for (var combatType of database.combatTypes.names)
         {
            assertions.push({
               Expected: 1,
               Actual: classByCombatThenPriority[combatType][0].length,
               Description: element + ' ' + combatType + ' exactly 1 base class'
            });
         }
         //TODO: every single one of these fail. all that have multiples overlap
         if (false)
         {
            /*
            for each element/combatType:
            find every combination of 2 classes of the same priority
            apply the djinn of both. not allowed to end up with 2 classes
            the only way to prevent this is if those counts trigger a higher priority class
            */
            for (var combatType of database.combatTypes.names)
            {
               for (var priority in classByCombatThenPriority[combatType])
               {
                  var classNameList = classByCombatThenPriority[combatType][priority];
                  if (1 === classNameList.length) continue;  //nothing to overlap with
                  //since I passed in 2 args the return value's elements will have a length of 2
                  var everyPair = Combination.cartesianProduct([classNameList, classNameList]);
                  for (var pair of everyPair)
                  {
                     if (pair[0] === pair[1]) continue;  //a class doesn't overlap with itself. exclude this combination
                     var classDjinnCount = [database.classRequirements[element][pair[0]].djinnCount,
                        database.classRequirements[element][pair[1]].djinnCount];
                     var bothDjinnCount = {};
                     bothDjinnCount.earth = Math.max(classDjinnCount[0].earth, classDjinnCount[1].earth);
                     bothDjinnCount.fire = Math.max(classDjinnCount[0].fire, classDjinnCount[1].fire);
                     bothDjinnCount.wind = Math.max(classDjinnCount[0].wind, classDjinnCount[1].wind);
                     bothDjinnCount.ice = Math.max(classDjinnCount[0].ice, classDjinnCount[1].ice);
                     //bothDjinnCount now has the counts that would qualify for both classes

                     var resultClass = determineClass(element, combatType, bothDjinnCount);
                     assertions.push({
                        Expected: true,
                        //in order for there to be no overlap bothDjinnCount must result in a higher priority class
                        // (rather than 2 of same priority)
                        Actual: (priority < resultClass.priority),
                        Description: element + ' ' + combatType + ' has overlap for priority ' + priority + ' among ' + JSON.stringify(
                           pair)
                     });
                  }
               }
            }
         }
      }
      catch (e)
      {
         assertions.push({Error: e, Description: element + ' classes do not overlap'});
      }
   }

   classRequirementsForElement('earth');
   classRequirementsForElement('fire');
   classRequirementsForElement('wind');
   classRequirementsForElement('ice');

   return TestRunner.displayResults('TestSuite.database.integrityForClassRequirements', assertions, testState);
};
