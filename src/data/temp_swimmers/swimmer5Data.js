export const swimmer5SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Shallow dive into deep water", id: 1 },
      { skill: "Tuck jump (cannonball) into deep water", id: 2 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Jump entry into deep water, tread 2 min.",
        mustSee: [
          "Make sure your arms are continuously moving back and forth",
          "Make sure your knees come up to your chest, like you are riding a bicycle with a supportive and continuous kick",
          "Ensure your mouth and nose is always above the surface the whole time",
          "Make sure your body is vertical and [add comment about arms/legs]"
        ],
        id: 3 
      },
      { 
        skill: "Stationary eggbeater kick 30 sec.",
        mustSee: [
          "Ensure both legs alternate, kicking in semi-circles towards the middle. Feet must be wider than knees",
          "Ensure your body is vertical and [add comment about legs]"
        ],
        id: 4 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Back somersault (in water)", id: 5 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Roll entry into deep water, tread 90 sec. and swim 75 m",
        id: 6 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Breaststroke 25 m",
        mustSee: [
          "Follow the pull-breathe-whip-glide sequence, ensuring you pull your arms towards your chest at the same time with elbow higher than hands and hands extend beyond your head when gliding",
          "Make sure that you whip with flexed feet and are always wider than your knees",
          "Ensure your kick is simultaneous and symmetrical",
          "Ensure you have a regular breathing pattern and when your face is in the water",
          "Ensure your body is always on its front and horizontal [add comment about arms/legs]"
        ],
        id: 7
      },
      { 
        skill: "Front crawl 50 m",
        mustSee: [
          "Ensure your arms are always alternating with your elbow coming out of the water first",
          "Make you're your hand reaches toward beyond your head and then pull down past your hip",
          "Make sure your kick is continuous and is initiated from your hip while kicking at the surface of the water",
          "Make sure you have a regular breathing pattern to the side with underwater exhalation",
          "Make sure you keep your eyes above the surface of the water",
          "Ensure you have a streamlined body position by [add comment about arms/legs]"
        ],
        id: 8
      },
      { 
        skill: "Back crawl 50 m",
        mustSee: [
          "Ensure your arms are straight as they alternate",
          "Remember, arms enter the water above your shoulders and then pull down in the water past your head with bent arms",
          "Make sure your kick is continuous and is initiated from your hip while kicking at the surface of the water",
          "Ensure your breathing is relaxed",
          "Ensure you have a streamlined body position by [add comment about arms/legs]"
        ],
        id: 9
      },
      { 
        skill: "Head-up front crawl 10 m",
        id: 10
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 50 m front or back crawl with 30 sec. rests",
        id: 11 
      },
      { 
        skill: "Interval training: 4 x 15 m breaststroke with 30 sec. rests",
        id: 12 
      },
      { 
        skill: "Sprint front crawl 25 m",
        id: 13 
      },
      { 
        skill: "Sprint back crawl 25 m",
        id: 14 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Swim with a Buddy", id: 15 },
      { skill: "Wear a Lifejacket", id: 16 },
      { skill: "Check the Ice", id: 17 },
      { skill: "Swim to Survive", id: 18 },
    ]
  }
];

export const swimmer5Skills = swimmer5SkillGroups.flatMap(group => group.skills);

// Swimmer 5 checkboxes - Split across two columns
export const swimmer5CheckboxPositions = [
  // Left side of Swimmer 5 column - Entries and Exits
  { id: 1, x: 414, y: 227 },   // Shallow dive into deep water
  { id: 2, x: 414, y: 216 },   // Tuck jump (cannonball) into deep water
  
  // Surface Support
  { id: 3, x: 414, y: 189 },   // Jump entry into deep water, tread 2 min.
  { id: 4, x: 414, y: 178 },   // Stationary eggbeater kick 30 sec.
  
  // Underwater Skills
  { id: 5, x: 414, y: 151 },   // Back somersault (in water)
  
  // Swim to Survive® Skills
  { id: 6, x: 414, y: 124 },   // Roll entry into deep water, tread 90 sec. and swim 75 m
  
  // Movement / Swimming Skills
  { id: 7, x: 414, y: 80 },   // Breaststroke 25 m
  { id: 8, x: 414, y: 69 },   // Front crawl 50 m
  { id: 9, x: 414, y: 57 },   // Back crawl 50 m
  { id: 10, x: 414, y: 46 },  // Head-up front crawl 10 m
  
  // Right side of Swimmer 5 (continued) - Fitness
  { id: 11, x: 613, y: 549 },  // Interval training: 4 x 50 m front or back crawl with 30 sec. rests
  { id: 12, x: 613, y: 527 },  // Interval training: 4 x 15 m breaststroke with 30 sec. rests
  { id: 13, x: 613, y: 504 },  // Sprint front crawl 25 m
  { id: 14, x: 613, y: 493 },  // Sprint back crawl 25 m
  
  // Water Smart® Education
  { id: 15, x: 613, y: 466 },  // Swim with a Buddy
  { id: 16, x: 613, y: 454 },  // Wear a Lifejacket
  { id: 17, x: 613, y: 443 },  // Check the Ice
  { id: 18, x: 613, y: 431 },  // Swim to Survive
];

// Swimmer 5 highlight positions
export const swimmer5HighlightPositions = [
  // Left side - Entries and Exits
  { id: 1, x: 414, y: 227, width: 165, height: 10 },  // Shallow dive into deep water
  { id: 2, x: 414, y: 216, width: 165, height: 10 },  // Tuck jump (cannonball) into deep water
  
  // Surface Support
  { id: 3, x: 414, y: 189, width: 165, height: 10 },  // Jump entry into deep water, tread 2 min.
  { id: 4, x: 414, y: 178, width: 165, height: 10 },  // Stationary eggbeater kick 30 sec.
  
  // Underwater Skills
  { id: 5, x: 414, y: 151, width: 165, height: 10 },  // Back somersault (in water)
  
  // Swim to Survive® Skills (wraps to 2-3 lines)
  { id: 6, x: 414, y: 110, width: 165, height: 22 },  // Roll entry into deep water, tread 90 sec. and swim 75 m
  
  // Movement / Swimming Skills
  { id: 7, x: 414, y: 80, width: 165, height: 10 },   // Breaststroke 25 m
  { id: 8, x: 414, y: 69, width: 165, height: 10 },   // Front crawl 50 m
  { id: 9, x: 414, y: 57, width: 165, height: 10 },   // Back crawl 50 m
  { id: 10, x: 414, y: 46, width: 165, height: 10 },  // Head-up front crawl 10 m
  
  // Right side (continued) - Fitness (wraps to 2 lines each)
  { id: 11, x: 613, y: 539, width: 165, height: 22 }, // Interval training: 4 x 50 m front or back crawl with 30 sec. rests
  { id: 12, x: 613, y: 517, width: 165, height: 22 }, // Interval training: 4 x 15 m breaststroke with 30 sec. rests
  { id: 13, x: 613, y: 504, width: 165, height: 10 }, // Sprint front crawl 25 m
  { id: 14, x: 613, y: 493, width: 165, height: 10 }, // Sprint back crawl 25 m
  
  // Water Smart® Education
  { id: 15, x: 613, y: 466, width: 165, height: 10 }, // Swim with a Buddy
  { id: 16, x: 613, y: 454, width: 165, height: 10 }, // Wear a Lifejacket
  { id: 17, x: 613, y: 443, width: 165, height: 10 }, // Check the Ice
  { id: 18, x: 613, y: 431, width: 165, height: 10 }, // Swim to Survive
];