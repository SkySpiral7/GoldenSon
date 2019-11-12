#!/usr/bin/env bash

echo "starting"

if [ ! -d node_modules/ ]; then
   # command from https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project
   # -g didn't seem to work
   npm install babel-cli@6 babel-preset-react-app@3
fi

npx babel --watch src/babel/ --out-dir generated/ --presets react-app/prod
