export const pnt1SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Enter and exit the water safely with tot", id: 1 },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Readiness for submersion", id: 2 },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Hold tot on front, eye contact",
        mustSee: [
          "Have a horizontal body position relaxed at the surface"
        ],
        id: 3 
      },
      { 
        skill: "Hold tot on back, head and back support",
        mustSee: [
          "Have a horizontal body position by trying to put your ears in the water"
        ],
        id: 4 
      },
      { 
        skill: "Front float (face out) – assisted",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are at top of the water and out like a star",
          "Try to blow your bubbles",
          "Have a horizontal body position relaxed at the surface"
        ],
        id: 5 
      },
      { 
        skill: "Back float (assisted)",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are straight and touching at the top of the water",
          "Have a horizontal body position by putting your ears in the water"
        ],
        id: 6 
      },
      { 
        skill: "Float wearing lifejacket (assisted)",
        id: 7 
      },
      { 
        skill: "Arms: splashing, reaching, paddling on front and back",
        id: 8 
      },
      { 
        skill: "Legs: tickling, splashing, kicking on front and back",
        id: 9 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Within Arms' Reach", id: 10 },
      { skill: "Wear a Lifejacket", id: 11 },
      { skill: "Swim to Survive", id: 12 },
    ]
  }
];

export const pnt1Skills = pnt1SkillGroups.flatMap(group => group.skills);

// Parent & Tot 1 checkboxes
export const pnt1CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 546 },    // Enter and exit the water safely with tot
  
  // Underwater Skills
  { id: 2, x: 19, y: 498 },    // Readiness for submersion
  
  // Movement / Swimming Skills
  { id: 3, x: 19, y: 462 },    // Hold tot on front, eye contact
  { id: 4, x: 19, y: 449 },    // Hold tot on back, head and back support
  { id: 5, x: 19, y: 422 },    // Front float (face out) – assisted
  { id: 6, x: 19, y: 408 },    // Back float (assisted)
  { id: 7, x: 19, y: 395 },    // Float wearing lifejacket (assisted)
  { id: 8, x: 19, y: 382 },    // Arms: splashing, reaching, paddling on front and back
  { id: 9, x: 19, y: 355 },    // Legs: tickling, splashing, kicking on front and back
  
  // Water Smart® Education
  { id: 10, x: 19, y: 307},   // Within Arms' Reach
  { id: 11, x: 19, y: 293},   // Wear a Lifejacket
  { id: 12, x: 19, y: 280},   // Swim to Survive
];

// Parent & Tot 1 highlight positions
export const pnt1HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 530, width: 165, height: 22 },   // Enter and exit the water safely with tot (2 lines)
  
  // Underwater Skills
  { id: 2, x: 19, y: 498, width: 165, height: 10 },   // Readiness for submersion
  
  // Movement / Swimming Skills
  { id: 3, x: 19, y: 462, width: 165, height: 10 },   // Hold tot on front, eye contact
  { id: 4, x: 19, y: 435, width: 165, height: 22 },   // Hold tot on back, head and back support (2 lines)
  { id: 5, x: 19, y: 422, width: 165, height: 10 },   // Front float (face out) – assisted
  { id: 6, x: 19, y: 408, width: 165, height: 10 },   // Back float (assisted)
  { id: 7, x: 19, y: 395, width: 165, height: 10 },   // Float wearing lifejacket (assisted)
  { id: 8, x: 19, y: 370, width: 165, height: 22 },   // Arms: splashing, reaching, paddling on front and back (2 lines)
  { id: 9, x: 19, y: 345, width: 165, height: 22 },   // Legs: tickling, splashing, kicking on front and back (3 lines)
  
  // Water Smart® Education
  { id: 10, x: 19, y: 307, width: 165, height: 10 },  // Within Arms' Reach
  { id: 11, x: 19, y: 293, width: 165, height: 10 },  // Wear a Lifejacket
  { id: 12, x: 19, y: 280, width: 165, height: 10 },  // Swim to Survive
];