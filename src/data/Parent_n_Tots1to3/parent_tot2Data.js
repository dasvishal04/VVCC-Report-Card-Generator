export const pnt2SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Entry from sitting position (assisted)", id: 1 },
      { skill: "Exit the water (assisted)", id: 2 },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Blow bubbles on and in water", id: 3 },
      { skill: "Face wet and in water", id: 4 },
      { skill: "Attempt to recover object below surface", id: 5 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Entry from sitting position wearing lifejacket and return (assisted)",
        id: 6 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Front float (face in) – assisted",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are at top of the water and out like a star",
          "Try to put your face in the water and blow bubbles",
          "Have a horizontal body position relaxed at the surface"
        ],
        id: 7 
      },
      { 
        skill: "Back float (assisted)",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are straight and touching at the top of the water",
          "Have a horizontal body position by putting your ears in the water"
        ],
        id: 8 
      },
      { 
        skill: "Kicking on front (assisted)",
        id: 9 
      },
      { 
        skill: "Kicking on back (assisted)",
        id: 10 
      },
      { 
        skill: "Surface passes with continuous contact",
        mustSee: [
          "Make sure your legs are alternating for your flutter kick",
          "On Front: Try to put your face in the water and blow bubbles, have a streamlined body position by making sure your face is in the water with your arms extended beyond your head",
          "On Back: Make sure your ears are in the water and your arms are by your side"
        ],
        id: 11 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Within Arms' Reach", id: 12 },
      { skill: "Wear a Lifejacket", id: 13 },
      { skill: "Swim to Survive", id: 14 },
    ]
  }
];

export const pnt2Skills = pnt2SkillGroups.flatMap(group => group.skills);

// Parent & Tot 2 checkboxes
export const pnt2CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 216, y: 545 },   // Entry from sitting position (assisted)
  { id: 2, x: 216, y: 519 },   // Exit the water (assisted)
  
  // Underwater Skills
  { id: 3, x: 216, y: 484 },   // Blow bubbles on and in water
  { id: 4, x: 216, y: 470 },   // Face wet and in water
  { id: 5, x: 216, y: 458 },   // Attempt to recover object below surface
  
  // Swim to Survive® Skills
  { id: 6, x: 216, y: 409 },   // Entry from sitting position wearing lifejacket and return (assisted)
  
  // Movement / Swimming Skills
  { id: 7, x: 216, y: 359 },   // Front float (face in) – assisted
  { id: 8, x: 216, y: 346 },   // Back float (assisted)
  { id: 9, x: 216, y: 334 },   // Kicking on front (assisted)
  { id: 10, x: 216, y: 320 },  // Kicking on back (assisted)
  { id: 11, x: 216, y: 306 },  // Surface passes with continuous contact
  
  // Water Smart® Education
  { id: 12, x: 216, y: 258 },  // Within Arms' Reach
  { id: 13, x: 216, y: 245 },  // Wear a Lifejacket
  { id: 14, x: 216, y: 232 },  // Swim to Survive
];

// Parent & Tot 2 highlight positions
export const pnt2HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 215, y: 535, width: 165, height: 22 },  // Entry from sitting position (assisted) (2 lines)
  { id: 2, x: 215, y: 520, width: 165, height: 10 },  // Exit the water (assisted)
  
  // Underwater Skills
  { id: 3, x: 215, y: 486, width: 165, height: 10 },  // Blow bubbles on and in water
  { id: 4, x: 215, y: 474, width: 165, height: 10 },  // Face wet and in water
  { id: 5, x: 215, y: 447, width: 165, height: 22 },  // Attempt to recover object below surface (2 lines)
  
  // Swim to Survive® Skills
  { id: 6, x: 215, y: 397, width: 165, height: 24 },  // Entry from sitting position wearing lifejacket and return (assisted) (3 lines)
  
  // Movement / Swimming Skills
  { id: 7, x: 215, y: 360, width: 165, height: 10 },  // Front float (face in) – assisted
  { id: 8, x: 215, y: 348, width: 165, height: 10 },  // Back float (assisted)
  { id: 9, x: 215, y: 336, width: 165, height: 10 },  // Kicking on front (assisted)
  { id: 10, x: 215, y: 324, width: 165, height: 10 }, // Kicking on back (assisted)
  { id: 11, x: 215, y: 295, width: 165, height: 22 }, // Surface passes with continuous contact (2 lines)
  
  // Water Smart® Education
  { id: 12, x: 215, y: 249, width: 165, height: 10 }, // Within Arms' Reach
  { id: 13, x: 215, y: 237, width: 165, height: 10 }, // Wear a Lifejacket
  { id: 14, x: 215, y: 228, width: 165, height: 10 }, // Swim to Survive
];