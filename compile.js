'use strict';

const fs = require('fs');

function rethrow(err) {if (err) throw err;}

function main()
{
   //rm -rf generated/ &> /dev/null
   fs.rmdirSync('generated/', {recursive: true});
   fs.mkdirSync('generated/');

   fs.access('node_modules/', (err) =>
   {
      if (err)
      {
         const execSync = require('child_process').execSync;
         //command from https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project
         //-g didn't seem to work
         execSync('npm install babel-cli@6 babel-preset-react-app@3');
      }
      generateFromBabel();
      generateDatabase();

      console.log('done');
   });
}

function generateFromBabel()
{
   var babel = require('babel-core');

   fs.readdir('./src/main/babel', (err, files) =>
   {
      if (err) throw err;
      files.forEach(fileName =>
      {
         babel.transformFile('./src/main/babel/' + fileName, {presets: ['babel-preset-react-app/prod']},
            function (err, result)
            {
               if (err) throw err;
               //result; // => { code, map, ast }
               fs.writeFile('generated/' + fileName, result.code, 'utf8', rethrow);
            });
      });
   });
}

function generateDatabase()
{
   const database = require('./src/main/javascript/database.js').database;
   processDatabase(database);

   let fileContents = '\'use strict\';\nvar database = ' + JSON.stringify(database) + ';\n';

   fs.writeFile('generated/database.js', fileContents, 'utf8', rethrow);
}

function processDatabase(database)
{
   function assignNames(object)
   {
      for (var key in object)
      {
         object[key].name = key;
      }
      object.names = Object.keys(object);
      object.names.sort();
   }

   assignNames(database.elements);
   assignNames(database.backgrounds);
   assignNames(database.combatTypes);
   assignNames(database.classes);
   assignNames(database.djinn);
   assignNames(database.equipment);
   assignNames(database.psynergy);

   database.classes.byRequirement = {};
   for (var name of database.classes.names)
   {
      var classReq = database.classes[name].requirements;
      for (var element in classReq)
      {
         for (var combatType in classReq[element])
         {
            if (undefined === database.classes.byRequirement[element]) database.classes.byRequirement[element] = {};
            if (undefined === database.classes.byRequirement[element][combatType]) database.classes.byRequirement[element][combatType] = [];
            database.classes.byRequirement[element][combatType].push(database.classes[name]);

            //totalDjinn will get written a lot but it's fine
            var djinnCount = classReq[element][combatType];
            database.classes[name].totalDjinn = (djinnCount.earth + djinnCount.fire + djinnCount.ice + djinnCount.wind);
         }
      }
   }
}

main();
