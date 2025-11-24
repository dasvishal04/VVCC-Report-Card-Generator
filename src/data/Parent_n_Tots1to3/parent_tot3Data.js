export const pnt3SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Jump entry (assisted)", id: 1 },
      { skill: "Entry and submerge from sitting position (assisted)", id: 2 },
      { skill: "Exit the water (unassisted)", id: 3 },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Hold breath underwater (assisted)", id: 4 },
      { skill: "Attempt to open eyes underwater", id: 5 },
      { skill: "Attempt to recover object from bottom", id: 6 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Standing jump entry, return to edge (assisted)",
        id: 7 
      },
      { 
        skill: "Jump entry and float wearing lifejacket (assisted)",
        id: 8 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Front \"starfish\" float (assisted)",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are at top of the water and out like a star",
          "On Front: Have a horizontal body position relaxed at the surface"
        ],
        id: 9 
      },
      { 
        skill: "Back \"starfish\" float (assisted)",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are at top of the water and out like a star",
          "On Back: Have a horizontal body position by putting your ears in the water"
        ],
        id: 10 
      },
      { 
        skill: "Front \"pencil\" float (assisted)",
        mustSee: [
          "Make sure your arms are at the top of the water by your side",
          "Make sure your legs are straight and together at the top of the water",
          "On Front: Try to put your face in the water and blow bubbles",
          "On Front: Have a horizontal body position relaxed at the surface"
        ],
        id: 11 
      },
      { 
        skill: "Back \"pencil\" float (assisted)",
        mustSee: [
          "Make sure your arms are at the top of the water by your side",
          "Make sure your legs are straight and together at the top of the water",
          "On Back: Have a horizontal body position by putting your ears in the water"
        ],
        id: 12 
      },
      { 
        skill: "Kicking on front (assisted)",
        mustSee: [
          "Make sure your legs are alternating for your flutter kick",
          "Have a streamlined body position by making sure your face is in the water with your arms extended beyond your head"
        ],
        id: 13 
      },
      { 
        skill: "Kicking on back (assisted)",
        mustSee: [
          "Make sure your legs are alternating for your flutter kick",
          "Have a streamlined body position by making sure your ears are in the water and your arms are by your side"
        ],
        id: 14 
      },
      { 
        skill: "Underwater passes",
        id: 15 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Within Arms' Reach", id: 16 },
      { skill: "Wear a Lifejacket", id: 17 },
      { skill: "Swim to Survive", id: 18 },
    ]
  }
];

export const pnt3Skills = pnt3SkillGroups.flatMap(group => group.skills);

// Parent & Tot 3 checkboxes
export const pnt3CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 414, y: 546 },   // Jump entry (assisted)
  { id: 2, x: 414, y: 532 },   // Entry and submerge from sitting position (assisted)
  { id: 3, x: 414, y: 506 },   // Exit the water (unassisted)
  
  // Underwater Skills
  { id: 4, x: 414, y: 471 },   // Hold breath underwater (assisted)
  { id: 5, x: 414, y: 457 },   // Attempt to open eyes underwater
  { id: 6, x: 414, y: 444 },   // Attempt to recover object from bottom
  
  // Swim to Survive® Skills
  { id: 7, x: 414, y: 395 },   // Standing jump entry, return to edge (assisted)
  { id: 8, x: 414, y: 369 },   // Jump entry and float wearing lifejacket (assisted)
  
  // Movement / Swimming Skills
  { id: 9, x: 414, y: 321 },   // Front "starfish" float (assisted)
  { id: 10, x: 414, y: 306 },  // Back "starfish" float (assisted)
  { id: 11, x: 414, y: 294 },  // Front "pencil" float (assisted)
  { id: 12, x: 414, y: 281 },  // Back "pencil" float (assisted)
  { id: 13, x: 414, y: 267 },  // Kicking on front (assisted)
  { id: 14, x: 414, y: 254 },  // Kicking on back (assisted)
  { id: 15, x: 414, y: 242 },  // Underwater passes
  
  // Water Smart® Education
  { id: 16, x: 414, y: 206 },  // Within Arms' Reach
  { id: 17, x: 414, y: 192 },  // Wear a Lifejacket
  { id: 18, x: 414, y: 179 },  // Swim to Survive
];

// Parent & Tot 3 highlight positions
export const pnt3HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 414, y: 546, width: 165, height: 10 },  // Jump entry (assisted)
  { id: 2, x: 414, y: 520, width: 165, height: 22 },  // Entry and submerge from sitting position (assisted) (2 lines)
  { id: 3, x: 414, y: 506, width: 165, height: 10 },  // Exit the water (unassisted)
  
  // Underwater Skills
  { id: 4, x: 414, y: 471, width: 165, height: 10 },  // Hold breath underwater (assisted)
  { id: 5, x: 414, y: 457, width: 165, height: 10 },  // Attempt to open eyes underwater
  { id: 6, x: 414, y: 432, width: 165, height: 22 },  // Attempt to recover object from bottom (2 lines)
  
  // Swim to Survive® Skills
  { id: 7, x: 414, y: 383, width: 165, height: 22 },  // Standing jump entry, return to edge (assisted) (2 lines)
  { id: 8, x: 414, y: 357, width: 165, height: 22 },  // Jump entry and float wearing lifejacket (assisted) (2 lines)
  
  // Movement / Swimming Skills
  { id: 9, x: 414, y: 321, width: 165, height: 10 },  // Front "starfish" float (assisted)
  { id: 10, x: 414, y: 306, width: 165, height: 10 }, // Back "starfish" float (assisted)
  { id: 11, x: 414, y: 294, width: 165, height: 10 }, // Front "pencil" float (assisted)
  { id: 12, x: 414, y: 281, width: 165, height: 10 }, // Back "pencil" float (assisted)
  { id: 13, x: 414, y: 267, width: 165, height: 10 }, // Kicking on front (assisted)
  { id: 14, x: 414, y: 254, width: 165, height: 10 }, // Kicking on back (assisted)
  { id: 15, x: 414, y: 242, width: 165, height: 10 }, // Underwater passes
  
  // Water Smart® Education
  { id: 16, x: 414, y: 206, width: 165, height: 10 }, // Within Arms' Reach
  { id: 17, x: 414, y: 192, width: 165, height: 10 }, // Wear a Lifejacket
  { id: 18, x: 414, y: 179, width: 165, height: 10 }, // Swim to Survive
];