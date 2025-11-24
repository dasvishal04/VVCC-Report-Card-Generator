export const preschool3SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Jump into deep water wearing lifejacket, return and exit", id: 1 },
      { skill: "Sideways entry wearing lifejacket", id: 2 },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Hold breath underwater 3 sec.", id: 3 },
      { skill: "Submerge and exhale 5 times", id: 4 },
      { skill: "Recover object from bottom in waist-deep water", id: 5 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Back float, roll to front, swim 3 m",
        id: 6 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Float on front 5 sec.",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are straight and at the top of the water",
          "Ensure your whole face in the water and blow bubbles",
          "Make sure to put your whole face in the water and your body is at the surface in a star position"
        ],
        id: 7 
      },
      { 
        skill: "Float on back 5 sec.",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are straight and at the top of the water",
          "Ensure your ears are in the water and your whole body is near the surface of the water"
        ],
        id: 8 
      },
      { 
        skill: "Roll laterally front to back and back to front",
        mustSee: [
          "When rolling onto your back make sure your tummy is at the top of the water right away",
          "When rolling onto your front, make sure you put your whole face in the water and blow bubbles",
          "Make sure your body stays horizontal"
        ],
        id: 9 
      },
      { 
        skill: "Glide on front 3 m",
        mustSee: [
          "Make sure your legs are straight and together at the top of the water",
          "Make sure you put your entire face in the water and blow bubbles",
          "Have a streamlined body position by having your arms extended beyond your head"
        ],
        id: 10 
      },
      { 
        skill: "Glide on back 3 m",
        mustSee: [
          "Make sure your arms are at your side",
          "Make sure your legs are straight and touching at the top of the water",
          "Ensure your ears are in the water and your whole body is near the surface of the water"
        ],
        id: 11 
      },
      { 
        skill: "Flutter kick on front 5 m",
        mustSee: [
          "Ensure that your legs are always kicking up and down continuously",
          "Ensure that your entire face is in the water blowing bubbles",
          "Ensure your arms are extended beyond your head, kicking up and down at the surface of the water to maintain a streamlined body position"
        ],
        id: 12 
      },
      { 
        skill: "Flutter kick on back 5 m",
        mustSee: [
          "Ensure that your legs are always kicking up and down continuously",
          "Ensure your ears are in the water, tummy up, and you are kicking up and down at the surface of the water to maintain a streamlined body position"
        ],
        id: 13 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Within Arms' Reach", id: 14 },
      { skill: "Wear a Lifejacket", id: 15 },
    ]
  }
];

export const preschool3Skills = preschool3SkillGroups.flatMap(group => group.skills);

// Preschool 3 checkboxes
export const preschool3CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 71 },   // Jump into deep water wearing lifejacket, return and exit
  { id: 2, x: 19, y: 48 },   // Sideways entry wearing lifejacket
  
  // Underwater Skills
  { id: 3, x: 217, y: 549 },   // Hold breath underwater 3 sec.
  { id: 4, x: 217, y: 536 },   // Submerge and exhale 5 times
  { id: 5, x: 217, y: 524 },   // Recover object from bottom in waist-deep water
  
  // Swim to Survive® Skills
  { id: 6, x: 217, y: 486 },   // Back float, roll to front, swim 3 m
  
  // Movement / Swimming Skills
  { id: 7, x: 217, y: 459 },   // Float on front 5 sec.
  { id: 8, x: 217, y: 447 },   // Float on back 5 sec.
  { id: 9, x: 217, y: 435},   // Roll laterally front to back and back to front
  { id: 10, x: 217, y: 413 },  // Glide on front 3 m
  { id: 11, x: 217, y: 402 },  // Glide on back 3 m
  { id: 12, x: 217, y: 390 },  // Flutter kick on front 5 m
  { id: 13, x: 217, y: 379 },  // Flutter kick on back 5 m
  
  // Water Smart® Education
  { id: 14, x: 217, y: 352 },  // Within Arms' Reach
  { id: 15, x: 217, y: 340 },  // Wear a Lifejacket
];

// Preschool 3 highlight positions
export const preschool3HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 61, width: 165, height: 22 },   // Jump into deep water wearing lifejacket, return and exit
  { id: 2, x: 19, y: 48, width: 165, height: 10 },   // Sideways entry wearing lifejacket
  
  // Underwater Skills
  { id: 3, x: 217, y: 549, width: 165, height: 10 },   // Hold breath underwater 3 sec.
  { id: 4, x: 217, y: 536, width: 165, height: 10 },   // Submerge and exhale 5 times
  { id: 5, x: 217, y: 514, width: 165, height: 22 },   // Recover object from bottom in waist-deep water
  
  // Swim to Survive® Skills
  { id: 6, x: 217, y: 486, width: 165, height: 10 },   // Back float, roll to front, swim 3 m
  
  // Movement / Swimming Skills
  { id: 7, x: 217, y: 459, width: 165, height: 10 },   // Float on front 5 sec.
  { id: 8, x: 217, y: 447, width: 165, height: 10 },   // Float on back 5 sec.
  { id: 9, x: 217, y: 425, width: 165, height: 22 },   // Roll laterally front to back and back to front
  { id: 10, x: 217, y: 413, width: 165, height: 10 },  // Glide on front 3 m
  { id: 11, x: 217, y: 402, width: 165, height: 10 },  // Glide on back 3 m
  { id: 12, x: 217, y: 390, width: 165, height: 10 },  // Flutter kick on front 5 m
  { id: 13, x: 217, y: 379, width: 165, height: 10 },  // Flutter kick on back 5 m
  
  // Water Smart® Education
  { id: 14, x: 217, y: 352, width: 165, height: 10 },  // Within Arms' Reach
  { id: 15, x: 217, y: 340, width: 165, height: 10 },  // Wear a Lifejacket
];