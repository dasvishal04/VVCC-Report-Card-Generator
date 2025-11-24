export const preschool1SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Enter and exit shallow water (assisted)", id: 1 },
      { skill: "Jump into chest-deep water (assisted)", id: 2 },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Face in water", id: 3 },
      { skill: "Blow bubbles in water", id: 4 },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Float on front (3 sec.) assisted",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "You are encouraged to practice putting your whole face in the water and blow bubbles",
          "Have a relaxed horizontal body position at the surface"
        ],
        id: 5 
      },
      { 
        skill: "Float on back (3 sec.) assisted",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are straight and at the top of the water",
          "Have a relaxed horizontal body position by putting your ears in the water"
        ],
        id: 6 
      },
      { 
        skill: "Safe movement in shallow water wearing lifejacket",
        id: 7 
      },
      { 
        skill: "Glide on front (3 m) assisted",
        mustSee: [
          "Make sure your legs are straight and at the top of the water",
          "You are encouraged to practice putting your whole face in the water and blow bubbles",
          "Have a streamlined body position by having your arms extended beyond your head"
        ],
        id: 8 
      },
      { 
        skill: "Glide on back (3 m) assisted",
        mustSee: [
          "Make sure your legs are straight and at the top of the water",
          "Have a streamlined body position by making sure your ears are in the water and your arms are by side"
        ],
        id: 9 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Within Arms' Reach", id: 10 },
      { skill: "Wear a Lifejacket", id: 11 },
    ]
  }
];

export const preschool1Skills = preschool1SkillGroups.flatMap(group => group.skills);

// Preschool 1 checkboxes
export const preschool1CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 547 },    // Enter and exit shallow water (assisted)
  { id: 2, x: 19, y: 536 },    // Jump into chest-deep water (assisted)
  
  // Underwater Skills
  { id: 3, x: 19, y: 509 },    // Face in water
  { id: 4, x: 19, y: 497 },    // Blow bubbles in water
  
  // Movement / Swimming Skills
  { id: 5, x: 19, y: 471 },    // Float on front (3 sec.) assisted
  { id: 6, x: 19, y: 459 },    // Float on back (3 sec.) assisted
  { id: 7, x: 19, y: 447 },    // Safe movement in shallow water wearing lifejacket
  { id: 8, x: 19, y: 425 },    // Glide on front (3 m) assisted
  { id: 9, x: 19, y: 413 },    // Glide on back (3 m) assisted
  
  // Water Smart® Education
  { id: 10, x: 19, y: 386 },   // Within Arms' Reach
  { id: 11, x: 19, y: 374 },   // Wear a Lifejacket
];

// Preschool 1 highlight positions
export const preschool1HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 547, width: 165, height: 10 },   // Enter and exit shallow water (assisted)
  { id: 2, x: 19, y: 536, width: 165, height: 10 },   // Jump into chest-deep water (assisted)
  
  // Underwater Skills
  { id: 3, x: 19, y: 509, width: 165, height: 10 },   // Face in water
  { id: 4, x: 19, y: 497, width: 165, height: 10 },   // Blow bubbles in water
  
  // Movement / Swimming Skills
  { id: 5, x: 19, y: 471, width: 165, height: 10 },   // Float on front (3 sec.) assisted
  { id: 6, x: 19, y: 459, width: 165, height: 10 },   // Float on back (3 sec.) assisted
  { id: 7, x: 19, y: 437, width: 165, height: 22 },   // Safe movement in shallow water wearing lifejacket (2 lines)
  { id: 8, x: 19, y: 425, width: 165, height: 10 },   // Glide on front (3 m) assisted
  { id: 9, x: 19, y: 413, width: 165, height: 10 },   // Glide on back (3 m) assisted
  
  // Water Smart® Education
  { id: 10, x: 19, y: 386, width: 165, height: 10 },  // Within Arms' Reach
  { id: 11, x: 19, y: 374, width: 165, height: 10 },  // Wear a Lifejacket
];