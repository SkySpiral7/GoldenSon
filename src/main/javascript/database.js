'use strict';
/*
TODO: need data: background skills, classes for light/dark, equipment, psynergy (main and in classes)
TODO: use data: skills, Weapon classes
*/
var database = {
   backgrounds: {
      "Academic": {"statsAddend": {"hp": 10, "pp": 15, "attack": 0, "defense": 0, "agility": 3, "luck": 3}},
      "Apothecary": {"statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 2, "agility": 3, "luck": 3}},
      "Artist": {"statsAddend": {"hp": 0, "pp": 15, "attack": 1, "defense": 1, "agility": 1, "luck": 5}},
      "Craftsman": {"statsAddend": {"hp": 15, "pp": 5, "attack": 1, "defense": 1, "agility": 3, "luck": 2}},
      "Farmer": {"statsAddend": {"hp": 20, "pp": 0, "attack": 4, "defense": 3, "agility": 0, "luck": 0}},
      "Guard": {"statsAddend": {"hp": 10, "pp": 0, "attack": 4, "defense": 2, "agility": 2, "luck": 1}},
      "Healer": {"statsAddend": {"hp": 10, "pp": 10, "attack": 0, "defense": 0, "agility": 3, "luck": 4}},
      "Pirate": {"statsAddend": {"hp": 10, "pp": 0, "attack": 4, "defense": 3, "agility": 1, "luck": 1}},
      "Sage": {"statsAddend": {"hp": 0, "pp": 20, "attack": 0, "defense": 0, "agility": 3, "luck": 4}},
      "Sailor": {"statsAddend": {"hp": 10, "pp": 0, "attack": 3, "defense": 4, "agility": 1, "luck": 1}},
      "Seer": {"statsAddend": {"hp": 5, "pp": 10, "attack": 0, "defense": 2, "agility": 3, "luck": 3}},
      "Shaman": {"statsAddend": {"hp": 10, "pp": 15, "attack": 0, "defense": 0, "agility": 2, "luck": 4}},
      "Thief": {"statsAddend": {"hp": 10, "pp": 0, "attack": 1, "defense": 3, "agility": 4, "luck": 1}}
   },
   combatTypes: {
      "Mage": {"statsAddend": {"hp": 5, "pp": 25, "attack": 0, "defense": 3, "agility": 4, "luck": 6}},
      "Rogue": {"statsAddend": {"hp": 10, "pp": 10, "attack": 1, "defense": 4, "agility": 6, "luck": 4}},
      "Warrior": {"statsAddend": {"hp": 15, "pp": 10, "attack": 6, "defense": 4, "agility": 4, "luck": 0}}
   },
   classes: {
      "Acolyte": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.45,
            "attack": 1.05,
            "defense": 1,
            "agility": 1.3,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 2, "ice": 0, "wind": 0}}}
      },
      "Admiral": {
         "statsMultiplier": {
            "hp": 1.95,
            "pp": 1.3,
            "attack": 1.45,
            "defense": 1.45,
            "agility": 1.35,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "ice": 8, "wind": 0}}}
      },
      "Angel": {
         "statsMultiplier": {"hp": 1.65, "pp": 1.65, "attack": 1.2, "defense": 1.3, "agility": 1.4, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "ice": 8, "wind": 0}}}
      },
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
            "earth": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 4}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 4}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 1},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 1}
            }
         }
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
            "ice": {"Mage": {"earth": 0, "fire": 0, "ice": 7, "wind": 2}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "ice": 2, "wind": 7}}
         }
      },
      "Archmage": {
         "statsMultiplier": {
            "hp": 1.4,
            "pp": 1.55,
            "attack": 1.15,
            "defense": 1.2,
            "agility": 1.55,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 6}}}
      },
      "Archon": {
         "statsMultiplier": {"hp": 1.95, "pp": 1.5, "attack": 1.65, "defense": 1.5, "agility": 1.65, "luck": 1},
         "psynergy": [],
         "requirements": {
            "ice": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 5},
               "Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 5}
            },
            "wind": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 5, "wind": 0},
               "Warrior": {"earth": 4, "fire": 0, "ice": 5, "wind": 0}
            }
         }
      },
      "Armed": {
         "statsMultiplier": {"hp": 1.05, "pp": 1, "attack": 1.15, "defense": 1.1, "agility": 1.05, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Rogue": {"earth": 0, "fire": 0, "ice": 1, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 1, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 0, "fire": 1, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 1, "ice": 0, "wind": 0}
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
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 0}}}
      },
      "Augur": {
         "statsMultiplier": {
            "hp": 1.5,
            "pp": 1.75,
            "attack": 1.2,
            "defense": 1.25,
            "agility": 1.55,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 6, "fire": 0, "ice": 1, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 4}
            },
            "wind": {
               "Rogue": {"earth": 0, "fire": 4, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 4, "ice": 4, "wind": 0}
            }
         }
      },
      "Baron": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.1, "attack": 1.35, "defense": 1.4, "agility": 1.25, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 6, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 5, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 5, "ice": 0, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 5, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 5, "fire": 0, "ice": 0, "wind": 0}
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
               "Rogue": {"earth": 1, "fire": 6, "ice": 0, "wind": 0},
               "Warrior": {"earth": 1, "fire": 6, "ice": 0, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 6, "fire": 1, "ice": 0, "wind": 0},
               "Warrior": {"earth": 6, "fire": 1, "ice": 0, "wind": 0}
            }
         }
      },
      "Bolt User": {
         "statsMultiplier": {
            "hp": 0.9,
            "pp": 1.25,
            "attack": 0.85,
            "defense": 0.9,
            "agility": 1.25,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Brute": {
         "statsMultiplier": {"hp": 1.15, "pp": 0.9, "attack": 1.2, "defense": 1.1, "agility": 1.1, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Rogue": {"earth": 0, "fire": 1, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 1, "ice": 0, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 1, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 1, "fire": 0, "ice": 0, "wind": 0}
            }
         }
      },
      "Cannoneer": {
         "statsMultiplier": {"hp": 1.3, "pp": 1, "attack": 1.1, "defense": 1.1, "agility": 1, "luck": 1.2},
         "psynergy": [],
         "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 2, "ice": 0, "wind": 0}}}
      },
      "Captain": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.1,
            "attack": 1.25,
            "defense": 1.25,
            "agility": 1.15,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "ice": 4, "wind": 0}}}
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
            "ice": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 4}},
            "wind": {"Mage": {"earth": 0, "fire": 4, "ice": 4, "wind": 0}}
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
               "Rogue": {"earth": 2, "fire": 7, "ice": 0, "wind": 0},
               "Warrior": {"earth": 2, "fire": 7, "ice": 0, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 7, "fire": 2, "ice": 0, "wind": 0},
               "Warrior": {"earth": 7, "fire": 2, "ice": 0, "wind": 0}
            }
         }
      },
      "Clairvoyant": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.65,
            "attack": 1.1,
            "defense": 1.15,
            "agility": 1.45,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 5, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Cleric": {
         "statsMultiplier": {"hp": 1.25, "pp": 1.45, "attack": 1, "defense": 1.1, "agility": 1.2, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "ice": 4, "wind": 0}}}
      },
      "Commander": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.2,
            "attack": 1.35,
            "defense": 1.35,
            "agility": 1.25,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "ice": 6, "wind": 0}}}
      },
      "Conqueror": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.2,
            "attack": 1.55,
            "defense": 1.45,
            "agility": 1.5,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"earth": {"Rogue": {"earth": 8, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Corsair": {
         "statsMultiplier": {"hp": 1.5, "pp": 1.1, "attack": 1.2, "defense": 1.2, "agility": 1.1, "luck": 1.2},
         "psynergy": [],
         "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 3, "fire": 0, "ice": 0, "wind": 3},
               "Warrior": {"earth": 3, "fire": 0, "ice": 0, "wind": 3}
            },
            "wind": {
               "Rogue": {"earth": 3, "fire": 0, "ice": 3, "wind": 0},
               "Warrior": {"earth": 3, "fire": 0, "ice": 3, "wind": 0}
            }
         }
      },
      "Cultist": {
         "statsMultiplier": {
            "hp": 1.25,
            "pp": 1.6,
            "attack": 1.15,
            "defense": 1.1,
            "agility": 1.4,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 2, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 2, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 2, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 2, "fire": 0, "ice": 0, "wind": 0}
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
               "Rogue": {"earth": 0, "fire": 5, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 5, "ice": 0, "wind": 4}
            },
            "wind": {
               "Rogue": {"earth": 0, "fire": 5, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 5, "ice": 4, "wind": 0}
            }
         }
      },
      "Disciple": {
         "statsMultiplier": {
            "hp": 0.95,
            "pp": 1.35,
            "attack": 0.95,
            "defense": 0.9,
            "agility": 1.2,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 1, "ice": 0, "wind": 0}}}
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
            "ice": {"Mage": {"earth": 0, "fire": 3, "ice": 0, "wind": 4}},
            "wind": {"Mage": {"earth": 0, "fire": 3, "ice": 4, "wind": 0}}
         }
      },
      "Diviner": {
         "statsMultiplier": {
            "hp": 1.2,
            "pp": 1.55,
            "attack": 1.05,
            "defense": 1.1,
            "agility": 1.4,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Druid": {
         "statsMultiplier": {"hp": 1.75, "pp": 1.8, "attack": 1.3, "defense": 1.35, "agility": 1.6, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 7, "fire": 0, "ice": 2, "wind": 0}}}
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
            "earth": {"Mage": {"earth": 3, "fire": 0, "ice": 3, "wind": 0}},
            "fire": {"Mage": {"earth": 0, "fire": 3, "ice": 3, "wind": 0}}
         }
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
            "ice": {"Mage": {"earth": 3, "fire": 0, "ice": 0, "wind": 3}},
            "wind": {"Mage": {"earth": 3, "fire": 0, "ice": 3, "wind": 0}}
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
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 6, "ice": 1, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 2},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 2}
            }
         }
      },
      "Fair": {
         "statsMultiplier": {"hp": 1.25, "pp": 1.1, "attack": 1.25, "defense": 1.2, "agility": 1.15, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Rogue": {"earth": 0, "fire": 0, "ice": 2, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 2, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 0, "fire": 2, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 2, "ice": 0, "wind": 0}
            }
         }
      },
      "Fanatic": {
         "statsMultiplier": {
            "hp": 1.55,
            "pp": 1.8,
            "attack": 1.3,
            "defense": 1.25,
            "agility": 1.55,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 6, "ice": 0, "wind": 1}}}
      },
      "Fated": {
         "statsMultiplier": {"hp": 1.4, "pp": 1.3, "attack": 1.3, "defense": 1.3, "agility": 1.3, "luck": 1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 4}
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
            "ice": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 5}},
            "wind": {"Mage": {"earth": 0, "fire": 4, "ice": 5, "wind": 0}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 5, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 5, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 5, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 5, "fire": 0, "ice": 0, "wind": 0}
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
         }, "psynergy": [], "requirements": {"fire": {"Mage": {"earth": 0, "fire": 6, "ice": 0, "wind": 0}}}
      },
      "Flame User": {
         "statsMultiplier": {
            "hp": 1,
            "pp": 1.2,
            "attack": 0.9,
            "defense": 0.95,
            "agility": 1.15,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"fire": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Fury": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.8, "attack": 1.6, "defense": 1.5, "agility": 1.7, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 5, "ice": 0, "wind": 4}},
            "wind": {"Mage": {"earth": 0, "fire": 5, "ice": 4, "wind": 0}}
         }
      },
      "Gallant": {
         "statsMultiplier": {"hp": 1.5, "pp": 1.05, "attack": 1.3, "defense": 1.2, "agility": 1.3, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 5, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 5, "fire": 0, "ice": 0, "wind": 4}
            },
            "wind": {
               "Rogue": {"earth": 5, "fire": 0, "ice": 4, "wind": 0},
               "Warrior": {"earth": 5, "fire": 0, "ice": 4, "wind": 0}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 4}
            }
         }
      },
      "Guard": {
         "statsMultiplier": {"hp": 1.2, "pp": 0.8, "attack": 1.05, "defense": 1.1, "agility": 0.95, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
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
            "earth": {"Mage": {"earth": 0, "fire": 5, "ice": 0, "wind": 4}},
            "fire": {"Mage": {"earth": 5, "fire": 0, "ice": 0, "wind": 4}}
         }
      },
      "Guru": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.85, "attack": 1.35, "defense": 1.4, "agility": 1.5, "luck": 1.1},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 7, "ice": 2, "wind": 0}}}
      },
      "Haruspex": {
         "statsMultiplier": {
            "hp": 1.05,
            "pp": 1.4,
            "attack": 0.95,
            "defense": 1,
            "agility": 1.3,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 2, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Healer": {
         "statsMultiplier": {
            "hp": 1.35,
            "pp": 1.6,
            "attack": 1.1,
            "defense": 1.15,
            "agility": 1.4,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 5, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Herald": {
         "statsMultiplier": {"hp": 1.75, "pp": 1.4, "attack": 1.55, "defense": 1.4, "agility": 1.55, "luck": 1},
         "psynergy": [],
         "requirements": {
            "ice": {
               "Rogue": {"earth": 3, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 3, "fire": 0, "ice": 0, "wind": 4}
            },
            "wind": {
               "Rogue": {"earth": 3, "fire": 0, "ice": 4, "wind": 0},
               "Warrior": {"earth": 3, "fire": 0, "ice": 4, "wind": 0}
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
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 1, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Heretic": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.9, "attack": 1.4, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": [],
         "requirements": {
            "earth": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 5}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 5}}
         }
      },
      "Hex": {
         "statsMultiplier": {"hp": 1.3, "pp": 1.4, "attack": 1.1, "defense": 1.15, "agility": 1.35, "luck": 0.9},
         "psynergy": [],
         "requirements": {"fire": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 0}}}
      },
      "High Priestess": {
         "statsMultiplier": {
            "hp": 0.9,
            "pp": 1.6,
            "attack": 0.8,
            "defense": 1,
            "agility": 1.3,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 2, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 5},
               "Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 5}
            },
            "wind": {
               "Rogue": {"earth": 0, "fire": 4, "ice": 5, "wind": 0},
               "Warrior": {"earth": 0, "fire": 4, "ice": 5, "wind": 0}
            }
         }
      },
      "Hull Reaver": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.3,
            "attack": 1.4,
            "defense": 1.4,
            "agility": 1.3,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 8, "ice": 0, "wind": 0}}}
      },
      "Ice Rogue 1": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Ice Rogue 2": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "ice": 2, "wind": 0}}}
      },
      "Ice Rogue 3": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "ice": 4, "wind": 0}}}
      },
      "Ice Rogue 4": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "ice": 6, "wind": 0}}}
      },
      "Ice Rogue 5": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"ice": {"Rogue": {"earth": 0, "fire": 0, "ice": 8, "wind": 0}}}
      },
      "Illusionist": {
         "statsMultiplier": {
            "hp": 1.2,
            "pp": 1.45,
            "attack": 1.05,
            "defense": 1.1,
            "agility": 1.45,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 4}}}
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
            "earth": {"Mage": {"earth": 0, "fire": 5, "ice": 0, "wind": 4}},
            "fire": {"Mage": {"earth": 5, "fire": 0, "ice": 0, "wind": 4}}
         }
      },
      "Incendiary": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.6,
            "attack": 1.3,
            "defense": 1.35,
            "agility": 1.55,
            "luck": 0.9
         }, "psynergy": [], "requirements": {"fire": {"Mage": {"earth": 0, "fire": 8, "ice": 0, "wind": 0}}}
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
            "earth": {"Mage": {"earth": 0, "fire": 3, "ice": 0, "wind": 3}},
            "fire": {"Mage": {"earth": 3, "fire": 0, "ice": 0, "wind": 3}}
         }
      },
      "Inquisitor": {
         "statsMultiplier": {
            "hp": 1.75,
            "pp": 1.9,
            "attack": 1.4,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 7, "ice": 0, "wind": 2}}}
      },
      "Jonin": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.7, "attack": 1.7, "defense": 1.4, "agility": 1.7, "luck": 0.9},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 5},
               "Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 5}
            },
            "fire": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 5},
               "Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 5}
            }
         }
      },
      "Knave": {
         "statsMultiplier": {"hp": 1.3, "pp": 0.9, "attack": 1.25, "defense": 1.15, "agility": 1.2, "luck": 0.9},
         "psynergy": [],
         "requirements": {"earth": {"Rogue": {"earth": 2, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Knight": {
         "statsMultiplier": {"hp": 1.3, "pp": 0.95, "attack": 1.2, "defense": 1.1, "agility": 1.2, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 2, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Leader": {
         "statsMultiplier": {"hp": 1.8, "pp": 1.4, "attack": 1.5, "defense": 1.45, "agility": 1.5, "luck": 1},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Rogue": {"earth": 0, "fire": 4, "ice": 3, "wind": 0},
               "Warrior": {"earth": 0, "fire": 4, "ice": 3, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 3, "wind": 0},
               "Warrior": {"earth": 4, "fire": 0, "ice": 3, "wind": 0}
            }
         }
      },
      "Lord": {
         "statsMultiplier": {"hp": 1.7, "pp": 1.15, "attack": 1.4, "defense": 1.3, "agility": 1.4, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 6, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 1, "ice": 6, "wind": 0},
               "Warrior": {"earth": 0, "fire": 1, "ice": 6, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 0, "fire": 6, "ice": 1, "wind": 0},
               "Warrior": {"earth": 0, "fire": 6, "ice": 1, "wind": 0}
            }
         }
      },
      "Magician": {
         "statsMultiplier": {
            "hp": 1.05,
            "pp": 1.35,
            "attack": 0.95,
            "defense": 1,
            "agility": 1.35,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 2}}}
      },
      "Mariner": {
         "statsMultiplier": {
            "hp": 1.15,
            "pp": 0.9,
            "attack": 1.05,
            "defense": 1.05,
            "agility": 0.95,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Master Priestess": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.7,
            "attack": 0.9,
            "defense": 1.1,
            "agility": 1.4,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Monk": {
         "statsMultiplier": {"hp": 1, "pp": 1.3, "attack": 0.9, "defense": 0.95, "agility": 1.05, "luck": 1.1},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 1, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 5},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 5}
            }
         }
      },
      "Mystic Priestess": {
         "statsMultiplier": {
            "hp": 1.3,
            "pp": 1.8,
            "attack": 1,
            "defense": 1.2,
            "agility": 1.5,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 6, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Naturalist": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.35,
            "attack": 0.95,
            "defense": 1,
            "agility": 1.25,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 2, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 4}
            },
            "fire": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 4}
            }
         }
      },
      "Officiant": {
         "statsMultiplier": {
            "hp": 1.1,
            "pp": 1.35,
            "attack": 0.9,
            "defense": 1,
            "agility": 1.1,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "ice": 2, "wind": 0}}}
      },
      "Oracle": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.85,
            "attack": 1.3,
            "defense": 1.35,
            "agility": 1.65,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 7, "fire": 0, "ice": 2, "wind": 0}}}
      },
      "Outlaw": {
         "statsMultiplier": {"hp": 1.5, "pp": 1, "attack": 1.35, "defense": 1.25, "agility": 1.3, "luck": 0.9},
         "psynergy": [],
         "requirements": {"earth": {"Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Page": {
         "statsMultiplier": {"hp": 1, "pp": 1.1, "attack": 1.1, "defense": 1.1, "agility": 1.1, "luck": 1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 1},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 1}
            }
         }
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
               "Rogue": {"earth": 0, "fire": 4, "ice": 5, "wind": 0},
               "Warrior": {"earth": 0, "fire": 4, "ice": 5, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 5, "wind": 0},
               "Warrior": {"earth": 4, "fire": 0, "ice": 5, "wind": 0}
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
               "Rogue": {"earth": 1, "fire": 0, "ice": 6, "wind": 0},
               "Warrior": {"earth": 1, "fire": 0, "ice": 6, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 6, "fire": 0, "ice": 1, "wind": 0},
               "Warrior": {"earth": 6, "fire": 0, "ice": 1, "wind": 0}
            }
         }
      },
      "Phalanx": {
         "statsMultiplier": {"hp": 2, "pp": 1.2, "attack": 1.45, "defense": 1.5, "agility": 1.35, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 8, "ice": 0, "wind": 0}}}
      },
      "Pirate": {
         "statsMultiplier": {"hp": 1.1, "pp": 0.9, "attack": 1, "defense": 1, "agility": 0.9, "luck": 1.2},
         "psynergy": [],
         "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Pirate King": {
         "statsMultiplier": {
            "hp": 1.7,
            "pp": 1.2,
            "attack": 1.3,
            "defense": 1.3,
            "agility": 1.2,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"fire": {"Rogue": {"earth": 0, "fire": 6, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 2},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 2}
            }
         }
      },
      "Priestess": {
         "statsMultiplier": {
            "hp": 0.8,
            "pp": 1.5,
            "attack": 0.7,
            "defense": 0.9,
            "agility": 1.2,
            "luck": 1.2
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Privateer": {
         "statsMultiplier": {
            "hp": 1.35,
            "pp": 1,
            "attack": 1.15,
            "defense": 1.15,
            "agility": 1.05,
            "luck": 1
         }, "psynergy": [], "requirements": {"ice": {"Warrior": {"earth": 0, "fire": 0, "ice": 2, "wind": 0}}}
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
               "Rogue": {"earth": 2, "fire": 0, "ice": 7, "wind": 0},
               "Warrior": {"earth": 2, "fire": 0, "ice": 7, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 7, "fire": 0, "ice": 2, "wind": 0},
               "Warrior": {"earth": 7, "fire": 0, "ice": 2, "wind": 0}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 4}
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
               "Rogue": {"earth": 2, "fire": 0, "ice": 0, "wind": 7},
               "Warrior": {"earth": 2, "fire": 0, "ice": 0, "wind": 7}
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
               "Rogue": {"earth": 1, "fire": 0, "ice": 0, "wind": 6},
               "Warrior": {"earth": 1, "fire": 0, "ice": 0, "wind": 6}
            }
         }
      },
      "Pupil": {
         "statsMultiplier": {"hp": 1.2, "pp": 1.2, "attack": 1.2, "defense": 1.2, "agility": 1.2, "luck": 1},
         "psynergy": [],
         "requirements": {
            "fire": {
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 2},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 2}
            }
         }
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
            "ice": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 5}},
            "wind": {"Mage": {"earth": 4, "fire": 0, "ice": 5, "wind": 0}}
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
               "Rogue": {"earth": 0, "fire": 2, "ice": 7, "wind": 0},
               "Warrior": {"earth": 0, "fire": 2, "ice": 7, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 0, "fire": 7, "ice": 2, "wind": 0},
               "Warrior": {"earth": 0, "fire": 7, "ice": 2, "wind": 0}
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
         }, "psynergy": [], "requirements": {"earth": {"Mage": {"earth": 8, "fire": 0, "ice": 0, "wind": 0}}}
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
            "earth": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 3}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 3}}
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
               "Rogue": {"earth": 0, "fire": 3, "ice": 0, "wind": 3},
               "Warrior": {"earth": 0, "fire": 3, "ice": 0, "wind": 3}
            },
            "wind": {
               "Rogue": {"earth": 0, "fire": 3, "ice": 3, "wind": 0},
               "Warrior": {"earth": 0, "fire": 3, "ice": 3, "wind": 0}
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
            "ice": {"Mage": {"earth": 0, "fire": 0, "ice": 2, "wind": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 2}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 5, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 5, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 0, "fire": 5, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 5, "ice": 0, "wind": 0}
            }
         }
      },
      "Rogue": {
         "statsMultiplier": {"hp": 1.1, "pp": 0.8, "attack": 1.15, "defense": 1.05, "agility": 1.1, "luck": 0.9},
         "psynergy": [],
         "requirements": {"earth": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Ruffian": {
         "statsMultiplier": {"hp": 1.35, "pp": 1, "attack": 1.3, "defense": 1.2, "agility": 1.2, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Rogue": {"earth": 0, "fire": 2, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 2, "ice": 0, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 2, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 2, "fire": 0, "ice": 0, "wind": 0}
            }
         }
      },
      "Saint": {
         "statsMultiplier": {"hp": 1.45, "pp": 1.55, "attack": 1.1, "defense": 1.2, "agility": 1.3, "luck": 1.3},
         "psynergy": [],
         "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "ice": 6, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 3, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 3, "ice": 0, "wind": 4}
            },
            "wind": {
               "Rogue": {"earth": 0, "fire": 3, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 3, "ice": 4, "wind": 0}
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
               "Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 3},
               "Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 3}
            },
            "fire": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 3},
               "Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 3}
            }
         }
      },
      "Savage": {
         "statsMultiplier": {"hp": 1.55, "pp": 1.1, "attack": 1.4, "defense": 1.3, "agility": 1.3, "luck": 0.8},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 0}
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
            "ice": {"Mage": {"earth": 0, "fire": 0, "ice": 5, "wind": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 5}}
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
            "ice": {"Mage": {"earth": 0, "fire": 0, "ice": 4, "wind": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 4}}
         }
      },
      "Sea Lord": {
         "statsMultiplier": {"hp": 2, "pp": 1.4, "attack": 1.65, "defense": 1.5, "agility": 1.6, "luck": 0.9},
         "psynergy": [],
         "requirements": {
            "ice": {
               "Rogue": {"earth": 0, "fire": 0, "ice": 2, "wind": 7},
               "Warrior": {"earth": 0, "fire": 0, "ice": 2, "wind": 7}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 1},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 1}
            }
         }
      },
      "Seer": {
         "statsMultiplier": {"hp": 0.9, "pp": 1.3, "attack": 0.85, "defense": 0.9, "agility": 1.2, "luck": 1.1},
         "psynergy": [],
         "requirements": {"wind": {"Mage": {"earth": 1, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Shaman": {
         "statsMultiplier": {"hp": 1.7, "pp": 1.85, "attack": 1.3, "defense": 1.3, "agility": 1.6, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 4}},
            "wind": {"Mage": {"earth": 4, "fire": 0, "ice": 4, "wind": 0}}
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
               "Rogue": {"earth": 0, "fire": 3, "ice": 0, "wind": 3},
               "Warrior": {"earth": 0, "fire": 3, "ice": 0, "wind": 3}
            },
            "fire": {
               "Rogue": {"earth": 3, "fire": 0, "ice": 0, "wind": 3},
               "Warrior": {"earth": 3, "fire": 0, "ice": 0, "wind": 3}
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
               "Rogue": {"earth": 0, "fire": 5, "ice": 0, "wind": 4},
               "Warrior": {"earth": 0, "fire": 5, "ice": 0, "wind": 4}
            },
            "fire": {
               "Rogue": {"earth": 5, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 5, "fire": 0, "ice": 0, "wind": 4}
            }
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
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 5, "ice": 0, "wind": 0}}}
      },
      "Soldier": {
         "statsMultiplier": {
            "hp": 1.4,
            "pp": 0.9,
            "attack": 1.15,
            "defense": 1.2,
            "agility": 1.05,
            "luck": 1.1
         }, "psynergy": [], "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 2, "ice": 0, "wind": 0}}}
      },
      "Sorcerer": {
         "statsMultiplier": {
            "hp": 1.6,
            "pp": 1.65,
            "attack": 1.25,
            "defense": 1.3,
            "agility": 1.65,
            "luck": 1
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 8}}}
      },
      "Sovereign": {
         "statsMultiplier": {
            "hp": 1.9,
            "pp": 1.25,
            "attack": 1.5,
            "defense": 1.4,
            "agility": 1.5,
            "luck": 1
         }, "psynergy": [], "requirements": {"earth": {"Warrior": {"earth": 8, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 5},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 5}
            }
         }
      },
      "Squire": {
         "statsMultiplier": {"hp": 1.1, "pp": 0.85, "attack": 1.1, "defense": 1, "agility": 1.1, "luck": 1},
         "psynergy": [],
         "requirements": {"earth": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 1, "ice": 0, "wind": 6},
               "Warrior": {"earth": 0, "fire": 1, "ice": 0, "wind": 6}
            }
         }
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
               "Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 4},
               "Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 4}
            },
            "wind": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 4, "wind": 0},
               "Warrior": {"earth": 4, "fire": 0, "ice": 4, "wind": 0}
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
            "ice": {"Mage": {"earth": 0, "fire": 0, "ice": 1, "wind": 0}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 1}}
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
               "Rogue": {"earth": 0, "fire": 2, "ice": 0, "wind": 7},
               "Warrior": {"earth": 0, "fire": 2, "ice": 0, "wind": 7}
            }
         }
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 1, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 1, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 1, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 1, "fire": 0, "ice": 0, "wind": 0}
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
               "Rogue": {"earth": 0, "fire": 4, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 4, "ice": 4, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 4, "wind": 0},
               "Warrior": {"earth": 4, "fire": 0, "ice": 4, "wind": 0}
            }
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
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 6, "fire": 0, "ice": 1, "wind": 0}}}
      },
      "Therapist": {
         "statsMultiplier": {
            "hp": 1.25,
            "pp": 1.5,
            "attack": 1.05,
            "defense": 1.1,
            "agility": 1.35,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 4, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 4, "fire": 0, "ice": 0, "wind": 0},
               "Warrior": {"earth": 4, "fire": 0, "ice": 0, "wind": 0}
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
            "earth": {"Mage": {"earth": 0, "fire": 4, "ice": 5, "wind": 0}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "ice": 5, "wind": 0}}
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
            "earth": {"Mage": {"earth": 0, "fire": 4, "ice": 4, "wind": 0}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "ice": 4, "wind": 0}}
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
         }, "psynergy": [], "requirements": {"earth": {"Rogue": {"earth": 6, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 0, "ice": 4, "wind": 0}
            },
            "ice": {
               "Rogue": {"earth": 0, "fire": 4, "ice": 0, "wind": 0},
               "Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 0}
            }
         }
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
            "earth": {"Mage": {"earth": 0, "fire": 4, "ice": 0, "wind": 3}},
            "fire": {"Mage": {"earth": 4, "fire": 0, "ice": 0, "wind": 3}}
         }
      },
      "Warlord": {
         "statsMultiplier": {"hp": 2, "pp": 1.5, "attack": 1.6, "defense": 1.55, "agility": 1.6, "luck": 1},
         "psynergy": [],
         "requirements": {
            "earth": {
               "Rogue": {"earth": 0, "fire": 5, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 5, "ice": 4, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 0, "fire": 5, "ice": 4, "wind": 0},
               "Warrior": {"earth": 0, "fire": 5, "ice": 4, "wind": 0}
            }
         }
      },
      "Warrior": {
         "statsMultiplier": {"hp": 1.6, "pp": 1, "attack": 1.25, "defense": 1.3, "agility": 1.15, "luck": 1.1},
         "psynergy": [],
         "requirements": {"fire": {"Warrior": {"earth": 0, "fire": 4, "ice": 0, "wind": 0}}}
      },
      "Water User": {
         "statsMultiplier": {
            "hp": 0.95,
            "pp": 1.25,
            "attack": 0.8,
            "defense": 0.9,
            "agility": 1,
            "luck": 1.3
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 5},
               "Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 5}
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
               "Rogue": {"earth": 0, "fire": 3, "ice": 3, "wind": 0},
               "Warrior": {"earth": 0, "fire": 3, "ice": 3, "wind": 0}
            },
            "fire": {
               "Rogue": {"earth": 3, "fire": 0, "ice": 3, "wind": 0},
               "Warrior": {"earth": 3, "fire": 0, "ice": 3, "wind": 0}
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
            "ice": {"Mage": {"earth": 3, "fire": 0, "ice": 0, "wind": 4}},
            "wind": {"Mage": {"earth": 3, "fire": 0, "ice": 4, "wind": 0}}
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
            "ice": {"Mage": {"earth": 0, "fire": 3, "ice": 0, "wind": 3}},
            "wind": {"Mage": {"earth": 0, "fire": 3, "ice": 3, "wind": 0}}
         }
      },
      "Wind Rogue 1": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Wind Rogue 2": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 2}}}
      },
      "Wind Rogue 3": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 4}}}
      },
      "Wind Rogue 4": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 6}}}
      },
      "Wind Rogue 5": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Rogue": {"earth": 0, "fire": 0, "ice": 0, "wind": 8}}}
      },
      "Wind Warrior 1": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 0}}}
      },
      "Wind Warrior 2": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 2}}}
      },
      "Wind Warrior 3": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 4}}}
      },
      "Wind Warrior 4": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 6}}}
      },
      "Wind Warrior 5": {
         "statsMultiplier": {"hp": 1, "pp": 1, "attack": 1, "defense": 1, "agility": 1, "luck": 1},
         "psynergy": [],
         "requirements": {"wind": {"Warrior": {"earth": 0, "fire": 0, "ice": 0, "wind": 8}}}
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
               "Rogue": {"earth": 0, "fire": 0, "ice": 1, "wind": 6},
               "Warrior": {"earth": 0, "fire": 0, "ice": 1, "wind": 6}
            }
         }
      },
      "Wise": {
         "statsMultiplier": {"hp": 1.5, "pp": 1.75, "attack": 1.2, "defense": 1.25, "agility": 1.55, "luck": 1.1},
         "psynergy": [],
         "requirements": {
            "ice": {"Mage": {"earth": 0, "fire": 0, "ice": 6, "wind": 1}},
            "wind": {"Mage": {"earth": 0, "fire": 0, "ice": 1, "wind": 6}}
         }
      },
      "Witch": {
         "statsMultiplier": {"hp": 1.15, "pp": 1.3, "attack": 1, "defense": 1.05, "agility": 1.25, "luck": 0.9},
         "psynergy": [],
         "requirements": {"fire": {"Mage": {"earth": 0, "fire": 2, "ice": 0, "wind": 0}}}
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
            "ice": {"Mage": {"earth": 5, "fire": 0, "ice": 0, "wind": 4}},
            "wind": {"Mage": {"earth": 5, "fire": 0, "ice": 4, "wind": 0}}
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
         }, "psynergy": [], "requirements": {"ice": {"Mage": {"earth": 0, "fire": 2, "ice": 0, "wind": 0}}}
      },
      "Zealot": {
         "statsMultiplier": {
            "hp": 1.35,
            "pp": 1.7,
            "attack": 1.2,
            "defense": 1.15,
            "agility": 1.45,
            "luck": 0.8
         }, "psynergy": [], "requirements": {"wind": {"Mage": {"earth": 0, "fire": 5, "ice": 0, "wind": 0}}}
      }
   },
   djinn: {
      "Aroma": {
         "element": "wind",
         "description": "Restore everyone's PP.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Balm": {
         "element": "ice",
         "description": "Revive all downed allies.",
         "statsAddend": {"hp": 13, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Blitz": {
         "element": "wind",
         "description": "Numb a foe with a lightning strike.",
         "statsAddend": {"hp": 10, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Breath": {
         "element": "wind",
         "description": "Restore HP quickly.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 4, "luck": 0}
      },
      "Cannon": {
         "element": "fire",
         "description": "Strike with the power of Mars.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Char": {
         "element": "fire",
         "description": "Paralyze foes with a strong blow.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 2, "defense": 0, "agility": 2, "luck": 1}
      },
      "Chill": {
         "element": "ice",
         "description": "Strike to reduce a foe's defense.",
         "statsAddend": {"hp": 10, "pp": 3, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Coal": {
         "element": "fire",
         "description": "Rally your allies to boost Agility.",
         "statsAddend": {"hp": 11, "pp": 3, "attack": 0, "defense": 0, "agility": 3, "luck": 0}
      },
      "Core": {
         "element": "fire",
         "description": "Strike through an enemy's Defense.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 0}
      },
      "Crystal": {
         "element": "earth",
         "description": "Restore HP to all allies.",
         "statsAddend": {"hp": 10, "pp": 5, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Echo": {
         "element": "earth",
         "description": "Attack with a double strike.",
         "statsAddend": {"hp": 9, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Eddy": {
         "element": "ice",
         "description": "Speed up Djinn recovery time.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Ether": {
         "element": "wind",
         "description": "Focus will to restore PP.",
         "statsAddend": {"hp": 8, "pp": 4, "attack": 0, "defense": 0, "agility": 3, "luck": 2}
      },
      "Flower": {
         "element": "earth",
         "description": "Refresh allies and restore HP.",
         "statsAddend": {"hp": 12, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Fog": {
         "element": "ice",
         "description": "Blind an enemy with fog.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 2, "agility": 2, "luck": 1}
      },
      "Fugue": {
         "element": "fire",
         "description": "Fatigue your foes to drop their PP.",
         "statsAddend": {"hp": 11, "pp": 4, "attack": 0, "defense": 2, "agility": 0, "luck": 0}
      },
      "Fury": {
         "element": "fire",
         "description": "Call forth wandering souls to attack.",
         "statsAddend": {"hp": 12, "pp": 4, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Gale": {
         "element": "wind",
         "description": "Blast enemies with a wind strike.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 0, "defense": 0, "agility": 5, "luck": 3}
      },
      "Gasp": {
         "element": "wind",
         "description": "Call the Grim Reaper on your foes.",
         "statsAddend": {"hp": 12, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Gel": {
         "element": "ice",
         "description": "Weaken a foe's Attack.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 5, "defense": 0, "agility": 2, "luck": 0}
      },
      "Geode": {
         "element": "earth",
         "description": "Strike with a clod of earth.",
         "statsAddend": {"hp": 12, "pp": 0, "attack": 6, "defense": 0, "agility": 0, "luck": 0}
      },
      "Haze": {
         "element": "wind",
         "description": "Hide away to avoid damage.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 0, "defense": 2, "agility": 3, "luck": 2}
      },
      "Iron": {
         "element": "earth",
         "description": "Bolster the party's Defense.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 2, "agility": 3, "luck": 0}
      },
      "Kindle": {
         "element": "fire",
         "description": "Increase all allies' Attack.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 5, "defense": 0, "agility": 0, "luck": 1}
      },
      "Lull": {
         "element": "wind",
         "description": "Negotiate a temporary cease-fire.",
         "statsAddend": {"hp": 11, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Meld": {
         "element": "earth",
         "description": "Launch a powerful team strike.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 0, "agility": 4, "luck": 1}
      },
      "Mold": {
         "element": "earth",
         "description": "Strike a foe.",
         "statsAddend": {"hp": 8, "pp": 0, "attack": 4, "defense": 0, "agility": 2, "luck": 1}
      },
      "Mud": {
         "element": "earth",
         "description": "Slow a foe with sticky mud.",
         "statsAddend": {"hp": 10, "pp": 4, "attack": 0, "defense": 0, "agility": 3, "luck": 0}
      },
      "Petra": {
         "element": "earth",
         "description": "Turn a foe to stone.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 0}
      },
      "Reflux": {
         "element": "fire",
         "description": "Counter an enemy's attack.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 2}
      },
      "Rime": {
         "element": "ice",
         "description": "Seal a foe's Psynergy.",
         "statsAddend": {"hp": 10, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Salt": {
         "element": "earth",
         "description": "Restore allies' status to normal.",
         "statsAddend": {"hp": 9, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 1}
      },
      "Serac": {
         "element": "ice",
         "description": "Strike a chilling finishing blow.",
         "statsAddend": {"hp": 12, "pp": 0, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Shade": {
         "element": "ice",
         "description": "Create a watery shield.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 0, "defense": 3, "agility": 0, "luck": 2}
      },
      "Shine": {
         "element": "fire",
         "description": "Dazzle foes and strike decisively.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 3, "defense": 3, "agility": 2, "luck": 0}
      },
      "Sour": {
         "element": "ice",
         "description": "Reduce a foe's resistance.",
         "statsAddend": {"hp": 8, "pp": 4, "attack": 3, "defense": 0, "agility": 0, "luck": 0}
      },
      "Spark": {
         "element": "fire",
         "description": "Revive an ally with cheers of support.",
         "statsAddend": {"hp": 11, "pp": 6, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Spring": {
         "element": "ice",
         "description": "Restore HP with healing herbs.",
         "statsAddend": {"hp": 11, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Steam": {
         "element": "ice",
         "description": "Increase all allies' Elemental strength.",
         "statsAddend": {"hp": 10, "pp": 0, "attack": 5, "defense": 0, "agility": 0, "luck": 0}
      },
      "Steel": {
         "element": "earth",
         "description": "Siphon a foe's HP with a kiss.",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 1}
      },
      "Tinder": {
         "element": "fire",
         "description": "Revive a downed ally.",
         "statsAddend": {"hp": 12, "pp": 5, "attack": 0, "defense": 0, "agility": 0, "luck": 0}
      },
      "Waft": {
         "element": "wind",
         "description": "Calm a foe with soothing scents.",
         "statsAddend": {"hp": 11, "pp": 0, "attack": 4, "defense": 0, "agility": 0, "luck": 0}
      },
      "Wheeze": {
         "element": "wind",
         "description": "Poison a foe as you strike.",
         "statsAddend": {"hp": 9, "pp": 3, "attack": 5, "defense": 0, "agility": 0, "luck": 0}
      },
      "Whorl": {
         "element": "wind",
         "description": "Take a deep breath, and strike!",
         "statsAddend": {"hp": 9, "pp": 0, "attack": 4, "defense": 2, "agility": 0, "luck": 0}
      }
   },
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
   equipment: {
      'Ixion Mail': {
         description: 'Armor: Resists Wind & Water',
         statsAddend: {hp: 0, pp: 0, attack: 0, defense: 26, agility: 0, luck: 0}
      }
   },
   //this is the correct spelling from the video game (not Psy Energy even though it is "Psychic energy")
   psynergy: {
      "Cure": {"description": "Restore 70 HP."},
      "Cure Well": {"description": "Restore 150 HP."},
      "Earthquake": {"description": "Attack with a mighty tremor."},
      "Gaia": {"description": "Attack with the earth's might."},
      "Quake": {"description": "Attack with a powerful quake."},
      "Spire": {"description": "Attack with earthen spire."}
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
