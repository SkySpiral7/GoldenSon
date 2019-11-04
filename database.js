var database = {
   classes: {
      //was planning to sort all classes etc alphabetically once I have all the data
      Squire: {
         name: 'Squire',
         priority: 0,  //currently equal to the total djinn count. assumes that there's no conflict
         requirements: {
            adept: ['earth'],
            combatType: ['Warrior'],
            djinnCount: {earth: 0, fire: 0, wind: 0, ice: 0}
         },
         //convert percent to multiplier:
         statsMultiplier: {
            hp: 1.1, pp: 0.8, attack: 1.1, defense: 1, agility: 1.1, luck: 1
         },
         psynergy: [
            {level: 1, name: 'Cure'},
            {level: 2, name: 'Quake'},
            {level: 4, name: 'Earthquake'},
            {level: 6, name: 'Spire'},
            {level: 10, name: 'Cure Well'}
         ]
      },
      Knight: {
         name: 'Knight',
         priority: 2,
         requirements: {
            adept: ['earth'],
            combatType: ['Warrior'],
            djinnCount: {earth: 2, fire: 0, wind: 0, ice: 0}
         },
         statsMultiplier: {
            hp: 1.3, pp: 0.9, attack: 1.2, defense: 1.1, agility: 1.2, luck: 1
         },
         psynergy: [
            {level: 1, name: 'Cure'},
            {level: 2, name: 'Quake'},
            {level: 4, name: 'Earthquake'},
            {level: 6, name: 'Spire'},
            {level: 10, name: 'Cure Well'}
         ]
      },
      Gallant: {
         name: 'Gallant',
         priority: 4,
         requirements: {
            adept: ['earth'],
            combatType: ['Warrior'],
            djinnCount: {earth: 4, fire: 0, wind: 0, ice: 0}
         },
         statsMultiplier: {
            hp: 1.5, pp: 1, attack: 1.3, defense: 1.2, agility: 1.3, luck: 1
         },
         psynergy: [
            {level: 1, name: 'Cure'},
            {level: 2, name: 'Quake'},
            {level: 4, name: 'Earthquake'},
            {level: 6, name: 'Spire'},
            {level: 7, name: 'Gaia'},
            {level: 10, name: 'Cure Well'}
         ]
      },
      'Water Seer': {
         name: 'Water Seer',
         priority: 0,
         requirements: {
            adept: ['ice'],
            combatType: ['Mage'],
            djinnCount: {earth: 0, fire: 0, wind: 0, ice: 0}
         },
         statsMultiplier: {
            hp: 0.9, pp: 1.3, attack: 0.9, defense: 1, agility: 0.8, luck: 1.3
         },
         psynergy: []
      },
      names: ['Squire', 'Knight', 'Gallant', 'Water Seer']
   },
   djinn: {
      Echo: {
         name: 'Echo',
         element: 'earth',
         description: 'Attack with a double strike.',
         statsAddend: {
            hp: 9, pp: 4, attack: 3, defense: 0, agility: 0, luck: 0
         }
      },
      Iron: {
         name: 'Iron',
         element: 'earth',
         description: 'Bolster the party\'s Defense.',
         statsAddend: {hp: 11, pp: 0, attack: 0, defense: 2, agility: 3, luck: 0}
      },
      Steel: {
         name: 'Steel',
         element: 'earth',
         description: 'Siphon a foe\'s HP with a kiss.',
         statsAddend: {hp: 9, pp: 0, attack: 4, defense: 2, agility: 0, luck: 1}
      },
      Mud: {
         name: 'Mud',
         element: 'earth',
         description: 'Slow a foe with sticky mud.',
         statsAddend: {hp: 10, pp: 4, attack: 0, defense: 0, agility: 3, luck: 0}
      },
      names: ['Echo', 'Iron', 'Steel', 'Mud']
   },
   equipment: {
      'Ixion Mail': {
         name: 'Ixion Mail',
         description: 'Armor: Resists Wind & Water',
         statsAddend: {hp: 0, pp: 0, attack: 0, defense: 26, agility: 0, luck: 0}
      },
      names: ['Ixion Mail']
   },
   psynergy: {
      'Cure': {name: 'Cure', description: 'Restore 70 HP.'},
      Quake: {name: 'Quake', description: 'Attack with a powerful quake.'},
      Earthquake: {name: 'Earthquake', description: 'Attack with a mighty tremor.'},
      Spire: {name: 'Spire', description: 'Attack with earthen spire.'},
      Gaia: {name: 'Gaia', description: 'Attack with the earth\'s might.'},
      'Cure Well': {name: 'Cure Well', description: 'Restore 150 HP.'},
      names: ["Cure", "Quake", "Earthquake", "Spire", "Gaia", "Cure Well"]
   }
};
