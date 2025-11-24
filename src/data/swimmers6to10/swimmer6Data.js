export const swimmer6SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Stride entry into deep water", id: 1 },
      { skill: "Compact jump into deep water", id: 2 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Legs-only surface support 45 sec.",
        mustSee: [
          "Comment on the type of kick the swimmer is using (eggbeater, whip kick, scissor kick, or inverted scissor kick)",
          "Ensure body is vertical with mouth and nose above the surface"
        ],
        id: 3 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Swim underwater 10 m to recover object", id: 4 },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Eggbeater kick on back 15 m",
        mustSee: [
          "Ensure both legs alternate in semi-circles towards the middle with feet wider than knees",
          "Ensure body is on its back"
        ],
        id: 5
      },
      { 
        skill: "Scissor kick 15 m",
        mustSee: [
          "One leg extends forward and the other extends back then squeeze legs together in a scissor-like action",
          "Ensure body is on its side"
        ],
        id: 6
      },
      { 
        skill: "Breaststroke 50 m",
        mustSee: [
          "Both arms pull towards chest at the same time with elbow higher than hands, then extend beyond head",
          "Both legs kick at the same time with knees close and feet wide apart",
          "Ensure always exhaling when face is in the water",
          "Body is always on its front and horizontal, pull arms towards chest, breathe, kick then glide with arms extended beyond head and legs straight"
        ],
        id: 7
      },
      { 
        skill: "Front crawl 100 m",
        mustSee: [
          "Arms are always alternating with elbows higher than hands, reach forward and pull down past your hip",
          "Kick is continuous and initiated from your hips",
          "Always breathe to the side and exhale in the water",
          "Body is horizontal on its front"
        ],
        id: 8
      },
      { 
        skill: "Back crawl 100 m",
        mustSee: [
          "Arms are straight as they alternate, enter the water beyond shoulders and pull down through the water with bent arms to your thighs",
          "Keep your legs and feet relaxed as you kick",
          "Breathing is relaxed",
          "Body is relaxed on its back"
        ],
        id: 9
      },
      { 
        skill: "Head up swim 25 m",
        mustSee: [
          "For Front Crawl: Arms always alternating with elbow coming out first, hand reaches forward beyond shoulder then pull down past hip, kick is continuous and initiated from hip while kicking at the surface, keep eyes above the surface, streamlined body position",
          "For Breaststroke: Both arms pull towards chest at same time with elbow higher than hands then extend beyond head, both legs kick at same time with knees close and feet wide apart, body is always on its front and horizontal, pull arms towards chest, breathe, kick then glide with arms extended beyond head and legs straight"
        ],
        id: 10
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 25 m breaststroke with 30 sec. rests",
        id: 11 
      },
      { 
        skill: "Sprint breaststroke 25 m",
        id: 12 
      },
      { 
        skill: "Workout (300 m)",
        id: 13 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Swim with a Buddy", id: 14 },
      { skill: "Wear a Lifejacket", id: 15 },
      { skill: "Check the Ice", id: 16 },
      { skill: "Swim to Survive", id: 17 },
    ]
  }
];

export const swimmer6Skills = swimmer6SkillGroups.flatMap(group => group.skills);

// Swimmer 6 checkboxes - Following the pattern from previous swimmers
// Left side uses x: 215 (Swimmer 6 column), Right side uses x: 414 (Swimmer 6 continued column)
export const swimmer6CheckboxPositions = [
  // Left side of Swimmer 6 column - Entries and Exits
  { id: 1, x: 19, y: 166 },   // Stride entry into deep water
  { id: 2, x: 19, y: 153 },   // Compact jump into deep water
  
  // Surface Support
  { id: 3, x: 19, y: 127 },   // Legs-only surface support 45 sec.
  
  // Underwater Skills
  { id: 4, x: 19, y: 100 },   // Swim underwater 10 m to recover object
  
  // Movement / Swimming Skills
  { id: 5, x: 19, y: 72 },   // Eggbeater kick on back 15 m
  { id: 6, x: 19, y: 60 },   // Scissor kick 15 m
  
  // Right side of Swimmer 6 (continued)
  { id: 7, x: 217, y: 558 },   // Breaststroke 50 m
  { id: 8, x: 217, y: 548 },   // Front crawl 100 m
  { id: 9, x: 217, y: 536 },   // Back crawl 100 m
  { id: 10, x: 217, y: 525 },  // Head up swim 25 m
  
  // Fitness
  { id: 11, x: 217, y: 497 },  // Interval training: 4 x 25 m breaststroke with 30 sec. rests
  { id: 12, x: 217, y: 475 },  // Sprint breaststroke 25 m
  { id: 13, x: 217, y: 462 },  // Workout (300 m)
  
  // Water Smart® Education
  { id: 14, x: 217, y: 431 },  // Swim with a Buddy
  { id: 15, x: 217, y: 420 },  // Wear a Lifejacket
  { id: 16, x: 217, y: 408 },  // Check the Ice
  { id: 17, x: 217, y: 395 },  // Swim to Survive
];

// Swimmer 6 highlight positions
export const swimmer6HighlightPositions = [
  // Left side - Entries and Exits
  { id: 1, x: 19, y: 166, width: 165, height: 10 },  // Stride entry into deep water
  { id: 2, x: 19, y: 153, width: 165, height: 10 },  // Compact jump into deep water
  
  // Surface Support
  { id: 3, x: 19, y: 127, width: 165, height: 10 },  // Legs-only surface support 45 sec.
  
  // Underwater Skills
  { id: 4, x: 19, y: 100, width: 165, height: 10 },  // Swim underwater 10 m to recover object
  
  // Movement / Swimming Skills
  { id: 5, x: 19, y: 72, width: 165, height: 10 },   // Eggbeater kick on back 15 m
  { id: 6, x: 19, y: 60, width: 165, height: 10 },   // Scissor kick 15 m
  
  // Right side (continued)
  { id: 7, x: 217, y: 558, width: 165, height: 10 },  // Breaststroke 50 m
  { id: 8, x: 217, y: 548, width: 165, height: 10 },  // Front crawl 100 m
  { id: 9, x: 217, y: 536, width: 165, height: 10 },  // Back crawl 100 m
  { id: 10, x: 217, y: 525, width: 165, height: 10 }, // Head up swim 25 m
  
  // Fitness (wraps to 2 lines)
  { id: 11, x: 217, y: 487, width: 165, height: 22 }, // Interval training: 4 x 25 m breaststroke with 30 sec. rests
  { id: 12, x: 217, y: 475, width: 165, height: 10 }, // Sprint breaststroke 25 m
  { id: 13, x: 217, y: 462, width: 165, height: 10 }, // Workout (300 m)
  
  // Water Smart® Education
  { id: 14, x: 217, y: 431, width: 165, height: 10 }, // Swim with a Buddy
  { id: 15, x: 217, y: 420, width: 165, height: 10 }, // Wear a Lifejacket
  { id: 16, x: 217, y: 408, width: 165, height: 10 }, // Check the Ice
  { id: 17, x: 217, y: 395, width: 165, height: 10 }, // Swim to Survive
];