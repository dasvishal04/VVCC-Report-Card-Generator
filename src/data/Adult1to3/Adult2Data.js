export const adult2SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Standing dive into deep water", id: 1 },
      { skill: "Forward roll entry into deep water with lifejacket", id: 2 },
      { skill: "Forward roll entry into deep water", id: 3 },
      { skill: "Tuck jump (cannonball) into deep water", id: 4 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Tread water 1–2 min.",
        mustSee: [
          "Make sure your arms are continuously moving back and forth",
          "Make sure your knees come up to your chest, like you are riding a bike, for a supportive and continuous kick",
          "Ensure your mouth and nose is always above the surface the whole time",
          "Make sure your body is vertical and [add comment about arms/legs]"
        ],
        id: 5 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Handstand in shallow water", id: 6 },
      { skill: "Front somersault (in water)", id: 7 },
      { skill: "Swim underwater 5–10 m", id: 8 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Canadian Swim to Survive Standard: Roll entry into deep water, tread 1 min. and swim 50 m",
        id: 9 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Flutter kick on back 5 m; reverse direction and flutter kick on front 5 m",
        mustSee: [
          "Ensure your arms are extended above your head when kicking on your front, when rolling to your back keep your arms by your side",
          "Ensure your kick is continuous and initiated from your hips with a slight knee bend",
          "When you flip to your back make sure your ears are in the water and your tummy is up to maintain a streamlined body position"
        ],
        id: 10 
      },
      { 
        skill: "Flutter kick on front 5 m; reverse direction and flutter kick on back 5 m",
        mustSee: [
          "Ensure your arms are at your side when kicking on your back, when rolling to your front extend your arms above your head",
          "Ensure your kick is continuous and initiated from your hips with a slight knee bend",
          "When you flip to your front make sure you put your face in the water right away and extend your arms beyond your head to maintain a streamlined body position"
        ],
        id: 11 
      },
      { 
        skill: "Whip kick on back 10–15 m",
        mustSee: [
          "Make sure your feet are always wider than your knees and your feet kick simultaneous and symmetrical",
          "Make sure your body is on its back and you whip both legs at the same time"
        ],
        id: 12 
      },
      { 
        skill: "Whip kick on front 10–15 m",
        mustSee: [
          "Make sure your feet are always wider than your knees and your feet kick simultaneous and symmetrical",
          "Make sure your body is on its front and you whip both legs at the same time"
        ],
        id: 13 
      },
      { 
        skill: "Breaststroke arms drill 10–15 m",
        mustSee: [
          "Ensure both arms pull towards your chest at the same time with elbow higher than hands and then extend beyond your head when gliding",
          "Ensure you are always exhaling when your face is in the water",
        ],
        id: 14 
      },
      { 
        skill: "Front crawl 25–50 m",
        mustSee: [
          "Make sure your arms are always alternating reaching high out of the water and you have an underwater pull",
          "Ensure your kick is continuous and initiated from your hips",
          "Ensure you are blowing bubbles when your face is in the water and you have a continuous breathing pattern to the side",
          "Make sure your body is streamlined by keeping your kicking at the top of the water"
        ],
        id: 15 
      },
      { 
        skill: "Back crawl 25–50 m",
        mustSee: [
          "Make sure your arms are always continuously alternating and your hand enters beyond your shoulder",
          "Make sure your arms are always alternating high out of the water and you have an underwater pull",
          "Remember to keep your legs and feet relaxed as you kick",
          "Ensure your breathing is relaxed",
        ],
        id: 16 
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 25 m flutter kick with 15–20 sec. rests",
        id: 17 
      },
      { 
        skill: "Interval training: 4 x 25 m front or back crawl with 15–20 sec. rests",
        id: 18 
      },
      { 
        skill: "Sprint front crawl 25 m",
        id: 19 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Swim with a Buddy", id: 20 },
      { skill: "Wear a Lifejacket", id: 21 },
      { skill: "Check the Ice", id: 22 },
      { skill: "Swim to Survive", id: 23 },
      { skill: "Within Arms' Reach", id: 24 },
    ]
  }
];

export const adult2Skills = adult2SkillGroups.flatMap(group => group.skills);

