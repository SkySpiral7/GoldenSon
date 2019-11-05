var database = {
   //was planning to sort all classes etc alphabetically once I have all the data
   adeptTypes: {
      //TODO: use this data
      "Earth": {
         "name": "Earth",
         "statsAddend": {"hp": 5, "pp": 10, "attack": 3, "defense": 0, "agility": 2, "luck": 2}
      },
      "Fire": {"name": "Fire", "statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 3, "agility": 2, "luck": 2}},
      "Water": {
         "name": "Water",
         "statsAddend": {"hp": 0, "pp": 15, "attack": 1, "defense": 1, "agility": 2, "luck": 3}
      },
      "Air": {"name": "Air", "statsAddend": {"hp": 5, "pp": 5, "attack": 0, "defense": 1, "agility": 4, "luck": 3}},
      "Moon": {"name": "Moon", "statsAddend": {"hp": 20, "pp": 0, "attack": 2, "defense": 2, "agility": 1, "luck": 1}},
      "Sun": {"name": "Sun", "statsAddend": {"hp": 0, "pp": 20, "attack": 1, "defense": 1, "agility": 2, "luck": 2}},
      "Typeless": {
         "name": "Typeless",
         "statsAddend": {"hp": 20, "pp": 0, "attack": 4, "defense": 4, "agility": 4, "luck": 4}
      },
      "names": ["Air", "Earth", "Fire", "Moon", "Sun", "Typeless", "Water"]
   },
   backgrounds: {
      //TODO: use this data
      "Healer": {
         "name": "Healer",
         "statsAddend": {"hp": 10, "pp": 10, "attack": 0, "defense": 0, "agility": 3, "luck": 4}
      },
      "Seer": {"name": "Seer", "statsAddend": {"hp": 5, "pp": 10, "attack": 0, "defense": 2, "agility": 3, "luck": 3}},
      "Pirate": {
         "name": "Pirate",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 4, "defense": 3, "agility": 1, "luck": 1}
      },
      "Guard": {
         "name": "Guard",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 4, "defense": 2, "agility": 2, "luck": 1}
      },
      "Farmer": {
         "name": "Farmer",
         "statsAddend": {"hp": 20, "pp": 0, "attack": 4, "defense": 3, "agility": 0, "luck": 0}
      },
      "Craftsman": {
         "name": "Craftsman",
         "statsAddend": {"hp": 15, "pp": 5, "attack": 1, "defense": 1, "agility": 3, "luck": 2}
      },
      "Apothecary": {
         "name": "Apothecary",
         "statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 2, "agility": 3, "luck": 3}
      },
      "Shaman": {
         "name": "Shaman",
         "statsAddend": {"hp": 10, "pp": 15, "attack": 0, "defense": 0, "agility": 2, "luck": 4}
      },
      "Sage": {"name": "Sage", "statsAddend": {"hp": 0, "pp": 20, "attack": 0, "defense": 0, "agility": 3, "luck": 4}},
      "Sailor": {
         "name": "Sailor",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 3, "defense": 4, "agility": 1, "luck": 1}
      },
      "Thief": {
         "name": "Thief",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 1, "defense": 3, "agility": 4, "luck": 1}
      },
      "Artist": {
         "name": "Artist",
         "statsAddend": {"hp": 0, "pp": 15, "attack": 1, "defense": 1, "agility": 1, "luck": 5}
      },
      "Academic": {
         "name": "Academic",
         "statsAddend": {"hp": 10, "pp": 15, "attack": 0, "defense": 0, "agility": 3, "luck": 3}
      },
      "names": ["Academic", "Apothecary", "Artist", "Craftsman", "Farmer", "Guard", "Healer", "Pirate", "Sage", "Sailor", "Seer", "Shaman", "Thief"]
   },
   combatTypes: {
      //TODO: use this data
      "Warrior": {
         "name": "Warrior",
         "statsAddend": {"hp": 15, "pp": 10, "attack": 6, "defense": 4, "agility": 4, "luck": 0}
      },
      "Mage": {"name": "Mage", "statsAddend": {"hp": 5, "pp": 25, "attack": 0, "defense": 3, "agility": 4, "luck": 6}},
      "Rogue": {
         "name": "Rogue",
         "statsAddend": {"hp": 10, "pp": 10, "attack": 1, "defense": 4, "agility": 6, "luck": 4}
      },
      "names": ["Mage", "Rogue", "Warrior"]
   },
   classes: {
      //TODO: need data
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
      "Echo": {
         "name": "Echo",
         "element": "earth",
         "description": "Attack with a double strike.",
         "statsAddend": {"hp": 9, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Iron": {
         "name": "Iron",
         "element": "earth",
         "description": "Bolster the party's Defense.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 2, "agility": 3, "luck": 0}
      },
      "Steel": {
         "name": "Steel",
         "element": "earth",
         "description": "Siphon a foe's HP with a kiss.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 1}
      },
      "Mud": {
         "name": "Mud",
         "element": "earth",
         "description": "Slow a foe with sticky mud.",
         "statsAddend": {"hp": 10, "pp": 4, "attack": 0, "defense": 0, "agility": 3, "luck": 0}
      },
      "Flower": {
         "name": "Flower",
         "element": "earth",
         "description": "Refresh allies and restore HP.",
         "statsAddend": {"hp": 12, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Meld": {
         "name": "Meld",
         "element": "earth",
         "description": "Launch a powerful team strike.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 0, "agility": 4, "luck": 1}
      },
      "Petra": {
         "name": "Petra",
         "element": "earth",
         "description": "Turn a foe to stone.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 0}
      },
      "Salt": {
         "name": "Salt",
         "element": "earth",
         "description": "Restore allies' status to normal.",
         "statsAddend": {"hp": 9, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 1}
      },
      "Geode": {
         "name": "Geode",
         "element": "earth",
         "description": "Strike with a clod of earth.",
         "statsAddend": {"hp": 12, "pp": 0, "attack": 6, "defense": 0, "agility": 0, "luck": 0}
      },
      "Mold": {
         "name": "Mold",
         "element": "earth",
         "description": "Strike a foe.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 4, "defense": 0, "agility": 2, "luck": 1}
      },
      "Crystal": {
         "name": "Crystal",
         "element": "earth",
         "description": "Restore HP to all allies.",
         "statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Cannon": {
         "name": "Cannon",
         "element": "fire",
         "description": "Strike with the power of Mars.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Spark": {
         "name": "Spark",
         "element": "fire",
         "description": "Revive an ally with cheers of support.",
         "statsAddend": {"hp": 11, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Kindle": {
         "name": "Kindle",
         "element": "fire",
         "description": "Increase all allies' Attack.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 5, "defense": 0, "agility": 0, "luck": 1}
      },
      "Char": {
         "name": "Char",
         "element": "fire",
         "description": "Paralyze foes with a strong blow.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 2, "defense": 0, "agility": 2, "luck": 1}
      },
      "Coal": {
         "name": "Coal",
         "element": "fire",
         "description": "Rally your allies to boost Agility.",
         "statsAddend": {"hp": 11, "pp": 3, "attack": 0, "defense": 0, "agility": 3, "luck": 0}
      },
      "Reflux": {
         "name": "Reflux",
         "element": "fire",
         "description": "Counter an enemy's attack.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 2}
      },
      "Core": {
         "name": "Core",
         "element": "fire",
         "description": "Strike through an enemy's Defense.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 0}
      },
      "Tinder": {
         "name": "Tinder",
         "element": "fire",
         "description": "Revive a downed ally.",
         "statsAddend": {"hp": 12, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Shine": {
         "name": "Shine",
         "element": "fire",
         "description": "Dazzle foes and strike decisively.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 3, "defense": 3, "agility": 2, "luck": 0}
      },
      "Fury": {
         "name": "Fury",
         "element": "fire",
         "description": "Call forth wandering souls to attack.",
         "statsAddend": {"hp": 12, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Fugue": {
         "name": "Fugue",
         "element": "fire",
         "description": "Fatigue your foes to drop their PP.",
         "statsAddend": {"hp": 11, "pp": 4, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Breath": {
         "name": "Breath",
         "element": "wind",
         "description": "Restore HP quickly.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 4, "luck": 0}
      },
      "Blitz": {
         "name": "Blitz",
         "element": "wind",
         "description": "Numb a foe with a lightning strike.",
         "statsAddend": {"hp": 10, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Ether": {
         "name": "Ether",
         "element": "wind",
         "description": "Focus will to restore PP.",
         "statsAddend": {"hp": 8, "pp": 4, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Waft": {
         "name": "Waft",
         "element": "wind",
         "description": "Calm a foe with soothing scents.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 4, "defense": 0, "agility": 0, "luck": 0}
      },
      "Haze": {
         "name": "Haze",
         "element": "wind",
         "description": "Hide away to avoid damage.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 0, "defense": 2, "agility": 3, "luck": 2}
      },
      "Wheeze": {
         "name": "Wheeze",
         "element": "wind",
         "description": "Poison a foe as you strike.",
         "statsAddend": {"hp": 9, "pp": 3, "attack": 5, "defense": 0, "agility": 0, "luck": 0}
      },
      "Aroma": {
         "name": "Aroma",
         "element": "wind",
         "description": "Restore everyone's PP.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Whorl": {
         "name": "Whorl",
         "element": "wind",
         "description": "Take a deep breath, and strike!",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 0}
      },
      "Gasp": {
         "name": "Gasp",
         "element": "wind",
         "description": "Call the Grim Reaper on your foes.",
         "statsAddend": {"hp": 12, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Lull": {
         "name": "Lull",
         "element": "wind",
         "description": "Negotiate a temporary cease-fire.",
         "statsAddend": {"hp": 11, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Gale": {
         "name": "Gale",
         "element": "wind",
         "description": "Blast enemies with a wind strike.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 0, "defense": 0, "agility": 5, "luck": 3}
      },
      "Fog": {
         "name": "Fog",
         "element": "ice",
         "description": "Blind an enemy with fog.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 2, "agility": 2, "luck": 1}
      },
      "Sour": {
         "name": "Sour",
         "element": "ice",
         "description": "Reduce a foe's resistance.",
         "statsAddend": {"hp": 8, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Spring": {
         "name": "Spring",
         "element": "ice",
         "description": "Restore HP with healing herbs.",
         "statsAddend": {"hp": 11, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Shade": {
         "name": "Shade",
         "element": "ice",
         "description": "Create a watery shield.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 2}
      },
      "Chill": {
         "name": "Chill",
         "element": "ice",
         "description": "Strike to reduce a foe's defense.",
         "statsAddend": {"hp": 10, "pp": 3, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Steam": {
         "name": "Steam",
         "element": "ice",
         "description": "Increase all allies' Elemental strength.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 5, "defense": 0, "agility": 0, "luck": 0}
      },
      "Rime": {
         "name": "Rime",
         "element": "ice",
         "description": "Seal a foe's Psynergy.",
         "statsAddend": {"hp": 10, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Gel": {
         "name": "Gel",
         "element": "ice",
         "description": "Weaken a foe's Attack.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 5, "defense": 0, "agility": 2, "luck": 0}
      },
      "Eddy": {
         "name": "Eddy",
         "element": "ice",
         "description": "Speed up Djinn recovery time.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Balm": {
         "name": "Balm",
         "element": "ice",
         "description": "Revive all downed allies.",
         "statsAddend": {"hp": 13, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Serac": {
         "name": "Serac",
         "element": "ice",
         "description": "Strike a chilling finishing blow.",
         "statsAddend": {"hp": 12, "pp": 0, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "names": ["Aroma", "Balm", "Blitz", "Breath", "Cannon", "Char", "Chill", "Coal", "Core", "Crystal", "Echo",
         "Eddy", "Ether", "Flower", "Fog", "Fugue", "Fury", "Gale", "Gasp", "Gel", "Geode", "Haze", "Iron", "Kindle",
         "Lull", "Meld", "Mold", "Mud", "Petra", "Reflux", "Rime", "Salt", "Serac", "Shade", "Shine", "Sour", "Spark",
         "Spring", "Steam", "Steel", "Tinder", "Waft", "Wheeze", "Whorl"]
   },
   equipment: {
      //TODO: need data
      'Ixion Mail': {
         name: 'Ixion Mail',
         description: 'Armor: Resists Wind & Water',
         statsAddend: {hp: 0, pp: 0, attack: 0, defense: 26, agility: 0, luck: 0}
      },
      names: ['Ixion Mail']
   },
   psynergy: {
      //TODO: need data
      'Cure': {name: 'Cure', description: 'Restore 70 HP.'},
      Quake: {name: 'Quake', description: 'Attack with a powerful quake.'},
      Earthquake: {name: 'Earthquake', description: 'Attack with a mighty tremor.'},
      Spire: {name: 'Spire', description: 'Attack with earthen spire.'},
      Gaia: {name: 'Gaia', description: 'Attack with the earth\'s might.'},
      'Cure Well': {name: 'Cure Well', description: 'Restore 150 HP.'},
      names: ["Cure", "Quake", "Earthquake", "Spire", "Gaia", "Cure Well"]
   }
};
