#!/usr/bin/env bash

echo "starting"

rm -rf generated/ &> /dev/null

if [[ ! -d node_modules/ ]]; then
   # command from https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project
   # -g didn't seem to work
   npm install babel-cli@6 babel-preset-react-app@3
fi

#TODO: run a script for generating database (rather than on load)
    #in new db, split classRequirements by combatType?
#TODO: I would like a non-npx command that uses global install
npx babel --watch src/main/babel/ --out-dir generated/ --presets react-app/prod