// Adult 2 checkboxes
export const adult2CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 216, y: 549 },   // Standing dive into deep water
  { id: 2, x: 216, y: 536 },   // Forward roll entry into deep water with lifejacket
  { id: 3, x: 216, y: 514 },   // Forward roll entry into deep water
  { id: 4, x: 216, y: 502 },   // Tuck jump (cannonball) into deep water
  
  // Surface Support
  { id: 5, x: 216, y: 476 },   // Tread water 1–2 min.
  
  // Underwater Skills
  { id: 6, x: 216, y: 449 },   // Handstand in shallow water
  { id: 7, x: 216, y: 437 },   // Front somersault (in water)
  { id: 8, x: 216, y: 426 },   // Swim underwater 5–10 m
  
  // Swim to Survive® Skills
  { id: 9, x: 216, y: 399 },   // Canadian Swim to Survive Standard: Roll entry into deep water, tread 1 min. and swim 50 m
  
  // Movement / Swimming Skills
  { id: 10, x: 216, y: 348 },  // Flutter kick on back 5 m; reverse direction and flutter kick on front 5 m
  { id: 11, x: 216, y: 324 },  // Flutter kick on front 5 m; reverse direction and flutter kick on back 5 m
  { id: 12, x: 216, y: 303 },  // Whip kick on back 10–15 m
  { id: 13, x: 216, y: 291 },  // Whip kick on front 10–15 m
  { id: 14, x: 216, y: 280 },  // Breaststroke arms drill 10–15 m
  { id: 15, x: 216, y: 268 },  // Front crawl 25–50 m
  { id: 16, x: 216, y: 257 },  // Back crawl 25–50 m
  
  // Fitness
  { id: 17, x: 216, y: 230 },   // Interval training: 4 x 25 m flutter kick with 15–20 sec. rests
  { id: 18, x: 216, y: 207 },   // Interval training: 4 x 25 m front or back crawl with 15–20 sec. rests
  { id: 19, x: 216, y: 184 },   // Sprint front crawl 25 m
  
  // Water Smart® Education
  { id: 20, x: 216, y: 157 },   // Swim with a Buddy
  { id: 21, x: 216, y: 146 },  // Wear a Lifejacket (continues on right column)
  { id: 22, x: 216, y: 135 },  // Check the Ice
  { id: 23, x: 216, y: 123 },  // Swim to Survive
  { id: 24, x: 216, y: 112 },  // Within Arms' Reach
];

// Adult 2 highlight positions
export const adult2HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 216, y: 549, width: 165, height: 10 },   // Standing dive into deep water
  { id: 2, x: 216, y: 526, width: 165, height: 22 },   // Forward roll entry into deep water with lifejacket
  { id: 3, x: 216, y: 514, width: 165, height: 10 },   // Forward roll entry into deep water
  { id: 4, x: 216, y: 502, width: 165, height: 10 },   // Tuck jump (cannonball) into deep water
  
  // Surface Support
  { id: 5, x: 216, y: 476, width: 165, height: 10 },   // Tread water 1–2 min.
  
  // Underwater Skills
  { id: 6, x: 216, y: 449, width: 165, height: 10 },   // Handstand in shallow water
  { id: 7, x: 216, y: 437, width: 165, height: 10 },   // Front somersault (in water)
  { id: 8, x: 216, y: 426, width: 165, height: 10 },   // Swim underwater 5–10 m
  
  // Swim to Survive® Skills
  { id: 9, x: 216, y: 373, width: 165, height: 33 },   // Canadian Swim to Survive Standard: Roll entry into deep water, tread 1 min. and swim 50 m
  
  // Movement / Swimming Skills
  { id: 10, x: 216, y: 338, width: 165, height: 22 },  // Flutter kick on back 5 m; reverse direction and flutter kick on front 5 m
  { id: 11, x: 216, y: 314, width: 165, height: 22 },  // Flutter kick on front 5 m; reverse direction and flutter kick on back 5 m
  { id: 12, x: 216, y: 303, width: 165, height: 10 },  // Whip kick on back 10–15 m
  { id: 13, x: 216, y: 291, width: 165, height: 10 },  // Whip kick on front 10–15 m
  { id: 14, x: 216, y: 280, width: 165, height: 10 },  // Breaststroke arms drill 10–15 m
  { id: 15, x: 216, y: 268, width: 165, height: 10 },  // Front crawl 25–50 m
  { id: 16, x: 216, y: 257, width: 165, height: 10 },  // Back crawl 25–50 m
  
  // Fitness
  { id: 17, x: 216, y: 220, width: 165, height: 22 },   // Interval training: 4 x 25 m flutter kick with 15–20 sec. rests
  { id: 18, x: 216, y: 197, width: 165, height: 22 },   // Interval training: 4 x 25 m front or back crawl with 15–20 sec. rests
  { id: 19, x: 216, y: 184, width: 165, height: 10 },   // Sprint front crawl 25 m
  
  // Water Smart® Education
  { id: 20, x: 216, y: 157, width: 165, height: 10 },   // Swim with a Buddy
  { id: 21, x: 216, y: 146, width: 165, height: 10 },  // Wear a Lifejacket (continues on right column)
  { id: 22, x: 216, y: 135, width: 165, height: 10 },  // Check the Ice
  { id: 23, x: 216, y: 123, width: 165, height: 10 },  // Swim to Survive
  { id: 24, x: 216, y: 112, width: 165, height: 10 },  // Within Arms' Reach
];