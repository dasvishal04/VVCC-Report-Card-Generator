export const swimmer4SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Standing dive into deep water", id: 1 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Tread water 1 min.",
        mustSee: [
          "Make sure your arms are continuously moving back and forth",
          "Make sure your knees come up to your chest, like you are riding a bike, for a supportive and continuous kick",
          "Ensure your mouth and nose is always above the surface the whole time",
          "Make sure your body is vertical"
        ],
        id: 2 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Swim underwater 5 m", id: 3 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Canadian Standard: roll entry into deep water, tread 1 min. and swim 50 m",
        id: 4 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Whip kick on front 15 m",
        mustSee: [
          "Make sure your feet are always wider than your knees and your feet kick simultaneous and symmetrical",
          "Make sure your body is on its front and you whip both legs at the same time"
        ],
        id: 5
      },
      { 
        skill: "Breaststroke arms drill 15 m",
        mustSee: [
          "Arm pull towards your chest at the same time with elbow higher than hands",
          "Hands extend beyond your head when gliding",
          "Ensure you are always exhaling when your face is in the water",
          "Make sure your body is horizontal on your front"
        ],
        id: 6
      },
      { 
        skill: "Front crawl 25 m",
        mustSee: [
          "Make sure your arms are always alternating reaching out of the water and you have an underwater pull",
          "Ensure your kick is continuous and initiated from your hips",
          "Ensure you are blowing bubbles when your face is in the water and you have a continuous breathing pattern to the side",
          "Make sure your body is streamlined"
        ],
        id: 7
      },
      { 
        skill: "Back crawl 25 m",
        mustSee: [
          "Make sure your arms are always continuously alternating and your hand enters beyond your shoulder",
          "Make sure your arms are always alternating high out of the water and you have an underwater pull",
          "Remember to keep your legs and feet relaxed as you kick",
          "Ensure your breathing is relaxed",
          "Remember to keep your body on your back"
        ],
        id: 8
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 25 m front or back crawl with 20 sec. rests",
        id: 9 
      },
      { 
        skill: "Sprint front crawl 25 m",
        id: 10 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Swim with a Buddy", id: 11 },
      { skill: "Wear a Lifejacket", id: 12 },
      { skill: "Check the Ice", id: 13 },
      { skill: "Swim to Survive", id: 14 },
    ]
  }
];

export const swimmer4Skills = swimmer4SkillGroups.flatMap(group => group.skills);

// Swimmer 4 checkboxes
export const swimmer4CheckboxPositions = [
  // Left side of column 4 - Entries and Exits
  { id: 1, x: 414, y: 549 },   // Standing dive into deep water (DO NOT CHANGE)
  
  // Surface Support
  { id: 2, x: 414, y: 522 },   // Tread water 1 min. (DO NOT CHANGE)
  
  // Underwater Skills
  { id: 3, x: 414, y: 495 },   // Swim underwater 5 m (DO NOT CHANGE)
  
  // Swim to Survive® Skills
  { id: 4, x: 414, y: 468 },   // Canadian Standard: roll entry into deep water, tread 1 min. and swim 50 m (DO NOT CHANGE)
  
  // Movement / Swimming Skills
  { id: 5, x: 414, y: 429 },   // Whip kick on front 15 m (49 units down)
  { id: 6, x: 414, y: 417 },   // Breaststroke arms drill 15 m (12 units down)
  { id: 7, x: 414, y: 405 },   // Front crawl 25 m (12 units down)
  { id: 8, x: 414, y: 393 },   // Back crawl 25 m (12 units down)
  
  // Fitness
  { id: 9, x: 414, y: 366 },   // Interval training: 4 x 25 m front or back crawl with 20 sec. rests (39 units down)
  { id: 10, x: 414, y: 343 },  // Sprint front crawl 25 m (25 units down)
  
  // Water Smart® Education
  { id: 11, x: 414, y: 318 },  // Swim with a Buddy (39 units down)
  { id: 12, x: 414, y: 305 },  // Wear a Lifejacket (12 units down)
  { id: 13, x: 414, y: 293 },  // Check the Ice (12 units down)
  { id: 14, x: 414, y: 281 },  // Swim to Survive (12 units down)
];

export const swimmer4HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 414, y: 549, width: 165, height: 10 },  // Standing dive into deep water
  
  // Surface Support
  { id: 2, x: 414, y: 522, width: 165, height: 10 },  // Tread water 1 min.
  
  // Underwater Skills
  { id: 3, x: 414, y: 495, width: 165, height: 10 },  // Swim underwater 5 m
  
  // Swim to Survive® Skills (wraps to 3 lines)
  { id: 4, x: 414, y: 454, width: 165, height: 22 },  // Canadian Standard: roll entry into deep water, tread 1 min. and swim 50 m
  
  // Movement / Swimming Skills
  { id: 5, x: 414, y: 429, width: 165, height: 10 },  // Whip kick on front 15 m
  { id: 6, x: 414, y: 417, width: 165, height: 10 },  // Breaststroke arms drill 15 m
  { id: 7, x: 414, y: 405, width: 165, height: 10 },  // Front crawl 25 m
  { id: 8, x: 414, y: 393, width: 165, height: 10 },  // Back crawl 25 m
  
  // Fitness (wraps to 2 lines)
  { id: 9, x: 414, y: 356, width: 165, height: 22 },  // Interval training: 4 x 25 m front or back crawl with 20 sec. rests
  { id: 10, x: 414, y: 343, width: 165, height: 10 }, // Sprint front crawl 25 m
  
  // Water Smart® Education
  { id: 11, x: 414, y: 318, width: 165, height: 10 }, // Swim with a Buddy
  { id: 12, x: 414, y: 305, width: 165, height: 10 }, // Wear a Lifejacket
  { id: 13, x: 414, y: 293, width: 165, height: 10 }, // Check the Ice
  { id: 14, x: 414, y: 281, width: 165, height: 10 }, // Swim to Survive
];