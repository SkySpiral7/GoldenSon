'use strict';
/*
TODO: need data: background skills, classes for light/dark, equipment, psynergy (main and in classes)
TODO: use data: elements, backgrounds, combatTypes, skills, Weapon classes
TODO: sort DB: elements (see below order), names (alphabetically)
*/
var database = {
   elements: {
      "earth": {
         display: "Venus (Earth)",
         "statsAddend": {"hp": 5, "pp": 10, "attack": 3, "defense": 0, "agility": 2, "luck": 2}
      },
      "fire": {
         display: 'Mars (Fire)',
         "statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 3, "agility": 2, "luck": 2}
      },
      "ice": {
         display: 'Mercury (Ice)',
         "statsAddend": {"hp": 0, "pp": 15, "attack": 1, "defense": 1, "agility": 2, "luck": 3}
      },
      "wind": {
         display: 'Jupiter (Wind)',
         "statsAddend": {"hp": 5, "pp": 5, "attack": 0, "defense": 1, "agility": 4, "luck": 3}
      },
      "moon": {
         display: 'Luna (Moon)',
         "statsAddend": {"hp": 20, "pp": 0, "attack": 2, "defense": 2, "agility": 1, "luck": 1}
      },
      "sun": {
         display: 'Sol (Sun)',
         "statsAddend": {"hp": 0, "pp": 20, "attack": 1, "defense": 1, "agility": 2, "luck": 2}
      },
      "none": {
         display: 'None',
         "statsAddend": {"hp": 20, "pp": 0, "attack": 4, "defense": 4, "agility": 4, "luck": 4}
      }
   },
   //names in order: Venus, Mars, Mercury, Jupiter, Luna, Sol, none
   elementOrder: ['earth', 'fire', 'ice', 'wind', 'moon', 'sun', 'none'],
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
   classes: {
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
            "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}}
         }
      },
      "Apprentice": {
         "statsMultiplier": {
            "hp": 1,
            "pp": 1.15,
            "attack": 1.15,
            "defense": 1,
            "agility": 1.15,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 1, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}
            }
         }
      },
      "Berserker": {
         "statsMultiplier": {
            "hp": 1.65,
            "pp": 1.15,
            "attack": 1.5,
            "defense": 1.35,
            "agility": 1.35,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 5, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 5, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Black Knight": {
         "statsMultiplier": {
            "hp": 1.85,
            "pp": 1.25,
            "attack": 1.6,
            "defense": 1.45,
            "agility": 1.45,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 1, "fire": 6, "wind": 0, "ice": 0},
               "Rogue": {"earth": 1, "fire": 6, "wind": 0, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 6, "fire": 1, "wind": 0, "ice": 0},
               "Rogue": {"earth": 6, "fire": 1, "wind": 0, "ice": 0}
            }
         }
      },
      "Brute": {
         "statsMultiplier": {"hp": 1.15, "pp": 0.9, "attack": 1.2, "defense": 1.1, "agility": 1.1, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 1, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 1, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Chaos Lord": {
         "statsMultiplier": {
            "hp": 2.05,
            "pp": 1.35,
            "attack": 1.7,
            "defense": 1.55,
            "agility": 1.55,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 2, "fire": 7, "wind": 0, "ice": 0},
               "Rogue": {"earth": 2, "fire": 7, "wind": 0, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 7, "fire": 2, "wind": 0, "ice": 0},
               "Rogue": {"earth": 7, "fire": 2, "wind": 0, "ice": 0}
            }
         }
      },
      "Conqueror": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.2,
            "attack": 1.55,
            "defense": 1.45,
            "agility": 1.5,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"earth": {"Rogue": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Defender": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.15,
            "attack": 1.2,
            "defense": 1.25,
            "agility": 0.95,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 2},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}
            },
            "ice": {
               "Warrior": {"earth": 2, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Duelist": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.5,
            "attack": 1.4,
            "defense": 1.4,
            "agility": 1.35,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}},
            "fire": {"Mage": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}}
         }
      },
      "Fearless": {
         "statsMultiplier": {
            "hp": 1.6,
            "pp": 1.3,
            "attack": 1.35,
            "defense": 1.4,
            "agility": 1.1,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 5},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}
            },
            "ice": {
               "Warrior": {"earth": 5, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Gallant": {
         "statsMultiplier": {"hp": 1.5, "pp": 1.05, "attack": 1.3, "defense": 1.2, "agility": 1.3, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Guardian": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.85,
            "attack": 1.35,
            "defense": 1.4,
            "agility": 1.6,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
            "fire": {"Mage": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}}
         }
      },
      "Heretic": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.9, "attack": 1.4, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}}
         }
      },
      "High Priestess": {
         "statsMultiplier": {
            "hp": 0.9,
            "pp": 1.6,
            "attack": 0.8,
            "defense": 1,
            "agility": 1.3,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Incantatrix": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.9,
            "attack": 1.35,
            "defense": 1.35,
            "agility": 1.7,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
            "fire": {"Mage": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}}
         }
      },
      "Infidel": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.75,
            "attack": 1.25,
            "defense": 1.25,
            "agility": 1.55,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
            "fire": {"Mage": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}}
         }
      },
      "Jonin": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.7, "attack": 1.7, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 5, "ice": 0},
               "Rogue": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 5, "ice": 0},
               "Rogue": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}
            }
         }
      },
      "Knave": {
         "statsMultiplier": {"hp": 1.3, "pp": 0.9, "attack": 1.25, "defense": 1.15, "agility": 1.2, "luck": 0.9},
         "psynergy": [],
         "requirements": {"earth": {"Rogue": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Knight": {
         "statsMultiplier": {"hp": 1.3, "pp": 0.95, "attack": 1.2, "defense": 1.1, "agility": 1.2, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Leader": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.4, "attack": 1.5, "defense": 1.45, "agility": 1.5, "luck": 1},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 3},
               "Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 3}
            },
            "fire": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 3},
               "Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 3}
            }
         }
      },
      "Lord": {
         "statsMultiplier": {"hp": 1.7, "pp": 1.15, "attack": 1.4, "defense": 1.3, "agility": 1.4, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Master Priestess": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.7,
            "attack": 0.9,
            "defense": 1.1,
            "agility": 1.4,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Priestess": {
         "statsMultiplier": {
            "hp": 0.8,
            "pp": 1.5,
            "attack": 0.7,
            "defense": 0.9,
            "agility": 1.2,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Mystic Priestess": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.8,
            "attack": 1,
            "defense": 1.2,
            "agility": 1.5,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Ninja": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.65,
            "attack": 1.65,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}
            }
         }
      },
      "Outlaw": {
         "statsMultiplier": {"hp": 1.5, "pp": 1, "attack": 1.35, "defense": 1.25, "agility": 1.3, "luck": 0.9},
         "psynergy": [],
         "requirements": {"earth": {"Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Paladin": {
         "statsMultiplier": {
            "hp": 2.05,
            "pp": 1.55,
            "attack": 1.6,
            "defense": 1.6,
            "agility": 1.3,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 5},
               "Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}
            },
            "fire": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 5},
               "Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}
            }
         }
      },
      "Paragon": {
         "statsMultiplier": {
            "hp": 1.8,
            "pp": 1.4,
            "attack": 1.45,
            "defense": 1.5,
            "agility": 1.2,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 1, "fire": 0, "wind": 0, "ice": 6},
               "Rogue": {"earth": 1, "fire": 0, "wind": 0, "ice": 6}
            },
            "ice": {
               "Warrior": {"earth": 6, "fire": 0, "wind": 0, "ice": 1},
               "Rogue": {"earth": 6, "fire": 0, "wind": 0, "ice": 1}
            }
         }
      },
      "Practicant": {
         "statsMultiplier": {
            "hp": 1.2,
            "pp": 1.25,
            "attack": 1.25,
            "defense": 1.1,
            "agility": 1.25,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 2, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}
            }
         }
      },
      "Protector": {
         "statsMultiplier": {
            "hp": 2,
            "pp": 1.5,
            "attack": 1.55,
            "defense": 1.6,
            "agility": 1.3,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 2, "fire": 0, "wind": 0, "ice": 7},
               "Rogue": {"earth": 2, "fire": 0, "wind": 0, "ice": 7}
            },
            "ice": {
               "Warrior": {"earth": 7, "fire": 0, "wind": 0, "ice": 2},
               "Rogue": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}
            }
         }
      },
      "Psionicist": {
         "statsMultiplier": {
            "hp": 1.4,
            "pp": 1.35,
            "attack": 1.35,
            "defense": 1.2,
            "agility": 1.35,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}
            }
         }
      },
      "Psy Champion": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.6,
            "attack": 1.6,
            "defense": 1.45,
            "agility": 1.6,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 2, "fire": 0, "wind": 7, "ice": 0},
               "Rogue": {"earth": 2, "fire": 0, "wind": 7, "ice": 0}
            }
         }
      },
      "Psy Knight": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.5,
            "attack": 1.5,
            "defense": 1.35,
            "agility": 1.5,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 1, "fire": 0, "wind": 6, "ice": 0},
               "Rogue": {"earth": 1, "fire": 0, "wind": 6, "ice": 0}
            }
         }
      },
      "Radiant Priestess": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.9,
            "attack": 1.1,
            "defense": 1.3,
            "agility": 1.6,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Red Mage": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.8,
            "attack": 1.25,
            "defense": 1.25,
            "agility": 1.6,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}}
         }
      },
      "Rogue": {
         "statsMultiplier": {"hp": 1.1, "pp": 0.8, "attack": 1.15, "defense": 1.05, "agility": 1.1, "luck": 0.9},
         "psynergy": [],
         "requirements": {"earth": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Ruffian": {
         "statsMultiplier": {"hp": 1.35, "pp": 1, "attack": 1.3, "defense": 1.2, "agility": 1.2, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 2, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 2, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Samurai": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.35,
            "attack": 1.55,
            "defense": 1.5,
            "agility": 1.55,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 3, "ice": 0},
               "Rogue": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 3, "ice": 0},
               "Rogue": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}
            }
         }
      },
      "Savage": {
         "statsMultiplier": {"hp": 1.55, "pp": 1.1, "attack": 1.4, "defense": 1.3, "agility": 1.3, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Shinobi": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.55,
            "attack": 1.55,
            "defense": 1.25,
            "agility": 1.55,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 3, "wind": 3, "ice": 0},
               "Rogue": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 3, "fire": 0, "wind": 3, "ice": 0},
               "Rogue": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}
            }
         }
      },
      "Shogun": {
         "statsMultiplier": {
            "hp": 2.1,
            "pp": 1.45,
            "attack": 1.65,
            "defense": 1.6,
            "agility": 1.65,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 5, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}
            },
            "fire": {
               "Warrior": {"earth": 5, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}
            }
         }
      },
      "Sovereign": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.25,
            "attack": 1.5,
            "defense": 1.4,
            "agility": 1.5,
            "luck": 1
         }, "psynergy": [], "requirements": {"earth": {"Warrior": {"earth": 8, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Spellblade": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.4,
            "attack": 1.4,
            "defense": 1.25,
            "agility": 1.4,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 5, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}
            }
         }
      },
      "Squire": {
         "statsMultiplier": {"hp": 1.1, "pp": 0.85, "attack": 1.1, "defense": 1, "agility": 1.1, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Swordsman": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.05,
            "attack": 1.1,
            "defense": 1.15,
            "agility": 0.85,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 1},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 1}
            },
            "ice": {
               "Warrior": {"earth": 1, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Templar": {
         "statsMultiplier": {
            "hp": 1.95,
            "pp": 1.5,
            "attack": 1.55,
            "defense": 1.55,
            "agility": 1.25,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}
            },
            "fire": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 4},
               "Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}
            }
         }
      },
      "Valiant": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.25,
            "attack": 1.3,
            "defense": 1.35,
            "agility": 1.05,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}
            },
            "ice": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 0},
               "Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}
            }
         }
      },
      "Valkyrie": {
         "statsMultiplier": {
            "hp": 1.85,
            "pp": 1.65,
            "attack": 1.55,
            "defense": 1.55,
            "agility": 1.5,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}}
         }
      },
      "Vanguard": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.6,
            "attack": 1.5,
            "defense": 1.5,
            "agility": 1.45,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}}
         }
      },
      "Veteran": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.1,
            "attack": 1.45,
            "defense": 1.35,
            "agility": 1.4,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"earth": {"Rogue": {"earth": 6, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Warden": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.75,
            "attack": 1.25,
            "defense": 1.3,
            "agility": 1.5,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 4, "wind": 3, "ice": 0}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "wind": 3, "ice": 0}}
         }
      },
      "Warlord": {
         "statsMultiplier": {"hp": 2, "pp": 1.5, "attack": 1.6, "defense": 1.55, "agility": 1.6, "luck": 1},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 5, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}
            },
            "fire": {
               "Warrior": {"earth": 0, "fire": 5, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}
            }
         }
      },
      "White Knight": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.4,
            "attack": 1.45,
            "defense": 1.45,
            "agility": 1.15,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "earth": {
               "Warrior": {"earth": 0, "fire": 3, "wind": 0, "ice": 3},
               "Rogue": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}
            },
            "fire": {
               "Warrior": {"earth": 3, "fire": 0, "wind": 0, "ice": 3},
               "Rogue": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}
            }
         }
      },
      "Armed": {
         "statsMultiplier": {"hp": 1.05, "pp": 1, "attack": 1.15, "defense": 1.1, "agility": 1.05, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 1},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 1}
            },
            "ice": {
               "Warrior": {"earth": 0, "fire": 1, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}
            }
         }
      },
      "Baron": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.1, "attack": 1.35, "defense": 1.4, "agility": 1.25, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 6, "wind": 0, "ice": 0}}}
      },
      "Cannoneer": {
         "statsMultiplier": {"hp": 1.3, "pp": 1, "attack": 1.1, "defense": 1.1, "agility": 1, "luck": 1.2},
         "psynergy": [],
         "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}}}
      },
      "Corsair": {
         "statsMultiplier": {"hp": 1.5, "pp": 1.1, "attack": 1.2, "defense": 1.2, "agility": 1.1, "luck": 1.2},
         "psynergy": [],
         "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}}}
      },
      "Fair": {
         "statsMultiplier": {"hp": 1.25, "pp": 1.1, "attack": 1.25, "defense": 1.2, "agility": 1.15, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 2},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}
            },
            "ice": {
               "Warrior": {"earth": 0, "fire": 2, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}
            }
         }
      },
      "Fated": {
         "statsMultiplier": {"hp": 1.4, "pp": 1.3, "attack": 1.3, "defense": 1.3, "agility": 1.3, "luck": 1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}
            }
         }
      },
      "Fire Master": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.5,
            "attack": 1.2,
            "defense": 1.25,
            "agility": 1.45,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"fire": {"Mage": {"earth": 0, "fire": 6, "wind": 0, "ice": 0}}}
      },
      "Flame User": {
         "statsMultiplier": {
            "hp": 1,
            "pp": 1.2,
            "attack": 0.9,
            "defense": 0.95,
            "agility": 1.15,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"fire": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Guard": {
         "statsMultiplier": {"hp": 1.2, "pp": 0.8, "attack": 1.05, "defense": 1.1, "agility": 0.95, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Hex": {
         "statsMultiplier": {"hp": 1.3, "pp": 1.4, "attack": 1.1, "defense": 1.15, "agility": 1.35, "luck": 0.9},
         "psynergy": [],
         "requirements": {"fire": {"Mage": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}}}
      },
      "Hull Reaver": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.3,
            "attack": 1.4,
            "defense": 1.4,
            "agility": 1.3,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}}}
      },
      "Incendiary": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.6,
            "attack": 1.3,
            "defense": 1.35,
            "agility": 1.55,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"fire": {"Mage": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}}}
      },
      "Luminier": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.35,
            "attack": 1.5,
            "defense": 1.45,
            "agility": 1.4,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 1, "wind": 0, "ice": 6},
               "Rogue": {"earth": 0, "fire": 1, "wind": 0, "ice": 6}
            },
            "ice": {
               "Warrior": {"earth": 0, "fire": 6, "wind": 0, "ice": 1},
               "Rogue": {"earth": 0, "fire": 6, "wind": 0, "ice": 1}
            }
         }
      },
      "Mystic Knight": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.35,
            "attack": 1.35,
            "defense": 1.35,
            "agility": 1.35,
            "luck": 1
         },
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 5, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}
            }
         }
      },
      "Page": {
         "statsMultiplier": {"hp": 1, "pp": 1.1, "attack": 1.1, "defense": 1.1, "agility": 1.1, "luck": 1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 1, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}
            }
         }
      },
      "Phalanx": {
         "statsMultiplier": {"hp": 2, "pp": 1.2, "attack": 1.45, "defense": 1.5, "agility": 1.35, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 8, "wind": 0, "ice": 0}}}
      },
      "Pirate": {
         "statsMultiplier": {"hp": 1.1, "pp": 0.9, "attack": 1, "defense": 1, "agility": 0.9, "luck": 1.2},
         "psynergy": [],
         "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Pirate King": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.2,
            "attack": 1.3,
            "defense": 1.3,
            "agility": 1.2,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 6, "wind": 0, "ice": 0}}}
      },
      "Pupil": {
         "statsMultiplier": {"hp": 1.2, "pp": 1.2, "attack": 1.2, "defense": 1.2, "agility": 1.2, "luck": 1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 2, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}
            }
         }
      },
      "Radiant": {
         "statsMultiplier": {
            "hp": 1.95,
            "pp": 1.45,
            "attack": 1.6,
            "defense": 1.55,
            "agility": 1.5,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 2, "wind": 0, "ice": 7},
               "Rogue": {"earth": 0, "fire": 2, "wind": 0, "ice": 7}
            },
            "ice": {
               "Warrior": {"earth": 0, "fire": 7, "wind": 0, "ice": 2},
               "Rogue": {"earth": 0, "fire": 7, "wind": 0, "ice": 2}
            }
         }
      },
      "Righteous": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.25,
            "attack": 1.4,
            "defense": 1.35,
            "agility": 1.3,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 5},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}
            },
            "ice": {
               "Warrior": {"earth": 0, "fire": 5, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}
            }
         }
      },
      "Soldier": {
         "statsMultiplier": {
            "hp": 1.4,
            "pp": 0.9,
            "attack": 1.15,
            "defense": 1.2,
            "agility": 1.05,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}}}
      },
      "Star Knight": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.45,
            "attack": 1.45,
            "defense": 1.45,
            "agility": 1.45,
            "luck": 1
         },
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 1, "wind": 6, "ice": 0},
               "Rogue": {"earth": 0, "fire": 1, "wind": 6, "ice": 0}
            }
         }
      },
      "Sun Champion": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.55,
            "attack": 1.55,
            "defense": 1.55,
            "agility": 1.55,
            "luck": 1
         },
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 2, "wind": 7, "ice": 0},
               "Rogue": {"earth": 0, "fire": 2, "wind": 7, "ice": 0}
            }
         }
      },
      "Virtuous": {
         "statsMultiplier": {
            "hp": 1.45,
            "pp": 1.2,
            "attack": 1.35,
            "defense": 1.3,
            "agility": 1.25,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "fire": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}
            },
            "ice": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 0},
               "Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}
            }
         }
      },
      "Warrior": {
         "statsMultiplier": {"hp": 1.6, "pp": 1, "attack": 1.25, "defense": 1.3, "agility": 1.15, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}}}
      },
      "Witch": {
         "statsMultiplier": {"hp": 1.15, "pp": 1.3, "attack": 1, "defense": 1.05, "agility": 1.25, "luck": 0.9},
         "psynergy": [],
         "requirements": {"fire": {"Mage": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}}}
      },
      "Admiral": {
         "statsMultiplier": {
            "hp": 1.95,
            "pp": 1.3,
            "attack": 1.45,
            "defense": 1.45,
            "agility": 1.35,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}}}
      },
      "Angel": {
         "statsMultiplier": {"hp": 1.65, "pp": 1.65, "attack": 1.2, "defense": 1.3, "agility": 1.4, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}}}
      },
      "Arcanist": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.85,
            "attack": 1.3,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 0, "wind": 2, "ice": 7}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "wind": 7, "ice": 2}}
         }
      },
      "Archon": {
         "statsMultiplier": {"hp": 1.95, "pp": 1.5, "attack": 1.65, "defense": 1.5, "agility": 1.65, "luck": 1},
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 5, "ice": 0},
               "Rogue": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 5},
               "Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}
            }
         }
      },
      "Ascetic": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.55,
            "attack": 1.1,
            "defense": 1.15,
            "agility": 1.25,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}}}
      },
      "Avenger": {
         "statsMultiplier": {
            "hp": 1.95,
            "pp": 1.4,
            "attack": 1.65,
            "defense": 1.55,
            "agility": 1.55,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}
            }
         }
      },
      "Captain": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.1,
            "attack": 1.25,
            "defense": 1.25,
            "agility": 1.15,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}}}
      },
      "Channeler": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.75,
            "attack": 1.55,
            "defense": 1.45,
            "agility": 1.65,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 4, "wind": 4, "ice": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 4, "wind": 0, "ice": 4}}
         }
      },
      "Cleric": {
         "statsMultiplier": {"hp": 1.25, "pp": 1.45, "attack": 1, "defense": 1.1, "agility": 1.2, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}}}
      },
      "Commander": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.2,
            "attack": 1.35,
            "defense": 1.35,
            "agility": 1.25,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 6}}}
      },
      "Counselor": {
         "statsMultiplier": {
            "hp": 1.6,
            "pp": 1.6,
            "attack": 1.45,
            "defense": 1.35,
            "agility": 1.45,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 3, "fire": 0, "wind": 3, "ice": 0},
               "Rogue": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 3, "fire": 0, "wind": 0, "ice": 3},
               "Rogue": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}
            }
         }
      },
      "Destroyer": {
         "statsMultiplier": {
            "hp": 2.05,
            "pp": 1.45,
            "attack": 1.7,
            "defense": 1.6,
            "agility": 1.6,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 5, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 0, "fire": 5, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}
            }
         }
      },
      "Divine Mage": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.75,
            "attack": 1.25,
            "defense": 1.25,
            "agility": 1.6,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 3, "wind": 4, "ice": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 3, "wind": 0, "ice": 4}}
         }
      },
      "Druid": {
         "statsMultiplier": {"hp": 1.75, "pp": 1.8, "attack": 1.3, "defense": 1.35, "agility": 1.6, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}}}
      },
      "Elementalist": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.75,
            "attack": 1.2,
            "defense": 1.2,
            "agility": 1.5,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 3, "fire": 0, "wind": 3, "ice": 0}},
            "wind": {"Mage": {"earth": 3, "fire": 0, "wind": 0, "ice": 3}}
         }
      },
      "Enlightened": {
         "statsMultiplier": {
            "hp": 1.6,
            "pp": 1.75,
            "attack": 1.25,
            "defense": 1.3,
            "agility": 1.4,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 6, "wind": 0, "ice": 1}}}
      },
      "Explorer": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.05,
            "attack": 1.3,
            "defense": 1.15,
            "agility": 1.25,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 2, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}
            }
         }
      },
      "Fateweaver": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.85,
            "attack": 1.35,
            "defense": 1.35,
            "agility": 1.7,
            "luck": 1.2
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}}
         }
      },
      "Fury": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.8, "attack": 1.6, "defense": 1.5, "agility": 1.7, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 5, "wind": 4, "ice": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 5, "wind": 0, "ice": 4}}
         }
      },
      "General": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.75,
            "attack": 1.6,
            "defense": 1.5,
            "agility": 1.6,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 5, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 5, "fire": 0, "wind": 0, "ice": 4},
               "Rogue": {"earth": 5, "fire": 0, "wind": 0, "ice": 4}
            }
         }
      },
      "Globetrotter": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.15,
            "attack": 1.4,
            "defense": 1.25,
            "agility": 1.35,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}
            }
         }
      },
      "Guru": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.85, "attack": 1.35, "defense": 1.4, "agility": 1.5, "luck": 1.1},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 7, "wind": 0, "ice": 2}}}
      },
      "Healer": {
         "statsMultiplier": {
            "hp": 1.35,
            "pp": 1.6,
            "attack": 1.1,
            "defense": 1.15,
            "agility": 1.4,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Herald": {
         "statsMultiplier": {"hp": 1.75, "pp": 1.4, "attack": 1.55, "defense": 1.4, "agility": 1.55, "luck": 1},
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 3, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 3, "fire": 0, "wind": 4, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 3, "fire": 0, "wind": 0, "ice": 4},
               "Rogue": {"earth": 3, "fire": 0, "wind": 0, "ice": 4}
            }
         }
      },
      "Herbalist": {
         "statsMultiplier": {
            "hp": 0.95,
            "pp": 1.25,
            "attack": 0.85,
            "defense": 0.9,
            "agility": 1.15,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Holy Knight": {
         "statsMultiplier": {
            "hp": 2.1,
            "pp": 1.55,
            "attack": 1.55,
            "defense": 1.6,
            "agility": 1.3,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 5, "ice": 0},
               "Rogue": {"earth": 0, "fire": 4, "wind": 5, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 0, "fire": 4, "wind": 0, "ice": 5},
               "Rogue": {"earth": 0, "fire": 4, "wind": 0, "ice": 5}
            }
         }
      },
      "Ice Rogue 1": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Ice Rogue 2": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}}}
      },
      "Ice Rogue 3": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}}}
      },
      "Ice Rogue 4": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 6}}}
      },
      "Ice Rogue 5": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 8}}}
      },
      "Mariner": {
         "statsMultiplier": {
            "hp": 1.15,
            "pp": 0.9,
            "attack": 1.05,
            "defense": 1.05,
            "agility": 0.95,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Monk": {
         "statsMultiplier": {"hp": 1, "pp": 1.3, "attack": 0.9, "defense": 0.95, "agility": 1.05, "luck": 1.1},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}}}
      },
      "Naturalist": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.35,
            "attack": 0.95,
            "defense": 1,
            "agility": 1.25,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Officiant": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.35,
            "attack": 0.9,
            "defense": 1,
            "agility": 1.1,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}}}
      },
      "Privateer": {
         "statsMultiplier": {
            "hp": 1.35,
            "pp": 1,
            "attack": 1.15,
            "defense": 1.15,
            "agility": 1.05,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}}}
      },
      "Pure Mage": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.8,
            "attack": 1.35,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 4, "fire": 0, "wind": 5, "ice": 0}},
            "wind": {"Mage": {"earth": 4, "fire": 0, "wind": 0, "ice": 5}}
         }
      },
      "Renegade": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.3,
            "attack": 1.55,
            "defense": 1.45,
            "agility": 1.45,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 3, "wind": 3, "ice": 0},
               "Rogue": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 0, "fire": 3, "wind": 0, "ice": 3},
               "Rogue": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}
            }
         }
      },
      "Researcher": {
         "statsMultiplier": {
            "hp": 1.05,
            "pp": 1.4,
            "attack": 0.95,
            "defense": 1,
            "agility": 1.3,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 2}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}}
         }
      },
      "Saint": {
         "statsMultiplier": {"hp": 1.45, "pp": 1.55, "attack": 1.1, "defense": 1.2, "agility": 1.3, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 6}}}
      },
      "Saint Knight": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.45,
            "attack": 1.45,
            "defense": 1.5,
            "agility": 1.2,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 3, "wind": 4, "ice": 0},
               "Rogue": {"earth": 0, "fire": 3, "wind": 4, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 0, "fire": 3, "wind": 0, "ice": 4},
               "Rogue": {"earth": 0, "fire": 3, "wind": 0, "ice": 4}
            }
         }
      },
      "Savant": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.65,
            "attack": 1.1,
            "defense": 1.15,
            "agility": 1.45,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 5}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}}
         }
      },
      "Scholar": {
         "statsMultiplier": {
            "hp": 1.2,
            "pp": 1.55,
            "attack": 1.05,
            "defense": 1.1,
            "agility": 1.4,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 4}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}}
         }
      },
      "Sea Lord": {
         "statsMultiplier": {"hp": 2, "pp": 1.4, "attack": 1.65, "defense": 1.5, "agility": 1.6, "luck": 0.9},
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 7, "ice": 2},
               "Rogue": {"earth": 0, "fire": 0, "wind": 7, "ice": 2}
            }
         }
      },
      "Seafarer": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 0.95,
            "attack": 1.2,
            "defense": 1.05,
            "agility": 1.15,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 1, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}
            }
         }
      },
      "Shaman": {
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.3, "agility": 1.6, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}},
            "wind": {"Mage": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}}
         }
      },
      "Shugenja": {
         "statsMultiplier": {
            "hp": 1.4,
            "pp": 1.65,
            "attack": 1.15,
            "defense": 1.2,
            "agility": 1.3,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}}}
      },
      "Strategist": {
         "statsMultiplier": {
            "hp": 1.8,
            "pp": 1.7,
            "attack": 1.55,
            "defense": 1.45,
            "agility": 1.55,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 4, "ice": 0},
               "Rogue": {"earth": 4, "fire": 0, "wind": 4, "ice": 0}
            },
            "wind": {
               "Warrior": {"earth": 4, "fire": 0, "wind": 0, "ice": 4},
               "Rogue": {"earth": 4, "fire": 0, "wind": 0, "ice": 4}
            }
         }
      },
      "Student": {
         "statsMultiplier": {
            "hp": 0.9,
            "pp": 1.3,
            "attack": 0.85,
            "defense": 0.9,
            "agility": 1.2,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 1}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "wind": 1, "ice": 0}}
         }
      },
      "Thaumaturge": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.7,
            "attack": 1.2,
            "defense": 1.25,
            "agility": 1.5,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 6, "fire": 0, "wind": 0, "ice": 1}}}
      },
      "Therapist": {
         "statsMultiplier": {
            "hp": 1.25,
            "pp": 1.5,
            "attack": 1.05,
            "defense": 1.1,
            "agility": 1.35,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Water User": {
         "statsMultiplier": {
            "hp": 0.95,
            "pp": 1.25,
            "attack": 0.8,
            "defense": 0.9,
            "agility": 1,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Waverider": {
         "statsMultiplier": {
            "hp": 1.6,
            "pp": 1.2,
            "attack": 1.45,
            "defense": 1.3,
            "agility": 1.4,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 5, "ice": 0},
               "Rogue": {"earth": 0, "fire": 0, "wind": 5, "ice": 0}
            }
         }
      },
      "White Mage": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.7,
            "attack": 1.25,
            "defense": 1.25,
            "agility": 1.55,
            "luck": 1.3
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 3, "fire": 0, "wind": 4, "ice": 0}},
            "wind": {"Mage": {"earth": 3, "fire": 0, "wind": 0, "ice": 4}}
         }
      },
      "Wild Mage": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.65,
            "attack": 1.45,
            "defense": 1.35,
            "agility": 1.55,
            "luck": 0.8
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 3, "wind": 3, "ice": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 3, "wind": 0, "ice": 3}}
         }
      },
      "Windrider": {
         "statsMultiplier": {
            "hp": 1.8,
            "pp": 1.3,
            "attack": 1.55,
            "defense": 1.4,
            "agility": 1.5,
            "luck": 0.9
         },
         "psynergy": [],
         "requirements": {
            "ice": {
               "Warrior": {"earth": 0, "fire": 0, "wind": 6, "ice": 1},
               "Rogue": {"earth": 0, "fire": 0, "wind": 6, "ice": 1}
            }
         }
      },
      "Wise": {
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.25, "agility": 1.55, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 0, "wind": 1, "ice": 6}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "wind": 6, "ice": 1}}
         }
      },
      "Worldwaker": {
         "statsMultiplier": {
            "hp": 1.8,
            "pp": 1.9,
            "attack": 1.35,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 1.1
         },
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 5, "fire": 0, "wind": 4, "ice": 0}},
            "wind": {"Mage": {"earth": 5, "fire": 0, "wind": 0, "ice": 4}}
         }
      },
      "Yamabushi": {
         "statsMultiplier": {
            "hp": 1.15,
            "pp": 1.4,
            "attack": 1,
            "defense": 1.05,
            "agility": 1.15,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}}}
      },
      "Acolyte": {
         "statsMultiplier": {"hp": 1.1, "pp": 1.45, "attack": 1.05, "defense": 1, "agility": 1.3, "luck": 0.8},
         "psynergy": [],
         "requirements": {"wind": {"Mage": {"earth": 0, "fire": 2, "wind": 0, "ice": 0}}}
      },
      "Archmage": {
         "statsMultiplier": {
            "hp": 1.4,
            "pp": 1.55,
            "attack": 1.15,
            "defense": 1.2,
            "agility": 1.55,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "wind": 6, "ice": 0}}}
      },
      "Augur": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.75,
            "attack": 1.2,
            "defense": 1.25,
            "agility": 1.55,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 6, "fire": 0, "wind": 0, "ice": 1}}}
      },
      "Bolt User": {
         "statsMultiplier": {
            "hp": 0.9,
            "pp": 1.25,
            "attack": 0.85,
            "defense": 0.9,
            "agility": 1.25,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Clairvoyant": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.65,
            "attack": 1.1,
            "defense": 1.15,
            "agility": 1.45,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 5, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Cultist": {
         "statsMultiplier": {
            "hp": 1.25,
            "pp": 1.6,
            "attack": 1.15,
            "defense": 1.1,
            "agility": 1.4,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 4, "wind": 0, "ice": 0}}}
      },
      "Disciple": {
         "statsMultiplier": {
            "hp": 0.95,
            "pp": 1.35,
            "attack": 0.95,
            "defense": 0.9,
            "agility": 1.2,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 1, "wind": 0, "ice": 0}}}
      },
      "Diviner": {
         "statsMultiplier": {
            "hp": 1.2,
            "pp": 1.55,
            "attack": 1.05,
            "defense": 1.1,
            "agility": 1.4,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 4, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Fanatic": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.8,
            "attack": 1.3,
            "defense": 1.25,
            "agility": 1.55,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 6, "wind": 1, "ice": 0}}}
      },
      "Haruspex": {
         "statsMultiplier": {
            "hp": 1.05,
            "pp": 1.4,
            "attack": 0.95,
            "defense": 1,
            "agility": 1.3,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 2, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Illusionist": {
         "statsMultiplier": {
            "hp": 1.2,
            "pp": 1.45,
            "attack": 1.05,
            "defense": 1.1,
            "agility": 1.45,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}}}
      },
      "Inquisitor": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.9,
            "attack": 1.4,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 7, "wind": 2, "ice": 0}}}
      },
      "Magician": {
         "statsMultiplier": {
            "hp": 1.05,
            "pp": 1.35,
            "attack": 0.95,
            "defense": 1,
            "agility": 1.35,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}}}
      },
      "Oracle": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.85,
            "attack": 1.3,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 7, "fire": 0, "wind": 0, "ice": 2}}}
      },
      "Seer": {
         "statsMultiplier": {"hp": 0.9, "pp": 1.3, "attack": 0.85, "defense": 0.9, "agility": 1.2, "luck": 1.1},
         "psynergy": [],
         "requirements": {"wind": {"Mage": {"earth": 1, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Sorcerer": {
         "statsMultiplier": {
            "hp": 1.6,
            "pp": 1.65,
            "attack": 1.25,
            "defense": 1.3,
            "agility": 1.65,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "wind": 8, "ice": 0}}}
      },
      "Wind Rogue 1": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Wind Rogue 2": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}}}
      },
      "Wind Rogue 3": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}}}
      },
      "Wind Rogue 4": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "wind": 6, "ice": 0}}}
      },
      "Wind Rogue 5": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "wind": 8, "ice": 0}}}
      },
      "Wind Warrior 1": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "wind": 0, "ice": 0}}}
      },
      "Wind Warrior 2": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "wind": 2, "ice": 0}}}
      },
      "Wind Warrior 3": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "wind": 4, "ice": 0}}}
      },
      "Wind Warrior 4": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "wind": 6, "ice": 0}}}
      },
      "Wind Warrior 5": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "wind": 8, "ice": 0}}}
      },
      "Zealot": {
         "statsMultiplier": {
            "hp": 1.35,
            "pp": 1.7,
            "attack": 1.2,
            "defense": 1.15,
            "agility": 1.45,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 5, "wind": 0, "ice": 0}}}
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
      names: [
         'Acrobatics',
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

module.exports.database = database;
