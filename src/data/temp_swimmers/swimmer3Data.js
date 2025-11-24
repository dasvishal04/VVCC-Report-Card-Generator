export const swimmer3SkillGroups = [
{
    category: "Entries and Exits",
    skills: [
      { skill: "Kneeling dive into deep water", id: 1 },
      { skill: "Forward roll entry into deep water", id: 2 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Tread water 30 sec.",
        mustSee: [
          "Make sure your arms are continuously moving back and forth",
          "Make sure your knees come up to your chest, like you are riding a bicycle with a supportive and continuous kick"
        ],
        id: 3 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Handstand in shallow water", id: 4 },
      { skill: "Front somersault (in water)", id: 5 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Jump into deep water, tread 30 sec., and swim/kick 25 m",
        id: 6 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Flutter kick on back 5 m; reverse direction and flutter kick on front 5 m",
        mustSee: [
          "When you flip to your back make sure your ears are in the water and your tummy is up to maintain a streamlined body position",
          "Ensure your kick is continuous and initiated from your hips with a slight knee bend"
        ],
        id: 7
      },
      { 
        skill: "Flutter kick on front 5 m; reverse direction and flutter kick on back 5 m",
        mustSee: [
          "When you flip to your front make sure you put your entire face in the water and extend your arms beyond your head to maintain a streamlined body position",
          "Ensure your kick is continuous and initiated from your hips with a slight knee bend"
        ],
        id: 8
      },
      { 
        skill: "Whip kick on back 10 m",
        mustSee: [
          "Make sure your feet are always wider than your knees and your kick is simultaneous and symmetrical",
          "Make sure your body is on its back and you whip both legs at the same time"
        ],
        id: 9
      },
      { 
        skill: "Front crawl 15 m",
        mustSee: [
          "Make sure your arms are always alternating reaching out of the water and you have an underwater pull",
          "Ensure your kick is continuous and initiated from your hips",
          "Ensure you are blowing bubbles when your face is in the water and you have a continuous breathing pattern to the side",
          "Make sure your body is streamlined"
        ],
        id: 10
      },
      { 
        skill: "Back crawl 15 m",
        mustSee: [
          "Make sure your arms are always continuously alternating and your hand enters beyond your shoulder",
          "Make sure your arms are always alternating high out of the water and you have an underwater pull",
          "Remember to keep your head and feet relaxed as you kick",
          "Ensure your breathing is relaxed",
          "Remember to keep your body on your back"
        ],
        id: 11
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 15 m flutter kick with 20 sec. rests",
        id: 12 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Swim with a Buddy", id: 13 },
      { skill: "Wear a Lifejacket", id: 14 },
      { skill: "Check the Ice", id: 15 },
      { skill: "Swim to Survive", id: 16 },
    ]
  }
];


export const swimmer3Skills = swimmer3SkillGroups.flatMap(group => group.skills);

// Swimmer 3 checkboxes
export const swimmer3CheckboxPositions = [
  // Left side of column 3 - Entries and Exits
  { id: 1, x: 215, y: 354 },   // Kneeling dive into deep water (DO NOT CHANGE)
  { id: 2, x: 215, y: 341 },   // Forward roll entry into deep water (DO NOT CHANGE)
  
  // Surface Support
  { id: 3, x: 215, y: 313 },   // Tread water 30 sec. (DO NOT CHANGE)
  
  // Underwater Skills
  { id: 4, x: 215, y: 286 },   // Handstand in shallow water
  { id: 5, x: 215, y: 274 },   // Front somersault (in water)
  
  // Swim to Survive® Skills
  { id: 6, x: 215, y: 248 },   // Jump into deep water, tread 30 sec., and swim/kick 25 m
  
  // Movement / Swimming Skills
  { id: 7, x: 215, y: 212 },   // Flutter kick on back 5 m; reverse direction and flutter kick on front 5 m
  { id: 8, x: 215, y: 189 },   // Flutter kick on front 5 m; reverse direction and flutter kick on back 5 m
  { id: 9, x: 215, y: 166 },   // Whip kick on back 10 m
  { id: 10, x: 215, y: 152 },  // Front crawl 15 m
  { id: 11, x: 215, y: 140 },  // Back crawl 15 m
  
  // Fitness
  { id: 12, x: 215, y: 113 },   // Interval training: 4 x 15 m flutter kick with 20 sec. rests
  
  // Water Smart® Education
  { id: 13, x: 215, y: 75 },   // Swim with a Buddy
  { id: 14, x: 215, y: 64 },   // Wear a Lifejacket
  { id: 15, x: 215, y: 52 },   // Check the Ice
  { id: 16, x: 215, y: 40 },   // Swim to Survive
];

// Swimmer 3 highlight positions
export const swimmer3HighlightPositions = [
  // Left side - Entries and Exits
  { id: 1, x: 215, y: 354, width: 165, height: 10 },  // Kneeling dive into deep water
  { id: 2, x: 215, y: 341, width: 165, height: 10 },  // Forward roll entry into deep water
  
  // Surface Support
  { id: 3, x: 215, y: 313, width: 165, height: 10 },  // Tread water 30 sec.
  
  // Underwater Skills
  { id: 4, x: 215, y: 286, width: 165, height: 10 },  // Handstand in shallow water
  { id: 5, x: 215, y: 274, width: 165, height: 10 },  // Front somersault (in water)
  
  // Swim to Survive® Skills (wraps to 2 lines)
  { id: 6, x: 215, y: 238, width: 165, height: 22 },  // Jump into deep water, tread 30 sec., and swim/kick 25 m
  
  // Movement / Swimming Skills (wraps to 2-3 lines)
  { id: 7, x: 215, y: 198, width: 165, height: 22 },  // Flutter kick on back 5 m; reverse direction and flutter kick on front 5 m
  { id: 8, x: 215, y: 175, width: 165, height: 22 },  // Flutter kick on front 5 m; reverse direction and flutter kick on back 5 m
  { id: 9, x: 215, y: 163, width: 165, height: 10 },  // Whip kick on back 10 m
  { id: 10, x: 215, y: 152, width: 165, height: 10 }, // Front crawl 15 m
  { id: 11, x: 215, y: 140, width: 165, height: 10 }, // Back crawl 15 m
  
  // Fitness (wraps to 2 lines)
  { id: 12, x: 215, y: 103, width: 165, height: 22 }, // Interval training: 4 x 15 m flutter kick with 20 sec. rests
  
  // Water Smart® Education
  { id: 13, x: 215, y: 75, width: 165, height: 10 },  // Swim with a Buddy
  { id: 14, x: 215, y: 64, width: 165, height: 10 },  // Wear a Lifejacket
  { id: 15, x: 215, y: 52, width: 165, height: 10 },  // Check the Ice
  { id: 16, x: 215, y: 40, width: 165, height: 10 },  // Swim to Survive
];