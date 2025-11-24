export const swimmer2SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Jump into deep water, return and exit", id: 1 },
      { skill: "Sideways entry wearing lifejacket", id: 2 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { skill: "Tread water 15 sec.", id: 3 },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Recover object from bottom in chest-deep water", id: 4 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Wearing lifejacket, jump into deep water, tread 30 sec., and swim/kick 15 m",
        id: 5 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Flutter kick on front 10 m",
        mustSee: [
          "Make sure both legs are continuously kicking up and down with a slight knee bend",
          "Ensure that your entire face is in the water blowing bubbles",
          "Ensure your arms are extended beyond your head, kicking up and down at the surface of the water to maintain a streamlined body position"
        ],
        id: 6
      },
      { 
        skill: "Flutter kick on back 10 m",
        mustSee: [
          "Make sure to keep your arms by your side",
          "Make sure both legs are continuously kicking up and down with a slight knee bend",
          "Ensure your ears are in the water, tummy up, and you are kicking up and down at the surface of the water to maintain a streamlined body position"
        ],
        id: 7
      },
      { 
        skill: "Flutter kick on side 10 m",
        mustSee: [
          "Ensure you have a continuous flutter kick",
          "Make sure your body is on its side, with your bottom arm extended beyond your head and your top arm by your side to maintain a streamlined body position"
        ],
        id: 8
      },
      { 
        skill: "Whip kick in vertical position 30 sec.",
        mustSee: [
          "Ensure both legs whip with your feet wider than your knees",
          "Make sure your body is vertical and your kick is simultaneous and symmetrical"
        ],
        id: 9
      },
      { 
        skill: "Front crawl 10 m",
        mustSee: [
          "Ensure that your arms are always alternating reaching out of the water",
          "Ensure both legs are continuously kicking",
          "Ensure you are blowing bubbles when your face is in the water and you have a continuous breathing pattern",
          "Remember to keep your body on your front"
        ],
        id: 10
      },
      { 
        skill: "Back crawl 10 m",
        mustSee: [
          "Ensure your arms are always alternating reaching out of the water",
          "Ensure both legs are alternating with a slight knee bend",
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
        skill: "Interval training: 4 x 5 m flutter kick with 20 sec. rests",
        id: 12 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { 
        skill: "Swim with a Buddy",
        id: 13
      },
      { 
        skill: "Wear a Lifejacket",
        id: 14
      },
      { 
        skill: "Check the Ice",
        id: 15
      },
      { 
        skill: "Swim to Survive",
        id: 16
      },
    ]
  }
];

export const swimmer2Skills = swimmer2SkillGroups.flatMap(group => group.skills);

// Swimmer 2 checkboxes - Based on manual positioning
export const swimmer2CheckboxPositions = [
  // Left side of column 2 - Entries and Exits
  { id: 1, x: 18, y: 202 },   // Jump into deep water, return and exit
  { id: 2, x: 18, y: 190 },   // Sideways entry wearing lifejacket
  
  // Surface Support
  { id: 3, x: 18, y: 163 },   // Tread water 15 sec.
  
  // Underwater Skills
  { id: 4, x: 18, y: 136 },   // Recover object from bottom
  
  // Swim to Survive® Skills
  { id: 5, x: 18, y: 97 },    // Wearing lifejacket, jump...
  
  // Movement / Swimming Skills
  { id: 6, x: 18, y: 60 },    // Flutter kick on front 10 m
  { id: 7, x: 18, y: 48 },    // Flutter kick on back 10 m
  
  // Right side of column 2 (Swimmer 2 continued)
  { id: 8, x: 215, y: 555 },  // Flutter kick on side 10 m
  { id: 9, x: 215, y: 542 },  // Whip kick in vertical position 30 sec.
  { id: 10, x: 215, y: 522 }, // Front crawl 10 m
  { id: 11, x: 215, y: 510 }, // Back crawl 10 m (12 units down from id 10: 522-12=510)
  
  // Fitness (27 units down for category gap)
  { id: 12, x: 215, y: 483 }, // Interval training (510-27=483)
  
  // Water Smart® Education (36 units down for category gap)
  { id: 13, x: 215, y: 445 }, // Swim with a Buddy (483-36=447)
  { id: 14, x: 215, y: 432 }, // Wear a Lifejacket (12 units down)
  { id: 15, x: 215, y: 421 }, // Check the Ice (12 units down)
  { id: 16, x: 215, y: 409 }, // Swim to Survive (12 units down)
];

export const swimmer2HighlightPositions = [
  // Left side - Entries and Exits
  { id: 1, x: 18, y: 202, width: 170, height: 10 },  // Jump into deep water, return and exit
  { id: 2, x: 18, y: 190, width: 170, height: 10 },  // Sideways entry wearing lifejacket
  
  // Surface Support
  { id: 3, x: 18, y: 163, width: 170, height: 10 },  // Tread water 15 sec.
  
  // Underwater Skills
  { id: 4, x: 18, y: 126, width: 170, height: 22 },  // Recover object from bottom in chest-deep water
  
  // Swim to Survive® Skills (2 lines of text)
  { id: 5, x: 18, y: 85, width: 170, height: 22 },   // Wearing lifejacket, jump into deep water, tread 30 sec., and swim/kick 15 m
  
  // Movement / Swimming Skills
  { id: 6, x: 18, y: 60, width: 170, height: 10 },   // Flutter kick on front 10 m
  { id: 7, x: 18, y: 48, width: 170, height: 10 },   // Flutter kick on back 10 m
  
  // Right side (Swimmer 2 continued) - Movement / Swimming Skills
  { id: 8, x: 215, y: 555, width: 165, height: 10 }, // Flutter kick on side 10 m
  { id: 9, x: 215, y: 532, width: 165, height: 22 }, // Whip kick in vertical position 30 sec. with aid (2 lines)
  { id: 10, x: 215, y: 522, width: 165, height: 10 }, // Front crawl 10 m
  { id: 11, x: 215, y: 510, width: 165, height: 10 }, // Back crawl 10 m
  
  // Fitness (2 lines of text)
  { id: 12, x: 215, y: 473, width: 165, height: 22 }, // Interval training: 4 x 5 m flutter kick with 20 sec. rests
  
  // Water Smart® Education
  { id: 13, x: 215, y: 440, width: 165, height: 10 }, // Swim with a Buddy
  { id: 14, x: 215, y: 432, width: 165, height: 10 }, // Wear a Lifejacket
  { id: 15, x: 215, y: 421, width: 165, height: 10 }, // Check the Ice
  { id: 16, x: 215, y: 409, width: 165, height: 10 }, // Swim to Survive
];