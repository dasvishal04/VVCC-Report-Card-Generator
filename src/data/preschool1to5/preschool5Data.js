export const preschool5SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Forward roll wearing lifejacket", id: 1 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Tread water 10 sec.",
        mustSee: [
          "Make sure your arms are always moving back and forth",
          "Make sure your legs are always kicking big, like you're riding a bike",
          "Ensure your mouth and nose is always above the surface the whole time",
          "Make sure your body is vertical and [add comment about arms/legs]"
        ],
        id: 2 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Submerge and hold breath 5 sec.", id: 3 },
      { skill: "Recover object from bottom in chest-deep water", id: 4 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Wearing a lifejacket, sideways entry into deep water; tread 20 sec.; swim/kick 10 m",
        id: 5 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Whip kick in vertical position 20 sec. with lifejacket or buoyant aid",
        mustSee: [
          "Ensure both legs whip with your feet wider than your knees",
          "Make sure your body is vertical and your kick is simultaneous and symmetrical"
        ],
        id: 6 
      },
      { 
        skill: "Front crawl 5 m",
        mustSee: [
          "Make sure your arms are always alternating and reaching high out of the water",
          "Make sure both legs are continuously kicking up and down with a slight knee bend",
          "Make sure to look down at the floor and blow your bubbles",
          "Make sure you are kicking up and down and near the surface of the water to maintain a streamlined body position"
        ],
        id: 7 
      },
      { 
        skill: "Back crawl 5 m",
        mustSee: [
          "Make sure your arms are always alternating and reaching high out of the water",
          "Make sure both legs are continuously kicking up and down with a slight knee bend",
          "Ensure your breathing is relaxed",
          "Ensure your ears are in the water, tummy up, and you are kicking up and down at the surface of the water to maintain a streamlined body position"
        ],
        id: 8 
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 5 m flutter kick on back with 30 sec. rest",
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

export const preschool5Skills = preschool5SkillGroups.flatMap(group => group.skills);

// Preschool 5 checkboxes
export const preschool5CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 415, y: 548 },    // Forward roll wearing lifejacket
  
  // Surface Support
  { id: 2, x: 415, y: 521 },    // Tread water 10 sec.
  
  // Underwater Skills
  { id: 3, x: 415, y: 494 },    // Submerge and hold breath 5 sec.
  { id: 4, x: 415, y: 483 },    // Recover object from bottom in chest-deep water
  
  // Swim to Survive® Skills
  { id: 5, x: 415, y: 443 },    // Wearing a lifejacket, sideways entry into deep water; tread 20 sec.; swim/kick 10 m
  
  // Movement / Swimming Skills
  { id: 6, x: 415, y: 405 },    // Whip kick in vertical position 20 sec. with lifejacket or buoyant aid
  { id: 7, x: 415, y: 382 },    // Front crawl 5 m
  { id: 8, x: 415, y: 371 },    // Back crawl 5 m
  
  // Fitness
  { id: 9, x: 415, y: 343 },    // Interval training: 4 x 5 m flutter kick on back with 30 sec. rest
  
  // Water Smart® Education
  { id: 10, x: 415, y: 305 },   // Within Arms' Reach
  { id: 11, x: 415, y: 293 },   // Wear a Lifejacket
];

// Preschool 5 highlight positions
export const preschool5HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 415, y: 548, width: 165, height: 10 },    // Forward roll wearing lifejacket
  
  // Surface Support
  { id: 2, x: 415, y: 521, width: 165, height: 10 },    // Tread water 10 sec.
  
  // Underwater Skills
  { id: 3, x: 415, y: 494, width: 165, height: 10 },    // Submerge and hold breath 5 sec.
  { id: 4, x: 415, y: 473, width: 165, height: 22 },    // Recover object from bottom in chest-deep water
  
  // Swim to Survive® Skills
  { id: 5, x: 415, y: 433, width: 165, height: 22 },    // Wearing a lifejacket, sideways entry into deep water; tread 20 sec.; swim/kick 10 m
  
  // Movement / Swimming Skills
  { id: 6, x: 415, y: 395, width: 165, height: 22 },    // Whip kick in vertical position 20 sec. with lifejacket or buoyant aid
  { id: 7, x: 415, y: 382, width: 165, height: 10 },    // Front crawl 5 m
  { id: 8, x: 415, y: 371, width: 165, height: 10 },    // Back crawl 5 m
  
  // Fitness
  { id: 9, x: 415, y: 333, width: 165, height: 22 },    // Interval training: 4 x 5 m flutter kick on back with 30 sec. rest
  
  // Water Smart® Education
  { id: 10, x: 415, y: 305, width: 165, height: 10 },   // Within Arms' Reach
  { id: 11, x: 415, y: 293, width: 165, height: 10 },   // Wear a Lifejacket
];