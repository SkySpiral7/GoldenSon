'use strict';
/*
TODO: need data: background skills, classes for light/dark, equipment, psynergy (main and in classes)
TODO: use data: adeptTypes, backgrounds, combatTypes, skills, Weapon classes
*/
var database = {
   //was planning to sort all classes etc alphabetically once I have all the data
   //TODO: element order is not same in each place
   adeptTypes: {
      "earth": {"statsAddend": {"hp": 5, "pp": 10, "attack": 3, "defense": 0, "agility": 2, "luck": 2}},
      "fire": {"statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 3, "agility": 2, "luck": 2}},
      "ice": {"statsAddend": {"hp": 0, "pp": 15, "attack": 1, "defense": 1, "agility": 2, "luck": 3}},
      "wind": {"statsAddend": {"hp": 5, "pp": 5, "attack": 0, "defense": 1, "agility": 4, "luck": 3}},
      "moon": {"statsAddend": {"hp": 20, "pp": 0, "attack": 2, "defense": 2, "agility": 1, "luck": 1}},
      "sun": {"statsAddend": {"hp": 0, "pp": 20, "attack": 1, "defense": 1, "agility": 2, "luck": 2}},
      "typeless": {"statsAddend": {"hp": 20, "pp": 0, "attack": 4, "defense": 4, "agility": 4, "luck": 4}}
   },
   backgrounds: {
      "Healer": {"statsAddend": {"hp": 10, "pp": 10, "attack": 0, "defense": 0, "agility": 3, "luck": 4}},
      "Seer": {"statsAddend": {"hp": 5, "pp": 10, "attack": 0, "defense": 2, "agility": 3, "luck": 3}},
      "Pirate": {"statsAddend": {"hp": 10, "pp": 0, "attack": 4, "defense": 3, "agility": 1, "luck": 1}},
      "Guard": {"statsAddend": {"hp": 10, "pp": 0, "attack": 4, "defense": 2, "agility": 2, "luck": 1}},
      "Farmer": {"statsAddend": {"hp": 20, "pp": 0, "attack": 4, "defense": 3, "agility": 0, "luck": 0}},
      "Craftsman": {"statsAddend": {"hp": 15, "pp": 5, "attack": 1, "defense": 1, "agility": 3, "luck": 2}},
      "Apothecary": {"statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 2, "agility": 3, "luck": 3}},
      "Shaman": {"statsAddend": {"hp": 10, "pp": 15, "attack": 0, "defense": 0, "agility": 2, "luck": 4}},
      "Sage": {"statsAddend": {"hp": 0, "pp": 20, "attack": 0, "defense": 0, "agility": 3, "luck": 4}},
      "Sailor": {"statsAddend": {"hp": 10, "pp": 0, "attack": 3, "defense": 4, "agility": 1, "luck": 1}},
      "Thief": {"statsAddend": {"hp": 10, "pp": 0, "attack": 1, "defense": 3, "agility": 4, "luck": 1}},
      "Artist": {"statsAddend": {"hp": 0, "pp": 15, "attack": 1, "defense": 1, "agility": 1, "luck": 5}},
      "Academic": {"statsAddend": {"hp": 10, "pp": 15, "attack": 0, "defense": 0, "agility": 3, "luck": 3}}
   },
   combatTypes: {
      "Warrior": {"statsAddend": {"hp": 15, "pp": 10, "attack": 6, "defense": 4, "agility": 4, "luck": 0}},
      "Mage": {"statsAddend": {"hp": 5, "pp": 25, "attack": 0, "defense": 3, "agility": 4, "luck": 6}},
      "Rogue": {"statsAddend": {"hp": 10, "pp": 10, "attack": 1, "defense": 4, "agility": 6, "luck": 4}}
   },
   //class priority is currently equal to the total required djinn count (all adepts have same total). assumes that
   // there's no conflict
   classes: {
      "Apostate": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.35, "defense": 1.35, "agility": 1.65, "luck": 0.9},
         "psynergy": []
      },
      "Apprentice": {
         "priority": 1,
         "statsMultiplier": {"hp": 1, "pp": 1.15, "attack": 1.15, "defense": 1, "agility": 1.15, "luck": 0.9},
         "psynergy": []
      },
      "Berserker": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.65, "pp": 1.15, "attack": 1.5, "defense": 1.35, "agility": 1.35, "luck": 0.8},
         "psynergy": []
      },
      "Black Knight": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.85, "pp": 1.25, "attack": 1.6, "defense": 1.45, "agility": 1.45, "luck": 0.8},
         "psynergy": []
      },
      "Brute": {
         "priority": 1,
         "statsMultiplier": {"hp": 1.15, "pp": 0.9, "attack": 1.2, "defense": 1.1, "agility": 1.1, "luck": 0.8},
         "psynergy": []
      },
      "Chaos Lord": {
         "priority": 9,
         "statsMultiplier": {"hp": 2.05, "pp": 1.35, "attack": 1.7, "defense": 1.55, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Conqueror": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.9, "pp": 1.2, "attack": 1.55, "defense": 1.45, "agility": 1.5, "luck": 0.9},
         "psynergy": []
      },
      "Defender": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 1.15, "attack": 1.2, "defense": 1.25, "agility": 0.95, "luck": 1.2},
         "psynergy": []
      },
      "Duelist": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.55, "pp": 1.5, "attack": 1.4, "defense": 1.4, "agility": 1.35, "luck": 1.2},
         "psynergy": []
      },
      "Fearless": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.6, "pp": 1.3, "attack": 1.35, "defense": 1.4, "agility": 1.1, "luck": 1.2},
         "psynergy": []
      },
      "Gallant": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.05, "attack": 1.3, "defense": 1.2, "agility": 1.3, "luck": 1},
         "psynergy": []
      },
      "Guardian": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.85, "attack": 1.35, "defense": 1.4, "agility": 1.6, "luck": 1.3},
         "psynergy": []
      },
      "Heretic": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.9, "attack": 1.4, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": []
      },
      "High Priestess": {
         "priority": 2,
         "statsMultiplier": {"hp": 0.9, "pp": 1.6, "attack": 0.8, "defense": 1, "agility": 1.3, "luck": 1.2},
         "psynergy": []
      },
      "Incantatrix": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.9, "attack": 1.35, "defense": 1.35, "agility": 1.7, "luck": 1.1},
         "psynergy": []
      },
      "Infidel": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.25, "defense": 1.25, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Jonin": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.7, "attack": 1.7, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": []
      },
      "Knave": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 0.9, "attack": 1.25, "defense": 1.15, "agility": 1.2, "luck": 0.9},
         "psynergy": []
      },
      "Knight": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 0.95, "attack": 1.2, "defense": 1.1, "agility": 1.2, "luck": 1},
         "psynergy": []
      },
      "Leader": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.8, "pp": 1.4, "attack": 1.5, "defense": 1.45, "agility": 1.5, "luck": 1},
         "psynergy": []
      },
      "Lord": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.7, "pp": 1.15, "attack": 1.4, "defense": 1.3, "agility": 1.4, "luck": 1},
         "psynergy": []
      },
      "Master Priestess": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.1, "pp": 1.7, "attack": 0.9, "defense": 1.1, "agility": 1.4, "luck": 1.2},
         "psynergy": []
      },
      "Priestess": {
         "priority": 0,
         "statsMultiplier": {"hp": 0.8, "pp": 1.5, "attack": 0.7, "defense": 0.9, "agility": 1.2, "luck": 1.2},
         "psynergy": []
      },
      "Mystic Priestess": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.3, "pp": 1.8, "attack": 1, "defense": 1.2, "agility": 1.5, "luck": 1.2},
         "psynergy": []
      },
      "Ninja": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.65, "attack": 1.65, "defense": 1.35, "agility": 1.65, "luck": 0.9},
         "psynergy": []
      },
      "Outlaw": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1, "attack": 1.35, "defense": 1.25, "agility": 1.3, "luck": 0.9},
         "psynergy": []
      },
      "Paladin": {
         "priority": 9,
         "statsMultiplier": {"hp": 2.05, "pp": 1.55, "attack": 1.6, "defense": 1.6, "agility": 1.3, "luck": 1.3},
         "psynergy": []
      },
      "Paragon": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.8, "pp": 1.4, "attack": 1.45, "defense": 1.5, "agility": 1.2, "luck": 1.2},
         "psynergy": []
      },
      "Practicant": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.2, "pp": 1.25, "attack": 1.25, "defense": 1.1, "agility": 1.25, "luck": 0.9},
         "psynergy": []
      },
      "Protector": {
         "priority": 9,
         "statsMultiplier": {"hp": 2, "pp": 1.5, "attack": 1.55, "defense": 1.6, "agility": 1.3, "luck": 1.2},
         "psynergy": []
      },
      "Psionicist": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.4, "pp": 1.35, "attack": 1.35, "defense": 1.2, "agility": 1.35, "luck": 0.9},
         "psynergy": []
      },
      "Psy Champion": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.9, "pp": 1.6, "attack": 1.6, "defense": 1.45, "agility": 1.6, "luck": 0.9},
         "psynergy": []
      },
      "Psy Knight": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.7, "pp": 1.5, "attack": 1.5, "defense": 1.35, "agility": 1.5, "luck": 0.9},
         "psynergy": []
      },
      "Radiant Priestess": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.5, "pp": 1.9, "attack": 1.1, "defense": 1.3, "agility": 1.6, "luck": 1.2},
         "psynergy": []
      },
      "Red Mage": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.8, "attack": 1.25, "defense": 1.25, "agility": 1.6, "luck": 1.1},
         "psynergy": []
      },
      "Rogue": {
         "priority": 0,
         "statsMultiplier": {"hp": 1.1, "pp": 0.8, "attack": 1.15, "defense": 1.05, "agility": 1.1, "luck": 0.9},
         "psynergy": []
      },
      "Ruffian": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.35, "pp": 1, "attack": 1.3, "defense": 1.2, "agility": 1.2, "luck": 0.8},
         "psynergy": []
      },
      "Samurai": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.9, "pp": 1.35, "attack": 1.55, "defense": 1.5, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Savage": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.55, "pp": 1.1, "attack": 1.4, "defense": 1.3, "agility": 1.3, "luck": 0.8},
         "psynergy": []
      },
      "Shinobi": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.55, "attack": 1.55, "defense": 1.25, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Shogun": {
         "priority": 9,
         "statsMultiplier": {"hp": 2.1, "pp": 1.45, "attack": 1.65, "defense": 1.6, "agility": 1.65, "luck": 0.8},
         "psynergy": []
      },
      "Sovereign": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.9, "pp": 1.25, "attack": 1.5, "defense": 1.4, "agility": 1.5, "luck": 1},
         "psynergy": []
      },
      "Spellblade": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.5, "pp": 1.4, "attack": 1.4, "defense": 1.25, "agility": 1.4, "luck": 0.9},
         "psynergy": []
      },
      "Squire": {
         "priority": 0,
         "statsMultiplier": {"hp": 1.1, "pp": 0.85, "attack": 1.1, "defense": 1, "agility": 1.1, "luck": 1},
         "psynergy": []
      },
      "Swordsman": {
         "priority": 1,
         "statsMultiplier": {"hp": 1.1, "pp": 1.05, "attack": 1.1, "defense": 1.15, "agility": 0.85, "luck": 1.2},
         "psynergy": []
      },
      "Templar": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.95, "pp": 1.5, "attack": 1.55, "defense": 1.55, "agility": 1.25, "luck": 1.3},
         "psynergy": []
      },
      "Valiant": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.25, "attack": 1.3, "defense": 1.35, "agility": 1.05, "luck": 1.2},
         "psynergy": []
      },
      "Valkyrie": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.85, "pp": 1.65, "attack": 1.55, "defense": 1.55, "agility": 1.5, "luck": 1.2},
         "psynergy": []
      },
      "Vanguard": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.75, "pp": 1.6, "attack": 1.5, "defense": 1.5, "agility": 1.45, "luck": 1.2},
         "psynergy": []
      },
      "Veteran": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.7, "pp": 1.1, "attack": 1.45, "defense": 1.35, "agility": 1.4, "luck": 0.9},
         "psynergy": []
      },
      "Warden": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.75, "attack": 1.25, "defense": 1.3, "agility": 1.5, "luck": 1.3},
         "psynergy": []
      },
      "Warlord": {
         "priority": 9,
         "statsMultiplier": {"hp": 2, "pp": 1.5, "attack": 1.6, "defense": 1.55, "agility": 1.6, "luck": 1},
         "psynergy": []
      },
      "White Knight": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.75, "pp": 1.4, "attack": 1.45, "defense": 1.45, "agility": 1.15, "luck": 1.3},
         "psynergy": []
      },
      "Armed": {
         "priority": 1,
         "statsMultiplier": {"hp": 1.05, "pp": 1, "attack": 1.15, "defense": 1.1, "agility": 1.05, "luck": 1.1},
         "psynergy": []
      },
      "Baron": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.8, "pp": 1.1, "attack": 1.35, "defense": 1.4, "agility": 1.25, "luck": 1.1},
         "psynergy": []
      },
      "Cannoneer": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 1, "attack": 1.1, "defense": 1.1, "agility": 1, "luck": 1.2},
         "psynergy": []
      },
      "Corsair": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.1, "attack": 1.2, "defense": 1.2, "agility": 1.1, "luck": 1.2},
         "psynergy": []
      },
      "Fair": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.25, "pp": 1.1, "attack": 1.25, "defense": 1.2, "agility": 1.15, "luck": 1.1},
         "psynergy": []
      },
      "Fated": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.4, "pp": 1.3, "attack": 1.3, "defense": 1.3, "agility": 1.3, "luck": 1},
         "psynergy": []
      },
      "Fire Master": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.5, "attack": 1.2, "defense": 1.25, "agility": 1.45, "luck": 0.9},
         "psynergy": []
      },
      "Flame User": {
         "priority": 0,
         "statsMultiplier": {"hp": 1, "pp": 1.2, "attack": 0.9, "defense": 0.95, "agility": 1.15, "luck": 0.9},
         "psynergy": []
      },
      "Guard": {
         "priority": 0,
         "statsMultiplier": {"hp": 1.2, "pp": 0.8, "attack": 1.05, "defense": 1.1, "agility": 0.95, "luck": 1.1},
         "psynergy": []
      },
      "Hex": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.3, "pp": 1.4, "attack": 1.1, "defense": 1.15, "agility": 1.35, "luck": 0.9},
         "psynergy": []
      },
      "Hull Reaver": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.9, "pp": 1.3, "attack": 1.4, "defense": 1.4, "agility": 1.3, "luck": 1.2},
         "psynergy": []
      },
      "Incendiary": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.6, "attack": 1.3, "defense": 1.35, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Luminier": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.75, "pp": 1.35, "attack": 1.5, "defense": 1.45, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Mystic Knight": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.5, "pp": 1.35, "attack": 1.35, "defense": 1.35, "agility": 1.35, "luck": 1},
         "psynergy": []
      },
      "Page": {
         "priority": 1,
         "statsMultiplier": {"hp": 1, "pp": 1.1, "attack": 1.1, "defense": 1.1, "agility": 1.1, "luck": 1},
         "psynergy": []
      },
      "Phalanx": {
         "priority": 8,
         "statsMultiplier": {"hp": 2, "pp": 1.2, "attack": 1.45, "defense": 1.5, "agility": 1.35, "luck": 1.1},
         "psynergy": []
      },
      "Pirate": {
         "priority": 0,
         "statsMultiplier": {"hp": 1.1, "pp": 0.9, "attack": 1, "defense": 1, "agility": 0.9, "luck": 1.2},
         "psynergy": []
      },
      "Pirate King": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.7, "pp": 1.2, "attack": 1.3, "defense": 1.3, "agility": 1.2, "luck": 1.2},
         "psynergy": []
      },
      "Pupil": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.2, "pp": 1.2, "attack": 1.2, "defense": 1.2, "agility": 1.2, "luck": 1},
         "psynergy": []
      },
      "Radiant": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.95, "pp": 1.45, "attack": 1.6, "defense": 1.55, "agility": 1.5, "luck": 1.1},
         "psynergy": []
      },
      "Righteous": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.55, "pp": 1.25, "attack": 1.4, "defense": 1.35, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Soldier": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.4, "pp": 0.9, "attack": 1.15, "defense": 1.2, "agility": 1.05, "luck": 1.1},
         "psynergy": []
      },
      "Star Knight": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.7, "pp": 1.45, "attack": 1.45, "defense": 1.45, "agility": 1.45, "luck": 1},
         "psynergy": []
      },
      "Sun Champion": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.9, "pp": 1.55, "attack": 1.55, "defense": 1.55, "agility": 1.55, "luck": 1},
         "psynergy": []
      },
      "Virtuous": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.45, "pp": 1.2, "attack": 1.35, "defense": 1.3, "agility": 1.25, "luck": 1.1},
         "psynergy": []
      },
      "Warrior": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.6, "pp": 1, "attack": 1.25, "defense": 1.3, "agility": 1.15, "luck": 1.1},
         "psynergy": []
      },
      "Witch": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.15, "pp": 1.3, "attack": 1, "defense": 1.05, "agility": 1.25, "luck": 0.9},
         "psynergy": []
      },
      "Admiral": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.95, "pp": 1.3, "attack": 1.45, "defense": 1.45, "agility": 1.35, "luck": 1},
         "psynergy": []
      },
      "Angel": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.65, "pp": 1.65, "attack": 1.2, "defense": 1.3, "agility": 1.4, "luck": 1.3},
         "psynergy": []
      },
      "Arcanist": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.35, "agility": 1.65, "luck": 1.1},
         "psynergy": []
      },
      "Archon": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.95, "pp": 1.5, "attack": 1.65, "defense": 1.5, "agility": 1.65, "luck": 1},
         "psynergy": []
      },
      "Ascetic": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.3, "pp": 1.55, "attack": 1.1, "defense": 1.15, "agility": 1.25, "luck": 1.1},
         "psynergy": []
      },
      "Avenger": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.95, "pp": 1.4, "attack": 1.65, "defense": 1.55, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Captain": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.55, "pp": 1.1, "attack": 1.25, "defense": 1.25, "agility": 1.15, "luck": 1},
         "psynergy": []
      },
      "Channeler": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.75, "attack": 1.55, "defense": 1.45, "agility": 1.65, "luck": 0.8},
         "psynergy": []
      },
      "Cleric": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.25, "pp": 1.45, "attack": 1, "defense": 1.1, "agility": 1.2, "luck": 1.3},
         "psynergy": []
      },
      "Commander": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.75, "pp": 1.2, "attack": 1.35, "defense": 1.35, "agility": 1.25, "luck": 1},
         "psynergy": []
      },
      "Counselor": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.6, "pp": 1.6, "attack": 1.45, "defense": 1.35, "agility": 1.45, "luck": 0.9},
         "psynergy": []
      },
      "Destroyer": {
         "priority": 9,
         "statsMultiplier": {"hp": 2.05, "pp": 1.45, "attack": 1.7, "defense": 1.6, "agility": 1.6, "luck": 0.8},
         "psynergy": []
      },
      "Divine Mage": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.75, "attack": 1.25, "defense": 1.25, "agility": 1.6, "luck": 1.2},
         "psynergy": []
      },
      "Druid": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.8, "attack": 1.3, "defense": 1.35, "agility": 1.6, "luck": 1.3},
         "psynergy": []
      },
      "Elementalist": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.2, "agility": 1.5, "luck": 1.1},
         "psynergy": []
      },
      "Enlightened": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.6, "pp": 1.75, "attack": 1.25, "defense": 1.3, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Explorer": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.3, "pp": 1.05, "attack": 1.3, "defense": 1.15, "agility": 1.25, "luck": 0.9},
         "psynergy": []
      },
      "Fateweaver": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.85, "attack": 1.35, "defense": 1.35, "agility": 1.7, "luck": 1.2},
         "psynergy": []
      },
      "Fury": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.8, "attack": 1.6, "defense": 1.5, "agility": 1.7, "luck": 0.8},
         "psynergy": []
      },
      "General": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.9, "pp": 1.75, "attack": 1.6, "defense": 1.5, "agility": 1.6, "luck": 0.9},
         "psynergy": []
      },
      "Globetrotter": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.5, "pp": 1.15, "attack": 1.4, "defense": 1.25, "agility": 1.35, "luck": 0.9},
         "psynergy": []
      },
      "Guru": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.85, "attack": 1.35, "defense": 1.4, "agility": 1.5, "luck": 1.1},
         "psynergy": []
      },
      "Healer": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.35, "pp": 1.6, "attack": 1.1, "defense": 1.15, "agility": 1.4, "luck": 1.3},
         "psynergy": []
      },
      "Herald": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.75, "pp": 1.4, "attack": 1.55, "defense": 1.4, "agility": 1.55, "luck": 1},
         "psynergy": []
      },
      "Herbalist": {
         "priority": 1,
         "statsMultiplier": {"hp": 0.95, "pp": 1.25, "attack": 0.85, "defense": 0.9, "agility": 1.15, "luck": 1.3},
         "psynergy": []
      },
      "Holy Knight": {
         "priority": 9,
         "statsMultiplier": {"hp": 2.1, "pp": 1.55, "attack": 1.55, "defense": 1.6, "agility": 1.3, "luck": 1.3},
         "psynergy": []
      },
      "Ice Rogue 1": {"priority": 0, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 2": {"priority": 2, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 3": {"priority": 4, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 4": {"priority": 6, "statsMultiplier": {}, "psynergy": []},
      "Ice Rogue 5": {"priority": 8, "statsMultiplier": {}, "psynergy": []},
      "Mariner": {
         "priority": 0,
         "statsMultiplier": {"hp": 1.15, "pp": 0.9, "attack": 1.05, "defense": 1.05, "agility": 0.95, "luck": 1},
         "psynergy": []
      },
      "Monk": {
         "priority": 1,
         "statsMultiplier": {"hp": 1, "pp": 1.3, "attack": 0.9, "defense": 0.95, "agility": 1.05, "luck": 1.1},
         "psynergy": []
      },
      "Naturalist": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.1, "pp": 1.35, "attack": 0.95, "defense": 1, "agility": 1.25, "luck": 1.3},
         "psynergy": []
      },
      "Officiant": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.1, "pp": 1.35, "attack": 0.9, "defense": 1, "agility": 1.1, "luck": 1.3},
         "psynergy": []
      },
      "Privateer": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.35, "pp": 1, "attack": 1.15, "defense": 1.15, "agility": 1.05, "luck": 1},
         "psynergy": []
      },
      "Pure Mage": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.8, "attack": 1.35, "defense": 1.35, "agility": 1.65, "luck": 1.3},
         "psynergy": []
      },
      "Renegade": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.75, "pp": 1.3, "attack": 1.55, "defense": 1.45, "agility": 1.45, "luck": 0.8},
         "psynergy": []
      },
      "Researcher": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.05, "pp": 1.4, "attack": 0.95, "defense": 1, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Saint": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.45, "pp": 1.55, "attack": 1.1, "defense": 1.2, "agility": 1.3, "luck": 1.3},
         "psynergy": []
      },
      "Saint Knight": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.9, "pp": 1.45, "attack": 1.45, "defense": 1.5, "agility": 1.2, "luck": 1.3},
         "psynergy": []
      },
      "Savant": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.3, "pp": 1.65, "attack": 1.1, "defense": 1.15, "agility": 1.45, "luck": 1.1},
         "psynergy": []
      },
      "Scholar": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.2, "pp": 1.55, "attack": 1.05, "defense": 1.1, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Sea Lord": {
         "priority": 9,
         "statsMultiplier": {"hp": 2, "pp": 1.4, "attack": 1.65, "defense": 1.5, "agility": 1.6, "luck": 0.9},
         "psynergy": []
      },
      "Seafarer": {
         "priority": 1,
         "statsMultiplier": {"hp": 1.1, "pp": 0.95, "attack": 1.2, "defense": 1.05, "agility": 1.15, "luck": 0.9},
         "psynergy": []
      },
      "Shaman": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.3, "agility": 1.6, "luck": 1.1},
         "psynergy": []
      },
      "Shugenja": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.4, "pp": 1.65, "attack": 1.15, "defense": 1.2, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Strategist": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.8, "pp": 1.7, "attack": 1.55, "defense": 1.45, "agility": 1.55, "luck": 0.9},
         "psynergy": []
      },
      "Student": {
         "priority": 1,
         "statsMultiplier": {"hp": 0.9, "pp": 1.3, "attack": 0.85, "defense": 0.9, "agility": 1.2, "luck": 1.1},
         "psynergy": []
      },
      "Thaumaturge": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.7, "attack": 1.2, "defense": 1.25, "agility": 1.5, "luck": 1.3},
         "psynergy": []
      },
      "Therapist": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.25, "pp": 1.5, "attack": 1.05, "defense": 1.1, "agility": 1.35, "luck": 1.3},
         "psynergy": []
      },
      "Water User": {
         "priority": 0,
         "statsMultiplier": {"hp": 0.95, "pp": 1.25, "attack": 0.8, "defense": 0.9, "agility": 1, "luck": 1.3},
         "psynergy": []
      },
      "Waverider": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.6, "pp": 1.2, "attack": 1.45, "defense": 1.3, "agility": 1.4, "luck": 0.9},
         "psynergy": []
      },
      "White Mage": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.7, "attack": 1.25, "defense": 1.25, "agility": 1.55, "luck": 1.3},
         "psynergy": []
      },
      "Wild Mage": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.5, "pp": 1.65, "attack": 1.45, "defense": 1.35, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Windrider": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.8, "pp": 1.3, "attack": 1.55, "defense": 1.4, "agility": 1.5, "luck": 0.9},
         "psynergy": []
      },
      "Wise": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.25, "agility": 1.55, "luck": 1.1},
         "psynergy": []
      },
      "Worldwaker": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.8, "pp": 1.9, "attack": 1.35, "defense": 1.35, "agility": 1.65, "luck": 1.1},
         "psynergy": []
      },
      "Yamabushi": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.15, "pp": 1.4, "attack": 1, "defense": 1.05, "agility": 1.15, "luck": 1.1},
         "psynergy": []
      },
      "Acolyte": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.1, "pp": 1.45, "attack": 1.05, "defense": 1, "agility": 1.3, "luck": 0.8},
         "psynergy": []
      },
      "Archmage": {
         "priority": 6,
         "statsMultiplier": {"hp": 1.4, "pp": 1.55, "attack": 1.15, "defense": 1.2, "agility": 1.55, "luck": 1},
         "psynergy": []
      },
      "Augur": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.25, "agility": 1.55, "luck": 1.1},
         "psynergy": []
      },
      "Bolt User": {
         "priority": 0,
         "statsMultiplier": {"hp": 0.9, "pp": 1.25, "attack": 0.85, "defense": 0.9, "agility": 1.25, "luck": 1},
         "psynergy": []
      },
      "Clairvoyant": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.3, "pp": 1.65, "attack": 1.1, "defense": 1.15, "agility": 1.45, "luck": 1.1},
         "psynergy": []
      },
      "Cultist": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.25, "pp": 1.6, "attack": 1.15, "defense": 1.1, "agility": 1.4, "luck": 0.8},
         "psynergy": []
      },
      "Disciple": {
         "priority": 1,
         "statsMultiplier": {"hp": 0.95, "pp": 1.35, "attack": 0.95, "defense": 0.9, "agility": 1.2, "luck": 0.8},
         "psynergy": []
      },
      "Diviner": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.2, "pp": 1.55, "attack": 1.05, "defense": 1.1, "agility": 1.4, "luck": 1.1},
         "psynergy": []
      },
      "Fanatic": {
         "priority": 7,
         "statsMultiplier": {"hp": 1.55, "pp": 1.8, "attack": 1.3, "defense": 1.25, "agility": 1.55, "luck": 0.8},
         "psynergy": []
      },
      "Haruspex": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.05, "pp": 1.4, "attack": 0.95, "defense": 1, "agility": 1.3, "luck": 1.1},
         "psynergy": []
      },
      "Illusionist": {
         "priority": 4,
         "statsMultiplier": {"hp": 1.2, "pp": 1.45, "attack": 1.05, "defense": 1.1, "agility": 1.45, "luck": 1},
         "psynergy": []
      },
      "Inquisitor": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.75, "pp": 1.9, "attack": 1.4, "defense": 1.35, "agility": 1.65, "luck": 0.8},
         "psynergy": []
      },
      "Magician": {
         "priority": 2,
         "statsMultiplier": {"hp": 1.05, "pp": 1.35, "attack": 0.95, "defense": 1, "agility": 1.35, "luck": 1},
         "psynergy": []
      },
      "Oracle": {
         "priority": 9,
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.35, "agility": 1.65, "luck": 1.1},
         "psynergy": []
      },
      "Seer": {
         "priority": 1,
         "statsMultiplier": {"hp": 0.9, "pp": 1.3, "attack": 0.85, "defense": 0.9, "agility": 1.2, "luck": 1.1},
         "psynergy": []
      },
      "Sorcerer": {
         "priority": 8,
         "statsMultiplier": {"hp": 1.6, "pp": 1.65, "attack": 1.25, "defense": 1.3, "agility": 1.65, "luck": 1},
         "psynergy": []
      },
      "Wind Rogue 1": {"priority": 0, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 2": {"priority": 2, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 3": {"priority": 4, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 4": {"priority": 6, "statsMultiplier": {}, "psynergy": []},
      "Wind Rogue 5": {"priority": 8, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 1": {"priority": 0, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 2": {"priority": 2, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 3": {"priority": 4, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 4": {"priority": 6, "statsMultiplier": {}, "psynergy": []},
      "Wind Warrior 5": {"priority": 8, "statsMultiplier": {}, "psynergy": []},
      "Zealot": {
         "priority": 5,
         "statsMultiplier": {"hp": 1.35, "pp": 1.7, "attack": 1.2, "defense": 1.15, "agility": 1.45, "luck": 0.8},
         "psynergy": []
      }
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
         "Duelist": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}},
         "Fearless": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}},
         "Gallant": {"combatType": ["Warrior"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Guardian": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "Heretic": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
         "High Priestess": {"combatType": ["Mage"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Incantatrix": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "Infidel": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Jonin": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
         "Knave": {"combatType": ["Rogue"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Knight": {"combatType": ["Warrior"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Leader": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 3}},
         "Lord": {"combatType": ["Warrior"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}},
         "Master Priestess": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Priestess": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Mystic Priestess": {"combatType": ["Mage"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}},
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
         "Radiant Priestess": {"combatType": ["Mage"], "djinnCount": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}},
         "Red Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
         "Rogue": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Ruffian": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Samurai": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
         "Savage": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Shinobi": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Shogun": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "Sovereign": {"combatType": ["Warrior"], "djinnCount": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}},
         "Spellblade": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}},
         "Squire": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Swordsman": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 1}},
         "Templar": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Valiant": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
         "Valkyrie": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}},
         "Vanguard": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Veteran": {"combatType": ["Rogue"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}},
         "Warden": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
         "Warlord": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}},
         "White Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}
         }
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
         "Duelist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}},
         "Fair": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Fated": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Fire Master": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 6, "wind": 0, "ice": 0}},
         "Flame User": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Guard": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Guardian": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Heretic": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
         "Hex": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Hull Reaver": {"combatType": ["Rogue"], "djinnCount": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}},
         "Incantatrix": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Incendiary": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}},
         "Infidel": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
         "Jonin": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
         "Leader": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 3}},
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
         "Red Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}},
         "Righteous": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}},
         "Ruffian": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Samurai": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}},
         "Savage": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Shinobi": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
         "Shogun": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
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
         "Warden": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}},
         "Warlord": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}},
         "Warrior": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "White Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}
         },
         "Witch": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}}
      },
      "wind": {
         "Acolyte": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Arcanist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 7, "ice": 2}},
         "Archmage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 6, "ice": 0}},
         "Archon": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}},
         "Augur": {"combatType": ["Mage"], "djinnCount": {"earth": 6, "fire": 0, "wind": 0, "ice": 1}},
         "Avenger": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Bolt User": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}},
         "Channeler": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
         "Clairvoyant": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}},
         "Counselor": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}},
         "Cultist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}},
         "Destroyer": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}},
         "Disciple": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}},
         "Divine Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 4}},
         "Diviner": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}},
         "Elementalist": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}},
         "Fanatic": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 6, "wind": 1, "ice": 0}},
         "Fateweaver": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}},
         "Fury": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}},
         "General": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 4}},
         "Haruspex": {"combatType": ["Mage"], "djinnCount": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}},
         "Herald": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 4}},
         "Holy Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}
         },
         "Illusionist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Inquisitor": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 7, "wind": 2, "ice": 0}},
         "Magician": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Oracle": {"combatType": ["Mage"], "djinnCount": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}},
         "Pure Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}},
         "Renegade": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}},
         "Researcher": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Saint Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 3, "wind": 0, "ice": 4}
         },
         "Savant": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}},
         "Scholar": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}},
         "Seer": {"combatType": ["Mage"], "djinnCount": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}},
         "Shaman": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}},
         "Sorcerer": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 8, "ice": 0}},
         "Strategist": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}},
         "Student": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}},
         "White Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 0, "ice": 4}},
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
         "Zealot": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}}
      },
      "ice": {
         "Admiral": {"combatType": ["Warrior"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}},
         "Angel": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}},
         "Arcanist": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 7}},
         "Archon": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
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
         "Divine Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 4, "ice": 0}},
         "Druid": {"combatType": ["Mage"], "djinnCount": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}},
         "Elementalist": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
         "Enlightened": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 6, "wind": 0, "ice": 1}},
         "Explorer": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}},
         "Fair": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}},
         "Fateweaver": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
         "Fearless": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}},
         "Fury": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
         "General": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Globetrotter": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}
         },
         "Guru": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 7, "wind": 0, "ice": 2}},
         "Healer": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}},
         "Herald": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 3, "fire": 0, "wind": 4, "ice": 0}},
         "Herbalist": {"combatType": ["Mage"], "djinnCount": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}},
         "Holy Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}
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
         "Pure Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
         "Radiant": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 7, "wind": 0, "ice": 2}},
         "Renegade": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Researcher": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
         "Righteous": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}},
         "Saint": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 0, "ice": 6}},
         "Saint Knight": {
            "combatType": ["Warrior", "Rogue"],
            "djinnCount": {"earth": 0, "fire": 3, "wind": 4, "ice": 0}
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
         "White Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 3, "fire": 0, "wind": 4, "ice": 0}},
         "Wild Mage": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
         "Windrider": {"combatType": ["Warrior", "Rogue"], "djinnCount": {"earth": 0, "fire": 0, "wind": 6, "ice": 1}},
         "Wise": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 0, "wind": 1, "ice": 6}},
         "Worldwaker": {"combatType": ["Mage"], "djinnCount": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
         "Yamabushi": {"combatType": ["Mage"], "djinnCount": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}}
      }
   },
   djinn: {
      "Echo": {
         "element": "earth",
         "description": "Attack with a double strike.",
         "statsAddend": {"hp": 9, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Iron": {
         "element": "earth",
         "description": "Bolster the party's Defense.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 2, "agility": 3, "luck": 0}
      },
      "Steel": {
         "element": "earth",
         "description": "Siphon a foe's HP with a kiss.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 1}
      },
      "Mud": {
         "element": "earth",
         "description": "Slow a foe with sticky mud.",
         "statsAddend": {"hp": 10, "pp": 4, "attack": 0, "defense": 0, "agility": 3, "luck": 0}
      },
      "Flower": {
         "element": "earth",
         "description": "Refresh allies and restore HP.",
         "statsAddend": {"hp": 12, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Meld": {
         "element": "earth",
         "description": "Launch a powerful team strike.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 0, "agility": 4, "luck": 1}
      },
      "Petra": {
         "element": "earth",
         "description": "Turn a foe to stone.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 0}
      },
      "Salt": {
         "element": "earth",
         "description": "Restore allies' status to normal.",
         "statsAddend": {"hp": 9, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 1}
      },
      "Geode": {
         "element": "earth",
         "description": "Strike with a clod of earth.",
         "statsAddend": {"hp": 12, "pp": 0, "attack": 6, "defense": 0, "agility": 0, "luck": 0}
      },
      "Mold": {
         "element": "earth",
         "description": "Strike a foe.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 4, "defense": 0, "agility": 2, "luck": 1}
      },
      "Crystal": {
         "element": "earth",
         "description": "Restore HP to all allies.",
         "statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Cannon": {
         "element": "fire",
         "description": "Strike with the power of Mars.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Spark": {
         "element": "fire",
         "description": "Revive an ally with cheers of support.",
         "statsAddend": {"hp": 11, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Kindle": {
         "element": "fire",
         "description": "Increase all allies' Attack.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 5, "defense": 0, "agility": 0, "luck": 1}
      },
      "Char": {
         "element": "fire",
         "description": "Paralyze foes with a strong blow.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 2, "defense": 0, "agility": 2, "luck": 1}
      },
      "Coal": {
         "element": "fire",
         "description": "Rally your allies to boost Agility.",
         "statsAddend": {"hp": 11, "pp": 3, "attack": 0, "defense": 0, "agility": 3, "luck": 0}
      },
      "Reflux": {
         "element": "fire",
         "description": "Counter an enemy's attack.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 2}
      },
      "Core": {
         "element": "fire",
         "description": "Strike through an enemy's Defense.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 0}
      },
      "Tinder": {
         "element": "fire",
         "description": "Revive a downed ally.",
         "statsAddend": {"hp": 12, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Shine": {
         "element": "fire",
         "description": "Dazzle foes and strike decisively.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 3, "defense": 3, "agility": 2, "luck": 0}
      },
      "Fury": {
         "element": "fire",
         "description": "Call forth wandering souls to attack.",
         "statsAddend": {"hp": 12, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Fugue": {
         "element": "fire",
         "description": "Fatigue your foes to drop their PP.",
         "statsAddend": {"hp": 11, "pp": 4, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Breath": {
         "element": "wind",
         "description": "Restore HP quickly.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 4, "luck": 0}
      },
      "Blitz": {
         "element": "wind",
         "description": "Numb a foe with a lightning strike.",
         "statsAddend": {"hp": 10, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Ether": {
         "element": "wind",
         "description": "Focus will to restore PP.",
         "statsAddend": {"hp": 8, "pp": 4, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Waft": {
         "element": "wind",
         "description": "Calm a foe with soothing scents.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 4, "defense": 0, "agility": 0, "luck": 0}
      },
      "Haze": {
         "element": "wind",
         "description": "Hide away to avoid damage.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 0, "defense": 2, "agility": 3, "luck": 2}
      },
      "Wheeze": {
         "element": "wind",
         "description": "Poison a foe as you strike.",
         "statsAddend": {"hp": 9, "pp": 3, "attack": 5, "defense": 0, "agility": 0, "luck": 0}
      },
      "Aroma": {
         "element": "wind",
         "description": "Restore everyone's PP.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Whorl": {
         "element": "wind",
         "description": "Take a deep breath, and strike!",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 0}
      },
      "Gasp": {
         "element": "wind",
         "description": "Call the Grim Reaper on your foes.",
         "statsAddend": {"hp": 12, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Lull": {
         "element": "wind",
         "description": "Negotiate a temporary cease-fire.",
         "statsAddend": {"hp": 11, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Gale": {
         "element": "wind",
         "description": "Blast enemies with a wind strike.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 0, "defense": 0, "agility": 5, "luck": 3}
      },
      "Fog": {
         "element": "ice",
         "description": "Blind an enemy with fog.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 2, "agility": 2, "luck": 1}
      },
      "Sour": {
         "element": "ice",
         "description": "Reduce a foe's resistance.",
         "statsAddend": {"hp": 8, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Spring": {
         "element": "ice",
         "description": "Restore HP with healing herbs.",
         "statsAddend": {"hp": 11, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Shade": {
         "element": "ice",
         "description": "Create a watery shield.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 2}
      },
      "Chill": {
         "element": "ice",
         "description": "Strike to reduce a foe's defense.",
         "statsAddend": {"hp": 10, "pp": 3, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Steam": {
         "element": "ice",
         "description": "Increase all allies' Elemental strength.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 5, "defense": 0, "agility": 0, "luck": 0}
      },
      "Rime": {
         "element": "ice",
         "description": "Seal a foe's Psynergy.",
         "statsAddend": {"hp": 10, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Gel": {
         "element": "ice",
         "description": "Weaken a foe's Attack.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 5, "defense": 0, "agility": 2, "luck": 0}
      },
      "Eddy": {
         "element": "ice",
         "description": "Speed up Djinn recovery time.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Balm": {
         "element": "ice",
         "description": "Revive all downed allies.",
         "statsAddend": {"hp": 13, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Serac": {
         "element": "ice",
         "description": "Strike a chilling finishing blow.",
         "statsAddend": {"hp": 12, "pp": 0, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      }
   },
   equipment: {
      'Ixion Mail': {
         description: 'Armor: Resists Wind & Water',
         statsAddend: {hp: 0, pp: 0, attack: 0, defense: 26, agility: 0, luck: 0}
      }
   },
   //this is the correct spelling from the video game (not Psy Energy even though it is "Psychic energy")
   psynergy: {
      "Cure": {"description": "Restore 70 HP."},
      "Quake": {"description": "Attack with a powerful quake."},
      "Earthquake": {"description": "Attack with a mighty tremor."},
      "Spire": {"description": "Attack with earthen spire."},
      "Gaia": {"description": "Attack with the earth's might."},
      "Cure Well": {"description": "Restore 150 HP."}
   },
   skills: {
      //current: max of 2 ranks. only get skills from background (thus read only list)
      names: ['Acrobatics',
         'Alchemy',
         'Athletics',
         //boating removed. replaced by either Profession or background
         'Craft',  //multiple sub options
         'Persuasion',
         'Psyenergy lore',
         'Slight of hand',
         'Stealth',
         'Survival']
   }
};

/*
what am I supposed to do with Weapon classes?
Weapon classes:
Light blade
Long sword
Great sword
Axes
Maces
Staves
Ankh
Bows
Crossbows
Muskets
Pole arms
Claws
Everything else?
*/

function assignNames(object)
{
   for (var key in object)
   {
      object[key].name = key;
   }
   object.names = Object.keys(object);
   object.names.sort();
}

assignNames(database.adeptTypes);
assignNames(database.backgrounds);
assignNames(database.combatTypes);
assignNames(database.classes);
assignNames(database.classRequirements.earth);
assignNames(database.classRequirements.fire);
assignNames(database.classRequirements.ice);
assignNames(database.classRequirements.wind);
assignNames(database.djinn);
assignNames(database.equipment);
assignNames(database.psynergy);
