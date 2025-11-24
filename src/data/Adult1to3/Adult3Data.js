export const adult3SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Shallow dive into deep water", id: 1 },
      { skill: "Stride entry into deep water", id: 2 },
      { skill: "Compact jump into deep water", id: 3 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Legs-only surface support 30–60 sec.",
        mustSee: [
          "*comment on must see of the kick swimmer is using*",
          "Ensure your body is vertical with mouth and nose above the surface of the water"
        ],
        id: 4 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Back somersault (in water)", id: 5 },
      { skill: "Swim underwater 5–10 m to recover object", id: 6 },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Eggbeater kick on back or scissor kick on side 10–15 m",
        mustSee: [
          "For Eggbeater: Ensure both legs are alternating in semi-circles towards the middle. Feet must be wider than knees",
          "For Eggbeater: Ensure your body is on its back and [add comment about legs]",
          "For Scissor Kick: One leg extends forward and the other extends back then squeeze legs together in a scissor like action",
          "For Scissor Kick: Ensure your body is on its side and [add comment about legs]"
        ],
        id: 7 
      },
      { 
        skill: "Breaststroke 25–50 m",
        mustSee: [
          "Ensure both arms pull towards your chest at the same time with elbow higher than hands and then extend beyond your head",
          "Ensure both legs kick at the same time with knees close and feet wide apart",
          "Ensure you are always exhaling when your face is in the water",
          "Ensure your body is always on its front and horizontal",
          "Remember to pull your arms towards your chest, breathe, kick then glide with arms extended beyond your head and legs straight"
        ],
        id: 8 
      },
      { 
        skill: "Front crawl 50–100 m",
        mustSee: [
          "Ensure your arms are always alternating with elbows higher than hands",
          "Reach forward and then pull down past your hip",
          "Ensure your kick is continuous and initiated from your hips. Remember to keep your legs and feet relaxed as you kick",
          "Make sure you always breathe to the side and exhale in the water",
          "Ensure your body is horizontal on its front"
        ],
        id: 9 
      },
      { 
        skill: "Back crawl 50–100 m",
        mustSee: [
          "Ensure your arms are straight as they alternate",
          "Remember, arms enter the water beyond your shoulders and then pull down through the water with bent arms to your thighs",
          "Ensure your kick is continuous and initiated from your hips. Remember to keep your legs and feet relaxed as you kick",
          "Ensure your breathing is relaxed",
          "Ensure your body is relaxed on its back"
        ],
        id: 10 
      },
      { 
        skill: "Head-up front crawl 10–15 m",
        mustSee: [
          "Ensure your arms are always alternating with your elbow coming out of the water first",
          "Make you're your hand reaches forward beyond your shoulder and then pull down past your hip",
          "Make sure your kick is continuous and is initiated from your hip while kicking at the surface of the water",
          "Make sure you keep your eyes above the surface of the water",
          "Ensure you have a streamlined body position by [add comment about arms/legs]"
        ],
        id: 11 
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 50 m front or back crawl or breaststroke with 30 sec. rests",
        id: 12 
      },
      { 
        skill: "Sprint (25–50 m) front crawl, back crawl, or breaststroke",
        id: 13 
      },
      { 
        skill: "Workout 300 m",
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
      { skill: "Within Arms' Reach", id: 19 },
    ]
  }
];

export const adult3Skills = adult3SkillGroups.flatMap(group => group.skills);

// Adult 3 checkboxes
export const adult3CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 415, y: 548 },   // Shallow dive into deep water
  { id: 2, x: 415, y: 538 },   // Stride entry into deep water
  { id: 3, x: 415, y: 526 },   // Compact jump into deep water
  
  // Surface Support
  { id: 4, x: 415, y: 498 },   // Legs-only surface support 30–60 sec.
  
  // Underwater Skills
  { id: 5, x: 415, y: 472 },   // Back somersault (in water)
  { id: 6, x: 415, y: 460 },   // Swim underwater 5–10 m to recover object
  
  // Movement / Swimming Skills
  { id: 7, x: 415, y: 422 },   // Eggbeater kick on back or scissor kick on side 10–15 m
  { id: 8, x: 415, y: 398 },   // Breaststroke 25–50 m
  { id: 9, x: 415, y: 388 },   // Front crawl 50–100 m
  { id: 10, x: 415, y: 375 },  // Back crawl 50–100 m
  { id: 11, x: 415, y: 364 },  // Head-up front crawl 10–15 m
  
  // Fitness
  { id: 12, x: 415, y: 336 },  // Interval training: 4 x 50 m front or back crawl or breaststroke with 30 sec. rests
  { id: 13, x: 415, y: 315 },  // Sprint (25–50 m) front crawl, back crawl, or breaststroke
  { id: 14, x: 415, y: 291 },  // Workout 300 m
  
  // Water Smart® Education
  { id: 15, x: 415, y: 264 },  // Swim with a Buddy
  { id: 16, x: 415, y: 253 },  // Wear a Lifejacket
  { id: 17, x: 415, y: 241 },  // Check the Ice
  { id: 18, x: 415, y: 230 },  // Swim to Survive
  { id: 19, x: 415, y: 218 },   // Within Arms' Reach
];

// Adult 3 highlight positions
export const adult3HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 613, y: 549, width: 165, height: 10 },  // Shallow dive into deep water
  { id: 2, x: 613, y: 537, width: 165, height: 10 },  // Stride entry into deep water
  { id: 3, x: 613, y: 525, width: 165, height: 10 },  // Compact jump into deep water
  
  // Surface Support
  { id: 4, x: 613, y: 486, width: 165, height: 10 },  // Legs-only surface support 30–60 sec.
  
  // Underwater Skills
  { id: 5, x: 613, y: 447, width: 165, height: 10 },  // Back somersault (in water)
  { id: 6, x: 613, y: 423, width: 165, height: 22 },  // Swim underwater 5–10 m to recover object (2 lines)
  
  // Movement / Swimming Skills
  { id: 7, x: 613, y: 360, width: 165, height: 34 },  // Eggbeater kick on back or scissor kick on side 10–15 m (3 lines)
  { id: 8, x: 613, y: 336, width: 165, height: 10 },  // Breaststroke 25–50 m
  { id: 9, x: 613, y: 324, width: 165, height: 10 },  // Front crawl 50–100 m
  { id: 10, x: 613, y: 312, width: 165, height: 10 }, // Back crawl 50–100 m
  { id: 11, x: 613, y: 300, width: 165, height: 10 }, // Head-up front crawl 10–15 m
  
  // Fitness
  { id: 12, x: 613, y: 237, width: 165, height: 34 }, // Interval training: 4 x 50 m front or back crawl or breaststroke with 30 sec. rests (3 lines)
  { id: 13, x: 613, y: 201, width: 165, height: 22 }, // Sprint (25–50 m) front crawl, back crawl, or breaststroke (2 lines)
  { id: 14, x: 613, y: 189, width: 165, height: 10 }, // Workout 300 m
  
  // Water Smart® Education
  { id: 15, x: 613, y: 138, width: 165, height: 10 }, // Swim with a Buddy
  { id: 16, x: 613, y: 126, width: 165, height: 10 }, // Wear a Lifejacket
  { id: 17, x: 613, y: 114, width: 165, height: 10 }, // Check the Ice
  { id: 18, x: 613, y: 102, width: 165, height: 10 }, // Swim to Survive
  { id: 19, x: 613, y: 90, width: 165, height: 10 },  // Within Arms' Reach
];