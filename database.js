var database = {
   //was planning to sort all classes etc alphabetically once I have all the data
   adeptTypes: {
      //TODO: use data: adeptTypes
      "earth": {
         "name": "earth",
         "statsAddend": {"hp": 5, "pp": 10, "attack": 3, "defense": 0, "agility": 2, "luck": 2}
      },
      "fire": {"name": "fire", "statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 3, "agility": 2, "luck": 2}},
      "ice": {
         "name": "ice",
         "statsAddend": {"hp": 0, "pp": 15, "attack": 1, "defense": 1, "agility": 2, "luck": 3}
      },
      "wind": {"name": "wind", "statsAddend": {"hp": 5, "pp": 5, "attack": 0, "defense": 1, "agility": 4, "luck": 3}},
      "moon": {"name": "moon", "statsAddend": {"hp": 20, "pp": 0, "attack": 2, "defense": 2, "agility": 1, "luck": 1}},
      "sun": {"name": "sun", "statsAddend": {"hp": 0, "pp": 20, "attack": 1, "defense": 1, "agility": 2, "luck": 2}},
      "typeless": {
         "name": "typeless",
         "statsAddend": {"hp": 20, "pp": 0, "attack": 4, "defense": 4, "agility": 4, "luck": 4}
      },
      "names": ["earth", "fire", "ice", "moon", "sun", "typeless", "wind"]
   },
   backgrounds: {
      //TODO: use data: backgrounds
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
      //TODO: use data: combatTypes
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
   //class priority is currently equal to the total required djinn count (all adepts have same total). assumes that there's no conflict
   //TODO: need classes for light/dark
   classes: {
      "Apostate": {
         "name": "Apostate",
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.35, "defense": 1.35, "agility": 1.65, "luck": 0.9},
         "psynergy": []
      },
      "Apprentice": {
         "name": "Apprentice",
         "priority": 1,
         "statsMultiplier": {"hp": 1, "pp": 1.15, "attack": 1.15, "defense": 1, "agility": 1.15, "luck": 0.9},
         "psynergy": []
      },
      "Berserker": {
         "name": "Berserker",
         "priority": 5,
         "statsMultiplier": {"hp": 1.65, "pp": 1.15, "attack": 1.5, "defense": 1.35, "agility": 1.35, "luck": 0.8},
         "psynergy": []
      },
      "Black Knight": {
         "name": "Black Knight",
         "priority": 7,
         "statsMultiplier": {"hp": 1.85, "pp": 1.25, "attack": 1.6, "defense": 1.45, "agility": 1.45, "luck": 0.8},
         "psynergy": []
      },
      "Brute": {
         "name": "Brute",
         "priority": 1,
         "statsMultiplier": {"hp": 1.15, "pp": 0.9, "attack": 1.2, "defense": 1.1, "agility": 1.1, "luck": 0.8},
         "psynergy": []
      },
      "Chaos Lord": {
         "name": "Chaos Lord",
         "priority": 9,
         "statsMultiplier": {"hp": 2.05, "pp": 1.35, "attack": 1.7, "defense": 1.55, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Conqueror": {
         "name": "Conqueror",
         "priority": 8,
         "statsMultiplier": {"hp": 1.9, "pp": 1.2, "attack": 1.55, "defense": 1.45, "agility": 1.5, "luck": 0.9},
         "psynergy": []
      },
      "Defender": {
         "name": "Defender",
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 1.15, "attack": 1.2, "defense": 1.25, "agility": 0.95, "luck": 1.2},
         "psynergy": []
      },
      "Duelist": {
         "name": "Duelist",
         "priority": 6,
         "statsMultiplier": {"hp": 1.55, "pp": 1.5, "attack": 1.4, "defense": 1.4, "agility": 1.35, "luck": 1.2},
         "psynergy": []
      },
      "Fearless": {
         "name": "Fearless",
         "priority": 5,
         "statsMultiplier": {"hp": 1.6, "pp": 1.3, "attack": 1.35, "defense": 1.4, "agility": 1.1, "luck": 1.2},
         "psynergy": []
      },
      "Gallant": {
         "name": "Gallant",
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.05, "attack": 1.3, "defense": 1.2, "agility": 1.3, "luck": 1},
         "psynergy": []
      },
      "Guardian": {
         "name": "Guardian",
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.85, "attack": 1.35, "defense": 1.4, "agility": 1.6, "luck": 1.3},
         "psynergy": []
      },
      "Heretic": {
         "name": "Heretic",
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.9, "attack": 1.4, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": []
      },
      "High Miko": {
         "name": "High Miko",
         "priority": 2,
         "statsMultiplier": {"hp": 0.9, "pp": 1.6, "attack": 0.8, "defense": 1, "agility": 1.3, "luck": 1.2},
         "psynergy": []
      },
      "Incantatrix": {
         "name": "Incantatrix",
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.9, "attack": 1.35, "defense": 1.35, "agility": 1.7, "luck": 1.1},
         "psynergy": []
      },
      "Infidel": {
         "name": "Infidel",
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.25, "defense": 1.25, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Jonin": {
         "name": "Jonin",
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.7, "attack": 1.7, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": []
      },
      "Knave": {
         "name": "Knave",
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 0.9, "attack": 1.25, "defense": 1.15, "agility": 1.2, "luck": 0.9},
         "psynergy": []
      },
      "Knight": {
         "name": "Knight",
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 0.95, "attack": 1.2, "defense": 1.1, "agility": 1.2, "luck": 1},
         "psynergy": []
      },
      "Leader": {
         "name": "Leader",
         "priority": 7,
         "statsMultiplier": {"hp": 1.8, "pp": 1.4, "attack": 1.5, "defense": 1.45, "agility": 1.5, "luck": 1},
         "psynergy": []
      },
      "Lord": {
         "name": "Lord",
         "priority": 6,
         "statsMultiplier": {"hp": 1.7, "pp": 1.15, "attack": 1.4, "defense": 1.3, "agility": 1.4, "luck": 1},
         "psynergy": []
      },
      "Master Miko": {
         "name": "Master Miko",
         "priority": 4,
         "statsMultiplier": {"hp": 1.1, "pp": 1.7, "attack": 0.9, "defense": 1.1, "agility": 1.4, "luck": 1.2},
         "psynergy": []
      },
      "Miko": {
         "name": "Miko",
         "priority": 0,
         "statsMultiplier": {"hp": 0.8, "pp": 1.5, "attack": 0.7, "defense": 0.9, "agility": 1.2, "luck": 1.2},
         "psynergy": []
      },
      "Mystic Miko": {
         "name": "Mystic Miko",
         "priority": 6,
         "statsMultiplier": {"hp": 1.3, "pp": 1.8, "attack": 1, "defense": 1.2, "agility": 1.5, "luck": 1.2},
         "psynergy": []
      },
      "Ninja": {
         "name": "Ninja",
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.65, "attack": 1.65, "defense": 1.35, "agility": 1.65, "luck": 0.9},
         "psynergy": []
      },
      "Outlaw": {
         "name": "Outlaw",
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1, "attack": 1.35, "defense": 1.25, "agility": 1.3, "luck": 0.9},
         "psynergy": []
      },
      "Paladin": {
         "name": "Paladin",
         "priority": 9,
         "statsMultiplier": {"hp": 2.05, "pp": 1.55, "attack": 1.6, "defense": 1.6, "agility": 1.3, "luck": 1.3},
         "psynergy": []
      },
      "Paragon": {
         "name": "Paragon",
         "priority": 7,
         "statsMultiplier": {"hp": 1.8, "pp": 1.4, "attack": 1.45, "defense": 1.5, "agility": 1.2, "luck": 1.2},
         "psynergy": []
      },
      "Practicant": {
         "name": "Practicant",
         "priority": 2,
         "statsMultiplier": {"hp": 1.2, "pp": 1.25, "attack": 1.25, "defense": 1.1, "agility": 1.25, "luck": 0.9},
         "psynergy": []
      },
      "Protector": {
         "name": "Protector",
         "priority": 9,
         "statsMultiplier": {"hp": 2, "pp": 1.5, "attack": 1.55, "defense": 1.6, "agility": 1.3, "luck": 1.2},
         "psynergy": []
      },
      "Psionicist": {
         "name": "Psionicist",
         "priority": 4,
         "statsMultiplier": {"hp": 1.4, "pp": 1.35, "attack": 1.35, "defense": 1.2, "agility": 1.35, "luck": 0.9},
         "psynergy": []
      },
      "Psy Champion": {
         "name": "Psy Champion",
         "priority": 9,
         "statsMultiplier": {"hp": 1.9, "pp": 1.6, "attack": 1.6, "defense": 1.45, "agility": 1.6, "luck": 0.9},
         "psynergy": []
      },
      "Psy Knight": {
         "name": "Psy Knight",
         "priority": 7,
         "statsMultiplier": {"hp": 1.7, "pp": 1.5, "attack": 1.5, "defense": 1.35, "agility": 1.5, "luck": 0.9},
         "psynergy": []
      },
      "Radiant Miko": {
         "name": "Radiant Miko",
         "priority": 8,
         "statsMultiplier": {"hp": 1.5, "pp": 1.9, "attack": 1.1, "defense": 1.3, "agility": 1.6, "luck": 1.2},
         "psynergy": []
      },
      "Red Mage": {
         "name": "Red Mage",
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.8, "attack": 1.25, "defense": 1.25, "agility": 1.6, "luck": 1.1},
         "psynergy": []
      },
      "Rogue": {
         "name": "Rogue",
         "priority": 0,
         "statsMultiplier": {"hp": 1.1, "pp": 0.8, "attack": 1.15, "defense": 1.05, "agility": 1.1, "luck": 0.9},
         "psynergy": []
      },
      "Ruffian": {
         "name": "Ruffian",
         "priority": 2,
         "statsMultiplier": {"hp": 1.35, "pp": 1, "attack": 1.3, "defense": 1.2, "agility": 1.2, "luck": 0.8},
         "psynergy": []
      },
      "Samurai": {
         "name": "Samurai",
         "priority": 7,
         "statsMultiplier": {"hp": 1.9, "pp": 1.35, "attack": 1.55, "defense": 1.5, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Savage": {
         "name": "Savage",
         "priority": 4,
         "statsMultiplier": {"hp": 1.55, "pp": 1.1, "attack": 1.4, "defense": 1.3, "agility": 1.3, "luck": 0.8},
         "psynergy": []
      },
      "Shinobi": {
         "name": "Shinobi",
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.55, "attack": 1.55, "defense": 1.25, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Shogun": {
         "name": "Shogun",
         "priority": 9,
         "statsMultiplier": {"hp": 2.1, "pp": 1.45, "attack": 1.65, "defense": 1.6, "agility": 1.65, "luck": 0.8},
         "psynergy": []
      },
      "Sovereign": {
         "name": "Sovereign",
         "priority": 8,
         "statsMultiplier": {"hp": 1.9, "pp": 1.25, "attack": 1.5, "defense": 1.4, "agility": 1.5, "luck": 1},
         "psynergy": []
      },
      "Spellblade": {
         "name": "Spellblade",
         "priority": 5,
         "statsMultiplier": {"hp": 1.5, "pp": 1.4, "attack": 1.4, "defense": 1.25, "agility": 1.4, "luck": 0.9},
         "psynergy": []
      },
      "Squire": {
         "name": "Squire",
         "priority": 0,
         "statsMultiplier": {"hp": 1.1, "pp": 0.85, "attack": 1.1, "defense": 1, "agility": 1.1, "luck": 1},
         "psynergy": []
      },
      "Swordsman": {
         "name": "Swordsman",
         "priority": 1,
         "statsMultiplier": {"hp": 1.1, "pp": 1.05, "attack": 1.1, "defense": 1.15, "agility": 0.85, "luck": 1.2},
         "psynergy": []
      },
      "Templar": {
         "name": "Templar",
         "priority": 8,
         "statsMultiplier": {"hp": 1.95, "pp": 1.5, "attack": 1.55, "defense": 1.55, "agility": 1.25, "luck": 1.3},
         "psynergy": []
      },
      "Valiant": {
         "name": "Valiant",
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.25, "attack": 1.3, "defense": 1.35, "agility": 1.05, "luck": 1.2},
         "psynergy": []
      },
      "Valkyrie": {
         "name": "Valkyrie",
         "priority": 9,
         "statsMultiplier": {"hp": 1.85, "pp": 1.65, "attack": 1.55, "defense": 1.55, "agility": 1.5, "luck": 1.2},
         "psynergy": []
      },
      "Vanguard": {
         "name": "Vanguard",
         "priority": 8,
         "statsMultiplier": {"hp": 1.75, "pp": 1.6, "attack": 1.5, "defense": 1.5, "agility": 1.45, "luck": 1.2},
         "psynergy": []
      },
      "Veteran": {
         "name": "Veteran",
         "priority": 6,
         "statsMultiplier": {"hp": 1.7, "pp": 1.1, "attack": 1.45, "defense": 1.35, "agility": 1.4, "luck": 0.9},
         "psynergy": []
      },
      "Warden": {
         "name": "Warden",
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.75, "attack": 1.25, "defense": 1.3, "agility": 1.5, "luck": 1.3},
         "psynergy": []
      },
      "Warlord": {
         "name": "Warlord",
         "priority": 9,
         "statsMultiplier": {"hp": 2, "pp": 1.5, "attack": 1.6, "defense": 1.55, "agility": 1.6, "luck": 1},
         "psynergy": []
      },
      "White Knight": {
         "name": "White Knight",
         "priority": 6,
         "statsMultiplier": {"hp": 1.75, "pp": 1.4, "attack": 1.45, "defense": 1.45, "agility": 1.15, "luck": 1.3},
         "psynergy": []
      },
      "Armed": {
         "name": "Armed",
         "priority": 1,
         "statsMultiplier": {"hp": 1.05, "pp": 1, "attack": 1.15, "defense": 1.1, "agility": 1.05, "luck": 1.1},
         "psynergy": []
      },
      "Baron": {
         "name": "Baron",
         "priority": 6,
         "statsMultiplier": {"hp": 1.8, "pp": 1.1, "attack": 1.35, "defense": 1.4, "agility": 1.25, "luck": 1.1},
         "psynergy": []
      },
      "Cannoneer": {
         "name": "Cannoneer",
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 1, "attack": 1.1, "defense": 1.1, "agility": 1, "luck": 1.2},
         "psynergy": []
      },
      "Corsair": {
         "name": "Corsair",
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.1, "attack": 1.2, "defense": 1.2, "agility": 1.1, "luck": 1.2},
         "psynergy": []
      },
      "Fair": {
         "name": "Fair",
         "priority": 2,
         "statsMultiplier": {"hp": 1.25, "pp": 1.1, "attack": 1.25, "defense": 1.2, "agility": 1.15, "luck": 1.1},
         "psynergy": []
      },
      "Fated": {
         "name": "Fated",
         "priority": 4,
         "statsMultiplier": {"hp": 1.4, "pp": 1.3, "attack": 1.3, "defense": 1.3, "agility": 1.3, "luck": 1},
         "psynergy": []
      },
      "Fire Master": {
         "name": "Fire Master",
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.5, "attack": 1.2, "defense": 1.25, "agility": 1.45, "luck": 0.9},
         "psynergy": []
      },
      "Flame User": {
         "name": "Flame User",
         "priority": 0,
         "statsMultiplier": {"hp": 1, "pp": 1.2, "attack": 0.9, "defense": 0.95, "agility": 1.15, "luck": 0.9},
         "psynergy": []
      },
      "Guard": {
         "name": "Guard",
         "priority": 0,
         "statsMultiplier": {"hp": 1.2, "pp": 0.8, "attack": 1.05, "defense": 1.1, "agility": 0.95, "luck": 1.1},
         "psynergy": []
      },
      "Hex": {
         "name": "Hex",
         "priority": 4,
         "statsMultiplier": {"hp": 1.3, "pp": 1.4, "attack": 1.1, "defense": 1.15, "agility": 1.35, "luck": 0.9},
         "psynergy": []
      },
      "Hull Reaver": {
         "name": "Hull Reaver",
         "priority": 8,
         "statsMultiplier": {"hp": 1.9, "pp": 1.3, "attack": 1.4, "defense": 1.4, "agility": 1.3, "luck": 1.2},
         "psynergy": []
      },
      "Incendiary": {
         "name": "Incendiary",
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.6, "attack": 1.3, "defense": 1.35, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Luminier": {
         "name": "Luminier",
         "priority": 7,
         "statsMultiplier": {"hp": 1.75, "pp": 1.35, "attack": 1.5, "defense": 1.45, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Mystic Knight": {
         "name": "Mystic Knight",
         "priority": 5,
         "statsMultiplier": {"hp": 1.5, "pp": 1.35, "attack": 1.35, "defense": 1.35, "agility": 1.35, "luck": 1},
         "psynergy": []
      },
      "Page": {
         "name": "Page",
         "priority": 1,
         "statsMultiplier": {"hp": 1, "pp": 1.1, "attack": 1.1, "defense": 1.1, "agility": 1.1, "luck": 1},
         "psynergy": []
      },
      "Phalanx": {
         "name": "Phalanx",
         "priority": 8,
         "statsMultiplier": {"hp": 2, "pp": 1.2, "attack": 1.45, "defense": 1.5, "agility": 1.35, "luck": 1.1},
         "psynergy": []
      },
      "Pirate": {
         "name": "Pirate",
         "priority": 0,
         "statsMultiplier": {"hp": 1.1, "pp": 0.9, "attack": 1, "defense": 1, "agility": 0.9, "luck": 1.2},
         "psynergy": []
      },
      "Pirate King": {
         "name": "Pirate King",
         "priority": 6,
         "statsMultiplier": {"hp": 1.7, "pp": 1.2, "attack": 1.3, "defense": 1.3, "agility": 1.2, "luck": 1.2},
         "psynergy": []
      },
      "Pupil": {
         "name": "Pupil",
         "priority": 2,
         "statsMultiplier": {"hp": 1.2, "pp": 1.2, "attack": 1.2, "defense": 1.2, "agility": 1.2, "luck": 1},
         "psynergy": []
      },
      "Radiant": {
         "name": "Radiant",
         "priority": 9,
         "statsMultiplier": {"hp": 1.95, "pp": 1.45, "attack": 1.6, "defense": 1.55, "agility": 1.5, "luck": 1.1},
         "psynergy": []
      },
      "Righteous": {
         "name": "Righteous",
         "priority": 5,
         "statsMultiplier": {"hp": 1.55, "pp": 1.25, "attack": 1.4, "defense": 1.35, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Soldier": {
         "name": "Soldier",
         "priority": 2,
         "statsMultiplier": {"hp": 1.4, "pp": 0.9, "attack": 1.15, "defense": 1.2, "agility": 1.05, "luck": 1.1},
         "psynergy": []
      },
      "Star Knight": {
         "name": "Star Knight",
         "priority": 7,
         "statsMultiplier": {"hp": 1.7, "pp": 1.45, "attack": 1.45, "defense": 1.45, "agility": 1.45, "luck": 1},
         "psynergy": []
      },
      "Sun Champion": {
         "name": "Sun Champion",
         "priority": 9,
         "statsMultiplier": {"hp": 1.9, "pp": 1.55, "attack": 1.55, "defense": 1.55, "agility": 1.55, "luck": 1},
         "psynergy": []
      },
      "Virtuous": {
         "name": "Virtuous",
         "priority": 4,
         "statsMultiplier": {"hp": 1.45, "pp": 1.2, "attack": 1.35, "defense": 1.3, "agility": 1.25, "luck": 1.1},
         "psynergy": []
      },
      "Warrior": {
         "name": "Warrior",
         "priority": 4,
         "statsMultiplier": {"hp": 1.6, "pp": 1, "attack": 1.25, "defense": 1.3, "agility": 1.15, "luck": 1.1},
         "psynergy": []
      },
      "Witch": {
         "name": "Witch",
         "priority": 2,
         "statsMultiplier": {"hp": 1.15, "pp": 1.3, "attack": 1, "defense": 1.05, "agility": 1.25, "luck": 0.9},
         "psynergy": []
      },
      "Admiral": {
         "name": "Admiral",
         "priority": 8,
         "statsMultiplier": {"hp": 1.95, "pp": 1.3, "attack": 1.45, "defense": 1.45, "agility": 1.35, "luck": 1},
         "psynergy": []
      },
      "Angel": {
         "name": "Angel",
         "priority": 8,
         "statsMultiplier": {"hp": 1.65, "pp": 1.65, "attack": 1.2, "defense": 1.3, "agility": 1.4, "luck": 1.3},
         "psynergy": []
      },
      "Arcanist": {
         "name": "Arcanist",
         "priority": 9,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.35, "agility": 1.65, "luck": 1.1},
         "psynergy": []
      },
      "Archon": {
         "name": "Archon",
         "priority": 9,
         "statsMultiplier": {"hp": 1.95, "pp": 1.5, "attack": 1.65, "defense": 1.5, "agility": 1.65, "luck": 1},
         "psynergy": []
      },
      "Ascetic": {
         "name": "Ascetic",
         "priority": 4,
         "statsMultiplier": {"hp": 1.3, "pp": 1.55, "attack": 1.1, "defense": 1.15, "agility": 1.25, "luck": 1.1},
         "psynergy": []
      },
      "Avenger": {
         "name": "Avenger",
         "priority": 8,
         "statsMultiplier": {"hp": 1.95, "pp": 1.4, "attack": 1.65, "defense": 1.55, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Captain": {
         "name": "Captain",
         "priority": 4,
         "statsMultiplier": {"hp": 1.55, "pp": 1.1, "attack": 1.25, "defense": 1.25, "agility": 1.15, "luck": 1},
         "psynergy": []
      },
      "Channeler": {
         "name": "Channeler",
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.75, "attack": 1.55, "defense": 1.45, "agility": 1.65, "luck": 0.8},
         "psynergy": []
      },
      "Cleric": {
         "name": "Cleric",
         "priority": 4,
         "statsMultiplier": {"hp": 1.25, "pp": 1.45, "attack": 1, "defense": 1.1, "agility": 1.2, "luck": 1.3},
         "psynergy": []
      },
      "Commander": {
         "name": "Commander",
         "priority": 6,
         "statsMultiplier": {"hp": 1.75, "pp": 1.2, "attack": 1.35, "defense": 1.35, "agility": 1.25, "luck": 1},
         "psynergy": []
      },
      "Counselor": {
         "name": "Counselor",
         "priority": 6,
         "statsMultiplier": {"hp": 1.6, "pp": 1.6, "attack": 1.45, "defense": 1.35, "agility": 1.45, "luck": 0.9},
         "psynergy": []
      },
      "Destroyer": {
         "name": "Destroyer",
         "priority": 9,
         "statsMultiplier": {"hp": 2.05, "pp": 1.45, "attack": 1.7, "defense": 1.6, "agility": 1.6, "luck": 0.8},
         "psynergy": []
      },
      "Divine Mage": {
         "name": "Divine Mage",
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.75, "attack": 1.25, "defense": 1.25, "agility": 1.6, "luck": 1.2},
         "psynergy": []
      },
      "Druid": {
         "name": "Druid",
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.8, "attack": 1.3, "defense": 1.35, "agility": 1.6, "luck": 1.3},
         "psynergy": []
      },
      "Elementalist": {
         "name": "Elementalist",
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.2, "agility": 1.5, "luck": 1.1},
         "psynergy": []
      },
      "Enlightened": {
         "name": "Enlightened",
         "priority": 7,
         "statsMultiplier": {"hp": 1.6, "pp": 1.75, "attack": 1.25, "defense": 1.3, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Explorer": {
         "name": "Explorer",
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 1.05, "attack": 1.3, "defense": 1.15, "agility": 1.25, "luck": 0.9},
         "psynergy": []
      },
      "Fateweaver": {
         "name": "Fateweaver",
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.85, "attack": 1.35, "defense": 1.35, "agility": 1.7, "luck": 1.2},
         "psynergy": []
      },
      "Fury": {
         "name": "Fury",
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.8, "attack": 1.6, "defense": 1.5, "agility": 1.7, "luck": 0.8},
         "psynergy": []
      },
      "General": {
         "name": "General",
         "priority": 9,
         "statsMultiplier": {"hp": 1.9, "pp": 1.75, "attack": 1.6, "defense": 1.5, "agility": 1.6, "luck": 0.9},
         "psynergy": []
      },
      "Globetrotter": {
         "name": "Globetrotter",
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.15, "attack": 1.4, "defense": 1.25, "agility": 1.35, "luck": 0.9},
         "psynergy": []
      },
      "Guru": {
         "name": "Guru",
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.85, "attack": 1.35, "defense": 1.4, "agility": 1.5, "luck": 1.1},
         "psynergy": []
      },
      "Healer": {
         "name": "Healer",
         "priority": 5,
         "statsMultiplier": {"hp": 1.35, "pp": 1.6, "attack": 1.1, "defense": 1.15, "agility": 1.4, "luck": 1.3},
         "psynergy": []
      },
      "Herald": {
         "name": "Herald",
         "priority": 7,
         "statsMultiplier": {"hp": 1.75, "pp": 1.4, "attack": 1.55, "defense": 1.4, "agility": 1.55, "luck": 1},
         "psynergy": []
      },
      "Herbalist": {
         "name": "Herbalist",
         "priority": 1,
         "statsMultiplier": {"hp": 0.95, "pp": 1.25, "attack": 0.85, "defense": 0.9, "agility": 1.15, "luck": 1.3},
         "psynergy": []
      },
      "Holy Knight": {
         "name": "Holy Knight",
         "priority": 9,
         "statsMultiplier": {"hp": 2.1, "pp": 1.55, "attack": 1.55, "defense": 1.6, "agility": 1.3, "luck": 1.3},
         "psynergy": []
      },
      "Ice Rogue 1": {"name": "Ice Rogue 1", "priority": 0, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 2": {"name": "Ice Rogue 2", "priority": 2, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 3": {"name": "Ice Rogue 3", "priority": 4, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 4": {"name": "Ice Rogue 4", "priority": 6, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 5": {"name": "Ice Rogue 5", "priority": 8, "statsMultiplier": {}, "psynergy": []},
      "Mariner": {
         "name": "Mariner",
         "priority": 0,
         "statsMultiplier": {"hp": 1.15, "pp": 0.9, "attack": 1.05, "defense": 1.05, "agility": 0.95, "luck": 1},
         "psynergy": []
      },
      "Monk": {
         "name": "Monk",
         "priority": 1,
         "statsMultiplier": {"hp": 1, "pp": 1.3, "attack": 0.9, "defense": 0.95, "agility": 1.05, "luck": 1.1},
         "psynergy": []
      },
      "Naturalist": {
         "name": "Naturalist",
         "priority": 2,
         "statsMultiplier": {"hp": 1.1, "pp": 1.35, "attack": 0.95, "defense": 1, "agility": 1.25, "luck": 1.3},
         "psynergy": []
      },
      "Officiant": {
         "name": "Officiant",
         "priority": 2,
         "statsMultiplier": {"hp": 1.1, "pp": 1.35, "attack": 0.9, "defense": 1, "agility": 1.1, "luck": 1.3},
         "psynergy": []
      },
      "Privateer": {
         "name": "Privateer",
         "priority": 2,
         "statsMultiplier": {"hp": 1.35, "pp": 1, "attack": 1.15, "defense": 1.15, "agility": 1.05, "luck": 1},
         "psynergy": []
      },
      "Pure Mage": {
         "name": "Pure Mage",
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.8, "attack": 1.35, "defense": 1.35, "agility": 1.65, "luck": 1.3},
         "psynergy": []
      },
      "Renegade": {
         "name": "Renegade",
         "priority": 6,
         "statsMultiplier": {"hp": 1.75, "pp": 1.3, "attack": 1.55, "defense": 1.45, "agility": 1.45, "luck": 0.8},
         "psynergy": []
      },
      "Researcher": {
         "name": "Researcher",
         "priority": 2,
         "statsMultiplier": {"hp": 1.05, "pp": 1.4, "attack": 0.95, "defense": 1, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Saint": {
         "name": "Saint",
         "priority": 6,
         "statsMultiplier": {"hp": 1.45, "pp": 1.55, "attack": 1.1, "defense": 1.2, "agility": 1.3, "luck": 1.3},
         "psynergy": []
      },
      "Saint Knight": {
         "name": "Saint Knight",
         "priority": 7,
         "statsMultiplier": {"hp": 1.9, "pp": 1.45, "attack": 1.45, "defense": 1.5, "agility": 1.2, "luck": 1.3},
         "psynergy": []
      },
      "Savant": {
         "name": "Savant",
         "priority": 5,
         "statsMultiplier": {"hp": 1.3, "pp": 1.65, "attack": 1.1, "defense": 1.15, "agility": 1.45, "luck": 1.1},
         "psynergy": []
      },
      "Scholar": {
         "name": "Scholar",
         "priority": 4,
         "statsMultiplier": {"hp": 1.2, "pp": 1.55, "attack": 1.05, "defense": 1.1, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Sea Lord": {
         "name": "Sea Lord",
         "priority": 9,
         "statsMultiplier": {"hp": 2, "pp": 1.4, "attack": 1.65, "defense": 1.5, "agility": 1.6, "luck": 0.9},
         "psynergy": []
      },
      "Seafarer": {
         "name": "Seafarer",
         "priority": 1,
         "statsMultiplier": {"hp": 1.1, "pp": 0.95, "attack": 1.2, "defense": 1.05, "agility": 1.15, "luck": 0.9},
         "psynergy": []
      },
      "Shaman": {
         "name": "Shaman",
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.3, "agility": 1.6, "luck": 1.1},
         "psynergy": []
      },
      "Shugenja": {
         "name": "Shugenja",
         "priority": 5,
         "statsMultiplier": {"hp": 1.4, "pp": 1.65, "attack": 1.15, "defense": 1.2, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Strategist": {
         "name": "Strategist",
         "priority": 8,
         "statsMultiplier": {"hp": 1.8, "pp": 1.7, "attack": 1.55, "defense": 1.45, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Student": {
         "name": "Student",
         "priority": 1,
         "statsMultiplier": {"hp": 0.9, "pp": 1.3, "attack": 0.85, "defense": 0.9, "agility": 1.2, "luck": 1.1},
         "psynergy": []
      },
      "Thaumaturge": {
         "name": "Thaumaturge",
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.7, "attack": 1.2, "defense": 1.25, "agility": 1.5, "luck": 1.3},
         "psynergy": []
      },
      "Therapist": {
         "name": "Therapist",
         "priority": 4,
         "statsMultiplier": {"hp": 1.25, "pp": 1.5, "attack": 1.05, "defense": 1.1, "agility": 1.35, "luck": 1.3},
         "psynergy": []
      },
      "Water User": {
         "name": "Water User",
         "priority": 0,
         "statsMultiplier": {"hp": 0.95, "pp": 1.25, "attack": 0.8, "defense": 0.9, "agility": 1, "luck": 1.3},
         "psynergy": []
      },
      "Waverider": {
         "name": "Waverider",
         "priority": 5,
         "statsMultiplier": {"hp": 1.6, "pp": 1.2, "attack": 1.45, "defense": 1.3, "agility": 1.4, "luck": 0.9},
         "psynergy": []
      },
      "White Mage": {
         "name": "White Mage",
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.7, "attack": 1.25, "defense": 1.25, "agility": 1.55, "luck": 1.3},
         "psynergy": []
      },
      "Wild Mage": {
         "name": "Wild Mage",
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.65, "attack": 1.45, "defense": 1.35, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Windrider": {
         "name": "Windrider",
         "priority": 7,
         "statsMultiplier": {"hp": 1.8, "pp": 1.3, "attack": 1.55, "defense": 1.4, "agility": 1.5, "luck": 0.9},
         "psynergy": []
      },
      "Wise": {
         "name": "Wise",
         "priority": 7,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.25, "agility": 1.55, "luck": 1.1},
         "psynergy": []
      },
      "Worldwaker": {
         "name": "Worldwaker",
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.9, "attack": 1.35, "defense": 1.35, "agility": 1.65, "luck": 1.1},
         "psynergy": []
      },
      "Yamabushi": {
         "name": "Yamabushi",
         "priority": 2,
         "statsMultiplier": {"hp": 1.15, "pp": 1.4, "attack": 1, "defense": 1.05, "agility": 1.15, "luck": 1.1},
         "psynergy": []
      },
      "Acolyte": {
         "name": "Acolyte",
         "priority": 2,
         "statsMultiplier": {"hp": 1.1, "pp": 1.45, "attack": 1.05, "defense": 1, "agility": 1.3, "luck": 0.8},
         "psynergy": []
      },
      "Archmage": {
         "name": "Archmage",
         "priority": 6,
         "statsMultiplier": {"hp": 1.4, "pp": 1.55, "attack": 1.15, "defense": 1.2, "agility": 1.55, "luck": 1},
         "psynergy": []
      },
      "Augur": {
         "name": "Augur",
         "priority": 7,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.25, "agility": 1.55, "luck": 1.1},
         "psynergy": []
      },
      "Bolt User": {
         "name": "Bolt User",
         "priority": 0,
         "statsMultiplier": {"hp": 0.9, "pp": 1.25, "attack": 0.85, "defense": 0.9, "agility": 1.25, "luck": 1},
         "psynergy": []
      },
      "Clairvoyant": {
         "name": "Clairvoyant",
         "priority": 5,
         "statsMultiplier": {"hp": 1.3, "pp": 1.65, "attack": 1.1, "defense": 1.15, "agility": 1.45, "luck": 1.1},
         "psynergy": []
      },
      "Cultist": {
         "name": "Cultist",
         "priority": 4,
         "statsMultiplier": {"hp": 1.25, "pp": 1.6, "attack": 1.15, "defense": 1.1, "agility": 1.4, "luck": 0.8},
         "psynergy": []
      },
      "Disciple": {
         "name": "Disciple",
         "priority": 1,
         "statsMultiplier": {"hp": 0.95, "pp": 1.35, "attack": 0.95, "defense": 0.9, "agility": 1.2, "luck": 0.8},
         "psynergy": []
      },
      "Diviner": {
         "name": "Diviner",
         "priority": 4,
         "statsMultiplier": {"hp": 1.2, "pp": 1.55, "attack": 1.05, "defense": 1.1, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Fanatic": {
         "name": "Fanatic",
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.8, "attack": 1.3, "defense": 1.25, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Haruspex": {
         "name": "Haruspex",
         "priority": 2,
         "statsMultiplier": {"hp": 1.05, "pp": 1.4, "attack": 0.95, "defense": 1, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Illusionist": {
         "name": "Illusionist",
         "priority": 4,
         "statsMultiplier": {"hp": 1.2, "pp": 1.45, "attack": 1.05, "defense": 1.1, "agility": 1.45, "luck": 1},
         "psynergy": []
      },
      "Inquisitor": {
         "name": "Inquisitor",
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.9, "attack": 1.4, "defense": 1.35, "agility": 1.65, "luck": 0.8},
         "psynergy": []
      },
      "Magician": {
         "name": "Magician",
         "priority": 2,
         "statsMultiplier": {"hp": 1.05, "pp": 1.35, "attack": 0.95, "defense": 1, "agility": 1.35, "luck": 1},
         "psynergy": []
      },
      "Oracle": {
         "name": "Oracle",
         "priority": 9,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.35, "agility": 1.65, "luck": 1.1},
         "psynergy": []
      },
      "Seer": {
         "name": "Seer",
         "priority": 1,
         "statsMultiplier": {"hp": 0.9, "pp": 1.3, "attack": 0.85, "defense": 0.9, "agility": 1.2, "luck": 1.1},
         "psynergy": []
      },
      "Sorcerer": {
         "name": "Sorcerer",
         "priority": 8,
         "statsMultiplier": {"hp": 1.6, "pp": 1.65, "attack": 1.25, "defense": 1.3, "agility": 1.65, "luck": 1},
         "psynergy": []
      },
      "Wind Rogue 1": {"name": "Wind Rogue 1", "priority": 0, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 2": {"name": "Wind Rogue 2", "priority": 2, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 3": {"name": "Wind Rogue 3", "priority": 4, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 4": {"name": "Wind Rogue 4", "priority": 6, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 5": {"name": "Wind Rogue 5", "priority": 8, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 1": {"name": "Wind Warrior 1", "priority": 0, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 2": {"name": "Wind Warrior 2", "priority": 2, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 3": {"name": "Wind Warrior 3", "priority": 4, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 4": {"name": "Wind Warrior 4", "priority": 6, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 5": {"name": "Wind Warrior 5", "priority": 8, "statsMultiplier": {}, "psynergy": []},
      "Zealot": {
         "name": "Zealot",
         "priority": 5,
         "statsMultiplier": {"hp": 1.35, "pp": 1.7, "attack": 1.2, "defense": 1.15, "agility": 1.45, "luck": 0.8},
         "psynergy": []
      },
      "names": ["Acolyte", "Admiral", "Angel", "Apostate", "Apprentice", "Arcanist", "Archmage", "Archon", "Armed", "Ascetic", "Augur", "Avenger", "Baron", "Berserker", "Black Knight", "Bolt User", "Brute", "Cannoneer", "Captain", "Channeler", "Chaos Lord", "Clairvoyant", "Cleric", "Commander", "Conqueror", "Corsair", "Counselor", "Cultist", "Defender", "Destroyer", "Disciple", "Divine Mage", "Diviner", "Druid", "Duelist", "Elementalist", "Enlightened", "Explorer", "Fair", "Fanatic", "Fated", "Fateweaver", "Fearless", "Fire Master", "Flame User", "Fury", "Gallant", "General", "Globetrotter", "Guard", "Guardian", "Guru", "Haruspex", "Healer", "Herald", "Herbalist", "Heretic", "Hex", "High Miko", "Holy Knight", "Hull Reaver", "Ice Rogue 1", "Ice Rogue 2", "Ice Rogue 3", "Ice Rogue 4", "Ice Rogue 5", "Illusionist", "Incantatrix", "Incendiary", "Infidel", "Inquisitor", "Jonin", "Knave", "Knight", "Leader", "Lord", "Luminier", "Magician", "Mariner", "Master Miko", "Miko", "Monk", "Mystic Knight", "Mystic Miko", "Naturalist", "Ninja", "Officiant", "Oracle", "Outlaw", "Page", "Paladin", "Paragon", "Phalanx", "Pirate", "Pirate King", "Practicant", "Privateer", "Protector", "Psionicist", "Psy Champion", "Psy Knight", "Pupil", "Pure Mage", "Radiant", "Radiant Miko", "Red Mage", "Renegade", "Researcher", "Righteous", "Rogue", "Ruffian", "Saint", "Saint Knight", "Samurai", "Savage", "Savant", "Scholar", "Sea Lord", "Seafarer", "Seer", "Shaman", "Shinobi", "Shogun", "Shugenja", "Soldier", "Sorcerer", "Sovereign", "Spellblade", "Squire", "Star Knight", "Strategist", "Student", "Sun Champion", "Swordsman", "Templar", "Thaumaturge", "Therapist", "Valiant", "Valkyrie", "Vanguard", "Veteran", "Virtuous", "Warden", "Warlord", "Warrior", "Water User", "Waverider", "White Knight", "White Mage", "Wild Mage", "Wind Rogue 1", "Wind Rogue 2", "Wind Rogue 3", "Wind Rogue 4", "Wind Rogue 5", "Wind Warrior 1", "Wind Warrior 2", "Wind Warrior 3", "Wind Warrior 4", "Wind Warrior 5", "Windrider", "Wise", "Witch", "Worldwaker", "Yamabushi", "Zealot"]
   },
   classRequirements: {
      "earth": {
         "Apostate": {
            "combatType": ["Mage"],
            "djinnCount": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}
         },
         "Apprentice": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}},
         "Berserker": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}},
         "Black Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 1, "fire": 6, "wind": 0, "ice": 0}
         },
         "Brute": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}},
         "Chaos Lord": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 2, "fire": 7, "wind": 0, "ice": 0}},
         "Conqueror": {"combatType": ["Rogue"], "djinnCount": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}},
         "Defender": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Duelist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}},
         "Fearless": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}},
         "Gallant": {"combatType": ["Warrior"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Guardian": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Heretic": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
         "High Miko": {"combatType": ["Mage"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Incantatrix": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Infidel": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Jonin": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
         "Knave": {"combatType": ["Rogue"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Knight": {"combatType": ["Warrior"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Leader": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 3}},
         "Lord": {"combatType": ["Warrior"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}},
         "Master Miko": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Miko": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Mystic Miko": {"combatType": ["Mage"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}},
         "Ninja": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}},
         "Outlaw": {"combatType": ["Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Paladin": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}},
         "Paragon": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 1, "fire": 0, "wind": 0, "ice": 6}},
         "Practicant": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Protector": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 7}},
         "Psionicist": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Psy Champion": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 2, "fire": 0, "wind": 7, "ice": 0}
         },
         "Psy Knight": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 1, "fire": 0, "wind": 6, "ice": 0}},
         "Radiant Miko": {"combatType": ["Mage"], "djinnCount": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}},
         "Red Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}},
         "Rogue": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Ruffian": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Samurai": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}},
         "Savage": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Shinobi": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Shogun": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Sovereign": {"combatType": ["Warrior"], "djinnCount": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}},
         "Spellblade": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}},
         "Squire": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Swordsman": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 1}},
         "Templar": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Valiant": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
         "Valkyrie": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}},
         "Vanguard": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Veteran": {"combatType": ["Rogue"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}},
         "Warden": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}},
         "Warlord": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 4}},
         "White Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}
         },
         "names": ["Apostate", "Apprentice", "Berserker", "Black Knight", "Brute", "Chaos Lord", "Conqueror", "Defender", "Duelist", "Fearless", "Gallant", "Guardian", "Heretic", "High Miko", "Incantatrix", "Infidel", "Jonin", "Knave", "Knight", "Leader", "Lord", "Master Miko", "Miko", "Mystic Miko", "Ninja", "Outlaw", "Paladin", "Paragon", "Practicant", "Protector", "Psionicist", "Psy Champion", "Psy Knight", "Radiant Miko", "Red Mage", "Rogue", "Ruffian", "Samurai", "Savage", "Shinobi", "Shogun", "Sovereign", "Spellblade", "Squire", "Swordsman", "Templar", "Valiant", "Valkyrie", "Vanguard", "Veteran", "Warden", "Warlord", "White Knight"]
      },
      "fire": {
         "Apostate": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}},
         "Armed": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 1}},
         "Baron": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 6, "wind": 0, "ice": 0}},
         "Berserker": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}},
         "Black Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 6, "fire": 1, "wind": 0, "ice": 0}
         },
         "Brute": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}},
         "Cannoneer": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Chaos Lord": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 7, "fire": 2, "wind": 0, "ice": 0}},
         "Corsair": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Duelist": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}},
         "Fair": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Fated": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Fire Master": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 6, "wind": 0, "ice": 0}},
         "Flame User": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Guard": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Guardian": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "Heretic": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
         "Hex": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Hull Reaver": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}},
         "Incantatrix": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "Incendiary": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}},
         "Infidel": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
         "Jonin": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
         "Leader": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 3}},
         "Luminier": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 1, "wind": 0, "ice": 6}},
         "Mystic Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}
         },
         "Ninja": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}},
         "Page": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}},
         "Paladin": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}},
         "Phalanx": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}},
         "Pirate": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Pirate King": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 6, "wind": 0, "ice": 0}},
         "Pupil": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Radiant": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 7}},
         "Red Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
         "Righteous": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}},
         "Ruffian": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Samurai": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
         "Savage": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Shinobi": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
         "Shogun": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "Soldier": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Star Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 1, "wind": 6, "ice": 0}
         },
         "Sun Champion": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 2, "wind": 7, "ice": 0}
         },
         "Templar": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}},
         "Valkyrie": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}},
         "Vanguard": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}},
         "Virtuous": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
         "Warden": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
         "Warlord": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}},
         "Warrior": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "White Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}
         },
         "Witch": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "names": ["Apostate", "Armed", "Baron", "Berserker", "Black Knight", "Brute", "Cannoneer", "Chaos Lord", "Corsair", "Duelist", "Fair", "Fated", "Fire Master", "Flame User", "Guard", "Guardian", "Heretic", "Hex", "Hull Reaver", "Incantatrix", "Incendiary", "Infidel", "Jonin", "Leader", "Luminier", "Mystic Knight", "Ninja", "Page", "Paladin", "Phalanx", "Pirate", "Pirate King", "Pupil", "Radiant", "Red Mage", "Righteous", "Ruffian", "Samurai", "Savage", "Shinobi", "Shogun", "Soldier", "Star Knight", "Sun Champion", "Templar", "Valkyrie", "Vanguard", "Virtuous", "Warden", "Warlord", "Warrior", "White Knight", "Witch"]
      },
      "wind": {
         "Acolyte": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Arcanist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 7, "ice": 2}},
         "Archmage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 6, "ice": 0}},
         "Archon": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
         "Augur": {"combatType": ["Mage"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 1}},
         "Avenger": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Bolt User": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Channeler": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Clairvoyant": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}},
         "Counselor": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}},
         "Cultist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Destroyer": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}},
         "Disciple": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}},
         "Divine Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 4, "ice": 0}},
         "Diviner": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Elementalist": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}},
         "Fanatic": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 6, "wind": 1, "ice": 0}},
         "Fateweaver": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
         "Fury": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}},
         "General": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 4}},
         "Haruspex": {"combatType": ["Mage"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Herald": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 4, "ice": 0}},
         "Holy Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}
         },
         "Illusionist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Inquisitor": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 7, "wind": 2, "ice": 0}},
         "Magician": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Oracle": {"combatType": ["Mage"], "djinnCount": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}},
         "Pure Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
         "Renegade": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}},
         "Researcher": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Saint Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 3, "wind": 4, "ice": 0}
         },
         "Savant": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}},
         "Scholar": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Seer": {"combatType": ["Mage"], "djinnCount": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}},
         "Shaman": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}},
         "Sorcerer": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 8, "ice": 0}},
         "Strategist": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}},
         "Student": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}},
         "White Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 4, "ice": 0}},
         "Wild Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}},
         "Wind Rogue 1": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Wind Rogue 2": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Wind Rogue 3": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Wind Rogue 4": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 6, "ice": 0}},
         "Wind Rogue 5": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 8, "ice": 0}},
         "Wind Warrior 1": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Wind Warrior 2": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Wind Warrior 3": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Wind Warrior 4": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 6, "ice": 0}},
         "Wind Warrior 5": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 8, "ice": 0}},
         "Wise": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 6, "ice": 1}},
         "Worldwaker": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 4}},
         "Zealot": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}},
         "names": ["Acolyte", "Arcanist", "Archmage", "Archon", "Augur", "Avenger", "Bolt User", "Channeler", "Clairvoyant", "Counselor", "Cultist", "Destroyer", "Disciple", "Divine Mage", "Diviner", "Elementalist", "Fanatic", "Fateweaver", "Fury", "General", "Haruspex", "Herald", "Holy Knight", "Illusionist", "Inquisitor", "Magician", "Oracle", "Pure Mage", "Renegade", "Researcher", "Saint Knight", "Savant", "Scholar", "Seer", "Shaman", "Sorcerer", "Strategist", "Student", "White Mage", "Wild Mage", "Wind Rogue 1", "Wind Rogue 2", "Wind Rogue 3", "Wind Rogue 4", "Wind Rogue 5", "Wind Warrior 1", "Wind Warrior 2", "Wind Warrior 3", "Wind Warrior 4", "Wind Warrior 5", "Wise", "Worldwaker", "Zealot"]
      },
      "ice": {
         "Admiral": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}},
         "Angel": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}},
         "Arcanist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 7}},
         "Archon": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}},
         "Armed": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}},
         "Ascetic": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Avenger": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}},
         "Captain": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
         "Channeler": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}},
         "Cleric": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
         "Commander": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 6}},
         "Counselor": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
         "Defender": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Destroyer": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "Divine Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 4}},
         "Druid": {"combatType": ["Mage"], "djinnCount": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}},
         "Elementalist": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
         "Enlightened": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 6, "wind": 0, "ice": 1}},
         "Explorer": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Fair": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Fateweaver": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}},
         "Fearless": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}},
         "Fury": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "General": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Globetrotter": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}
         },
         "Guru": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 7, "wind": 0, "ice": 2}},
         "Healer": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}},
         "Herald": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 4}},
         "Herbalist": {"combatType": ["Mage"], "djinnCount": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}},
         "Holy Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}
         },
         "Ice Rogue 1": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Ice Rogue 2": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Ice Rogue 3": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
         "Ice Rogue 4": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 6}},
         "Ice Rogue 5": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}},
         "Luminier": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 6, "wind": 0, "ice": 1}},
         "Mariner": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Monk": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}},
         "Naturalist": {"combatType": ["Mage"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Officiant": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Paragon": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 1}},
         "Privateer": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Protector": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}},
         "Pure Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}},
         "Radiant": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 7, "wind": 0, "ice": 2}},
         "Renegade": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Researcher": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Righteous": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}},
         "Saint": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 6}},
         "Saint Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 4}
         },
         "Savant": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}},
         "Scholar": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
         "Sea Lord": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 7, "ice": 2}},
         "Seafarer": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}},
         "Shaman": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}},
         "Shugenja": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}},
         "Strategist": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}},
         "Student": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 1}},
         "Swordsman": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}},
         "Thaumaturge": {"combatType": ["Mage"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 1}},
         "Therapist": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Valiant": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Virtuous": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Water User": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Waverider": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}},
         "White Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 4}},
         "Wild Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Windrider": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 6, "ice": 1}},
         "Wise": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 1, "ice": 6}},
         "Worldwaker": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Yamabushi": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "names": ["Admiral", "Angel", "Arcanist", "Archon", "Armed", "Ascetic", "Avenger", "Captain", "Channeler", "Cleric", "Commander", "Counselor", "Defender", "Destroyer", "Divine Mage", "Druid", "Elementalist", "Enlightened", "Explorer", "Fair", "Fateweaver", "Fearless", "Fury", "General", "Globetrotter", "Guru", "Healer", "Herald", "Herbalist", "Holy Knight", "Ice Rogue 1", "Ice Rogue 2", "Ice Rogue 3", "Ice Rogue 4", "Ice Rogue 5", "Luminier", "Mariner", "Monk", "Naturalist", "Officiant", "Paragon", "Privateer", "Protector", "Pure Mage", "Radiant", "Renegade", "Researcher", "Righteous", "Saint", "Saint Knight", "Savant", "Scholar", "Sea Lord", "Seafarer", "Shaman", "Shugenja", "Strategist", "Student", "Swordsman", "Thaumaturge", "Therapist", "Valiant", "Virtuous", "Water User", "Waverider", "White Mage", "Wild Mage", "Windrider", "Wise", "Worldwaker", "Yamabushi"]
      }
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
      //TODO: need data: equipment
      'Ixion Mail': {
         name: 'Ixion Mail',
         description: 'Armor: Resists Wind & Water',
         statsAddend: {hp: 0, pp: 0, attack: 0, defense: 26, agility: 0, luck: 0}
      },
      names: ['Ixion Mail']
   },
   //this is the correct spelling from the video game (not Psy Energy even though it is "Psychic energy")
   psynergy: {
      //TODO: need data: psynergy (here and in the classes)
      'Cure': {name: 'Cure', description: 'Restore 70 HP.'},
      Quake: {name: 'Quake', description: 'Attack with a powerful quake.'},
      Earthquake: {name: 'Earthquake', description: 'Attack with a mighty tremor.'},
      Spire: {name: 'Spire', description: 'Attack with earthen spire.'},
      Gaia: {name: 'Gaia', description: 'Attack with the earth\'s might.'},
      'Cure Well': {name: 'Cure Well', description: 'Restore 150 HP.'},
      names: ["Cure", "Quake", "Earthquake", "Spire", "Gaia", "Cure Well"]
   }
};
