'use strict';
TestSuite.database = {};
TestSuite.database.integrityForClasses = async function (testState = {}) {
   TestRunner.clearResults(testState);
   var assertions = [];

   try {
      var keys = Object.keys(database.classes);
      keys.removeByValue('names');
      keys.sort();
      assertions.push({Expected: keys, Actual: database.classes.names, Description: 'All classes are in names'});
   } catch (e) {
      assertions.push({Error: e, Description: 'All classes are in names'});
   }

   try {
      for (var name of database.classes.names) {
         var isInEarth = (undefined !== database.classRequirements.earth[name]);
         var isInFire = (undefined !== database.classRequirements.fire[name]);
         var isInWind = (undefined !== database.classRequirements.wind[name]);
         var isInIce = (undefined !== database.classRequirements.ice[name]);
         var hasRequirements = (isInEarth || isInFire || isInWind || isInIce);
         assertions.push({Expected: true, Actual: hasRequirements, Description: 'class ' + name + ' has requirements'});
      }
   } catch (e) {
      assertions.push({Error: e, Description: 'All classes have requirements'});
   }

   return TestRunner.displayResults('TestSuite.database.integrityForClasses', assertions, testState);
};
TestSuite.database.integrityForClassRequirements = async function (testState = {}) {
   TestRunner.clearResults(testState);
   var assertions = [], className;

   function classRequirementsForElement(element) {
      try {
         var keys = Object.keys(database.classRequirements[element]);
         keys.removeByValue('names');
         keys.sort();
         assertions.push({
            Expected: keys,
            Actual: database.classRequirements[element].names,
            Description: 'All ' + element + ' classRequirements are in names'
         });
      } catch (e) {
         assertions.push({Error: e, Description: 'All ' + element + ' classRequirements are in names'});
      }

      try {
         for (className of database.classRequirements[element].names) {
            var isAClass = (undefined !== database.classes[className]);
            assertions.push({
               Expected: true,
               Actual: isAClass,
               Description: element + ' class ' + className + ' exists'
            });
         }
      } catch (e) {
         assertions.push({Error: e, Description: element + ' classes exists'});
      }

      try {
         for (className of database.classRequirements[element].names) {
            var djinnCount = database.classRequirements[element][className].djinnCount;
            var totalDjinnCount = (djinnCount.earth + djinnCount.fire + djinnCount.wind + djinnCount.ice);
            assertions.push({
               Expected: database.classes[className].priority,
               Actual: totalDjinnCount,
               Description: element + ' class ' + className + ' djinnCount matches priority'
            });
         }
      } catch (e) {
         assertions.push({Error: e, Description: element + ' classes djinnCount matches priority'});
      }

      try {
         var classByPriority = {};
         for (className of database.classRequirements[element].names) {
            var priority = database.classes[className].priority;
            if (undefined === classByPriority[priority]) classByPriority[priority] = [className];
            else classByPriority[priority].push(className);
         }
         var classNameList = classByPriority[0];
         for (var combatType of database.combatTypes.names) {
            var classCount = 0;
            for (className of classNameList) {
               if (database.classRequirements[element][className].combatType.contains(combatType)) ++classCount;
            }
            assertions.push({
               Expected: 1,
               Actual: classCount,
               Description: element + ' ' + combatType + ' exactly 1 base class'
            });
         }
         /*
         scenarios for each element/combatType:
         - exact same djinn (same priority). Not allowed.
         + different priority. allowed.
         + {1,1,1,1} vs {4,0,0,0} allowed
         + {2,2,2,2} vs {5,1,1,1} allowed
         - {1,0,0,0} vs {0,1,0,0} not allowed unless {1,1,0,0} has a priority 2 class
         every combination of same priority see if those counts trigger higher priority class
         */

         // for (var priority in classByPriority) {
         //    var classNameList = classByPriority[priority];
         //    for (var combatType of database.combatTypes.names) {
         //       var classCount = 0;
         //       for (className of classNameList) {
         //          if (database.classRequirements[element][className].combatType.contains(combatType)) ++classCount;
         //       }
         //       //TODO: how to determine if overlap? eg 1 of each element is priority 1
         //       assertions.push({
         //          Expected: true,
         //          Actual: (classCount < 2),
         //          Description: element + ' ' + combatType + ' has overlap for priority ' + priority + ' among ' + JSON.stringify(classNameList)
         //       });
         //    }
         // }
      } catch (e) {
         assertions.push({Error: e, Description: element + ' classes do not overlap'});
      }
   }

   classRequirementsForElement('earth');
   classRequirementsForElement('fire');
   classRequirementsForElement('wind');
   classRequirementsForElement('ice');

   return TestRunner.displayResults('TestSuite.database.integrityForClassRequirements', assertions, testState);
};
