'use strict';
TestSuite.importData = {};
TestSuite.importData.convertClassCsvToJson = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [], input, expected;

   try
   {
      input = '"Apostate",8,"earth","Mage",0,4,4,0,"170%","185%","135%","135%","165%","90%","880%",1,"Cure",5,"Quake"';
      expected = {
         "Apostate": {
            "statsMultiplier": {
               "hp": 1.7,
               "pp": 1.85,
               "attack": 1.35,
               "defense": 1.35,
               "agility": 1.65,
               "luck": 0.9
            },
            "psynergy": [{level: 1, name: "Cure"}, {level: 5, name: "Quake"}],
            "requirements": {
               "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}}
            }
         }
      };
      assertions.push({
         Expected: expected,
         Actual: convertClassCsvToJson(input),
         Description: 'Happy path csv'
      });
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'Happy path csv'});
   }

   try
   {
      input = 'Apostate\t8\tearth\tMage\t0\t4\t4\t0\t170%\t185%\t135%\t135%\t165%\t90%\t880%';
      expected = {
         "Apostate": {
            "statsMultiplier": {
               "hp": 1.7,
               "pp": 1.85,
               "attack": 1.35,
               "defense": 1.35,
               "agility": 1.65,
               "luck": 0.9
            },
            "psynergy": [],
            "requirements": {
               "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}}
            }
         }
      };
      assertions.push({
         Expected: expected,
         Actual: convertClassCsvToJson(input),
         Description: 'Handles tabs and empty psynergyList'
      });
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'Handles tabs and empty psynergyList'});
   }

   try
   {
      input = '"Apostate",8,"earth","Mage",0,4,4,0,"170%","185%","135%","135%","165%","90%"\n\n\n';
      expected = {
         "Apostate": {
            "statsMultiplier": {
               "hp": 1.7,
               "pp": 1.85,
               "attack": 1.35,
               "defense": 1.35,
               "agility": 1.65,
               "luck": 0.9
            },
            "psynergy": [],
            "requirements": {
               "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}}
            }
         }
      };
      assertions.push({
         Expected: expected,
         Actual: convertClassCsvToJson(input),
         Description: 'Trailing end lines have no affect'
      });
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'Trailing end lines have no affect'});
   }

   try
   {
      input = '"Apostate",8,"earth","Mage",0,4,4,0,"170%","185%","135%","135%","165%","90%","880%",1,"Cure",5,"Quake"\n' +
         '"Apostate",8,"fire","Mage",4,0,4,0,"170%","185%","135%","135%","165%","90%","880%",1,"Cure",5,"Quake"';
      expected = {
         "Apostate": {
            "statsMultiplier": {
               "hp": 1.7,
               "pp": 1.85,
               "attack": 1.35,
               "defense": 1.35,
               "agility": 1.65,
               "luck": 0.9
            },
            "psynergy": [{level: 1, name: "Cure"}, {level: 5, name: "Quake"}],
            "requirements": {
               "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}},
               "fire": {"Mage": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}}
            }
         }
      };
      assertions.push({
         Expected: expected,
         Actual: convertClassCsvToJson(input),
         Description: 'Handles multiple requirements'
      });
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'Handles multiple requirements'});
   }

   return TestRunner.displayResults('TestSuite.importData.convertClassCsvToJson', assertions, testState);
};
TestSuite.importData.ui = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [], actual, expected;

   try
   {
      document.getElementById(
         'input').value = '"Apostate",8,"earth","Mage",0,4,4,0,"170%","185%","135%","135%","165%","90%","880%",1,"Cure",5,"Quake"';
      expected = JSON.stringify({
         "Apostate": {
            "statsMultiplier": {
               "hp": 1.7,
               "pp": 1.85,
               "attack": 1.35,
               "defense": 1.35,
               "agility": 1.65,
               "luck": 0.9
            },
            "psynergy": [{level: 1, name: "Cure"}, {level: 5, name: "Quake"}],
            "requirements": {
               "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}}
            }
         }
      });
      document.getElementById('convertButton')
      .onclick();
      actual = document.getElementById('output').value;
      assertions.push({
         Expected: expected,
         Actual: actual,
         Description: 'Happy path csv'
      });
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'Happy path csv'});
   }

   return TestRunner.displayResults('TestSuite.importData.ui', assertions, testState);
};
