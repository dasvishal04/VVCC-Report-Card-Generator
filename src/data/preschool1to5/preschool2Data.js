export const preschool2SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Enter and exit shallow water in lifejacket", id: 1 },
      { skill: "Jump into chest-deep water", id: 2 },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Submerge", id: 3 },
      { skill: "Submerge and exhale 3 times", id: 4 },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Float on front 3 sec. with lifejacket or aid",
        mustSee: [
          "You are encouraged to practice putting your whole face in the water and blow bubbles",
          "Make sure your arms are out like a star and you are able to recover from your float unassisted"
        ],
        id: 5 
      },
      { 
        skill: "Float on back 3 sec. with lifejacket or aid",
        mustSee: [
          "Ensure that you are in a star position, with your ears in the water and you are able to recover from your float unassisted"
        ],
        id: 6 
      },
      { 
        skill: "Roll laterally front to back and back to front wearing lifejacket",
        mustSee: [
          "When rolling onto your back make sure your tummy is at the top of the water right away",
          "When rolling onto your front, make sure you put your whole face in the water and blow bubbles",
          "Make sure your body stays horizontal"
        ],
        id: 7 
      },
      { 
        skill: "Glide on front 3 m with lifejacket or aid",
        mustSee: [
          "Make sure your legs are straight and together at the top of the water",
          "Practice putting your whole face in the water and blow bubbles",
          "Have a streamlined body position by having your arms extended beyond your head"
        ],
        id: 8 
      },
      { 
        skill: "Glide on back 3 m with lifejacket or aid",
        mustSee: [
          "Make sure your arms are at your side",
          "Make sure your legs are straight and together at the top of the water",
          "Ensure your ears are in the water and your whole body is near the surface of the water"
        ],
        id: 9 
      },
      { 
        skill: "Flutter kick on back 5 m with buoyant aid",
        mustSee: [
          "Make sure your arms are at your side",
          "Ensure both legs are always kicking up and down",
          "Ensure your ears are in the water and your whole body is near the surface of the water"
        ],
        id: 10 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Within Arms' Reach", id: 11 },
      { skill: "Wear a Lifejacket", id: 12 },
    ]
  }
];

export const preschool2Skills = preschool2SkillGroups.flatMap(group => group.skills);

// Preschool 2 checkboxes
export const preschool2CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 315 },   // Enter and exit shallow water in lifejacket
  { id: 2, x: 19, y: 303 },   // Jump into chest-deep water
  
  // Underwater Skills
  { id: 3, x: 19, y: 276 },   // Submerge
  { id: 4, x: 19, y: 264 },   // Submerge and exhale 3 times
  
  // Movement / Swimming Skills
  { id: 5, x: 19, y: 237 },   // Float on front 3 sec. with lifejacket or aid
  { id: 6, x: 19, y: 225 },   // Float on back 3 sec. with lifejacket or aid
  { id: 7, x: 19, y: 214 },   // Roll laterally front to back and back to front wearing lifejacket
  { id: 8, x: 19, y: 192 },   // Glide on front 3 m with lifejacket or aid
  { id: 9, x: 19, y: 180 },   // Glide on back 3 m with lifejacket or aid
  { id: 10, x: 19, y: 169 },  // Flutter kick on back 5 m with buoyant aid
  
  // Water Smart® Education
  { id: 11, x: 19, y: 142 },  // Within Arms' Reach
  { id: 12, x: 19, y: 130 },  // Wear a Lifejacket
];

// Preschool 2 highlight positions
export const preschool2HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 315, width: 165, height: 10 },   // Enter and exit shallow water in lifejacket
  { id: 2, x: 19, y: 303, width: 165, height: 10 },   // Jump into chest-deep water
  
  // Underwater Skills
  { id: 3, x: 19, y: 276, width: 165, height: 10 },   // Submerge
  { id: 4, x: 19, y: 264, width: 165, height: 10 },   // Submerge and exhale 3 times
  
  // Movement / Swimming Skills
  { id: 5, x: 19, y: 237, width: 165, height: 10 },   // Float on front 3 sec. with lifejacket or aid
  { id: 6, x: 19, y: 225, width: 165, height: 10 },   // Float on back 3 sec. with lifejacket or aid
  { id: 7, x: 19, y: 204, width: 165, height: 22 },   // Roll laterally front to back and back to front wearing lifejacket
  { id: 8, x: 19, y: 192, width: 165, height: 10 },   // Glide on front 3 m with lifejacket or aid
  { id: 9, x: 19, y: 180, width: 165, height: 10 },   // Glide on back 3 m with lifejacket or aid
  { id: 10, x: 19, y: 169, width: 165, height: 10 },  // Flutter kick on back 5 m with buoyant aid
  
  // Water Smart® Education
  { id: 11, x: 19, y: 142, width: 165, height: 10 },  // Within Arms' Reach
  { id: 12, x: 19, y: 130, width: 165, height: 10 },  // Wear a Lifejacket
];