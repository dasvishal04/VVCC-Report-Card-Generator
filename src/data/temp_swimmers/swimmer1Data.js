export const swimmer1SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Enter and exit shallow water", id: 1 },
      { skill: "Jump into deep water", id: 2 },
      { skill: "Jump into deep water wearing lifejacket", id: 3 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Tread water 30 sec. wearing lifejacket",
        mustSee: [
          "Make sure your arms are always moving",
          "Make sure your legs are always moving, like a bike",
          "Ensure your mouth and nose is always above the surface",
          "Make sure your body is vertical and head movement about"
        ],
        id: 4 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Hold breath underwater 5 sec.", id: 5 },
      { skill: "Submerge and exhale 5 times", id: 6 },
      { skill: "Open eyes underwater", id: 7 },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Float on front 5 sec.",
        mustSee: [
          "Make sure your arms are at the top of the water and not like a star",
          "Make sure your legs are straight and at the top of the water",
          "Ensure your whole face is in the water and blow bubbles",
          "Make sure to put your whole face in the water, tummy up and look at the surface in a star position"
        ],
        id: 8 
      },
      { 
        skill: "Float on back 5 sec.",
        mustSee: [
          "Ensure your ears are in the water and your whole body is at the surface of the water"
        ],
        id: 9 
      },
      { 
        skill: "Roll laterally front to back and back to front",
        mustSee: [
          "When rolling onto your back make sure your tummy is at the top of the water right away",
          "When rolling onto your front, make sure you put your face in the water and blow bubbles",
          "Make sure your body stays horizontal"
        ],
        id: 10 
      },
      { 
        skill: "Glide on front 3 m",
        mustSee: [
          "Make sure your legs are straight and together at the top of the water",
          "Make sure you put your entire face in the water and blow bubbles",
          "Have a streamlined body position by having your arms extended beyond your head"
        ],
        id: 11 
      },
      { 
        skill: "Glide on back 3 m",
        mustSee: [
          "Make sure your arms are at your sides",
          "Make sure your legs are straight and together at the top of the water",
          "Ensure your ears are in the water, and your whole body is at the surface of the water"
        ],
        id: 12 
      },
      { 
        skill: "Glide on side 3 m",
        mustSee: [
          "Make sure your body is on its side, with your bottom arm extended beyond your head and your top arm by your side to maintain a streamlined body position"
        ],
        id: 13 
      },
      { 
        skill: "Flutter kick on front 5 m",
        mustSee: [
          "Ensure that your legs are always moving up and down continuously",
          "Ensure that your entire face is in the water and blow bubbles",
          "Ensure your arms are extended beyond your head and down at the surface of the water to maintain a streamlined body position"
        ],
        id: 14 
      },
      { 
        skill: "Flutter kick on back 5 m",
        mustSee: [
          "Ensure that your legs are always moving up and down continuously",
          "Ensure your ears are in the water, tummy up, and your arms are down at the surface of the water to maintain a streamlined body position"
        ],
        id: 15 
      },
      { 
        skill: "Front crawl 5 m wearing lifejacket",
        mustSee: [
          "Make sure your arms are alternating and arms that exit",
          "Make sure both legs are continuously kicking",
          "Remember to stay relaxed on your front and keep arms and legs moving continuously"
        ],
        id: 16 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Wear a Lifejacket", id: 17 },
      { skill: "Look Before You Leap", id: 18 },
      { skill: "Swim to Survive", id: 19 },
      { skill: "Within Arms' Reach", id: 20 },
    ]
  }
];

export const swimmer1Skills = swimmer1SkillGroups.flatMap(group => group.skills);

export const swimmer1CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 18, y: 548 },   // Enter and exit shallow water
  { id: 2, x: 18, y: 536 },   // Jump into deep water
  { id: 3, x: 18, y: 524 },   // Jump into deep water wearing lifejacket
  
  // Surface Support
  { id: 4, x: 18, y: 500 },   // Tread water 30 sec. wearing lifejacket
  
  // Underwater Skills
  { id: 5, x: 18, y: 472 },   // Hold breath underwater 5 sec.
  { id: 6, x: 18, y: 460 },   // Submerge and exhale 5 times
  { id: 7, x: 18, y: 448 },   // Open eyes underwater
  
  // Movement / Swimming Skills
  { id: 8, x: 18, y: 420 },   // Float on front 5 sec.
  { id: 9, x: 18, y: 409 },   // Float on back 5 sec.
  { id: 10, x: 18, y: 398 },  // Roll laterally front to back and back to front
  { id: 11, x: 18, y: 376 },  // Glide on front 3 m
  { id: 12, x: 18, y: 364 },  // Glide on back 3 m
  { id: 13, x: 18, y: 352 },  // Glide on side 3 m
  { id: 14, x: 18, y: 340 },  // Flutter kick on front 5 m
  { id: 15, x: 18, y: 329 },  // Flutter kick on back 5 m
  { id: 16, x: 18, y: 318 },  // Front crawl 5 m wearing lifejacket
  
  // Water Smart® Education
  { id: 17, x: 18, y: 290 },  // Wear a Lifejacket
  { id: 18, x: 18, y: 279 },  // Look Before You Leap
  { id: 19, x: 18, y: 267 },  // Swim to Survive
  { id: 20, x: 18, y: 255 },  // Within Arms' Reach
];

export const swimmer1HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 18, y: 548, width: 170, height: 14 },   // Enter and exit shallow water
  { id: 2, x: 18, y: 536, width: 170, height: 14 },   // Jump into deep water
  { id: 3, x: 18, y: 524, width: 170, height: 14 },   // Jump into deep water wearing lifejacket
  
  // Surface Support
  { id: 4, x: 18, y: 497, width: 170, height: 14 },   // Tread water 30 sec. wearing lifejacket
  
  // Underwater Skills
  { id: 5, x: 18, y: 472, width: 170, height: 14 },   // Hold breath underwater 5 sec.
  { id: 6, x: 18, y: 460, width: 170, height: 14 },   // Submerge and exhale 5 times
  { id: 7, x: 18, y: 448, width: 170, height: 14 },   // Open eyes underwater
  
  // Movement / Swimming Skills
  { id: 8, x: 18, y: 420, width: 170, height: 14 },   // Float on front 5 sec.
  { id: 9, x: 18, y: 409, width: 170, height: 14 },   // Float on back 5 sec.
  { id: 10, x: 18, y: 388, width: 170, height: 22 },  // Roll laterally front to back and back to front (2 lines)
  { id: 11, x: 18, y: 376, width: 170, height: 14 },  // Glide on front 3 m
  { id: 12, x: 18, y: 364, width: 170, height: 14 },  // Glide on back 3 m
  { id: 13, x: 18, y: 352, width: 170, height: 14 },  // Glide on side 3 m
  { id: 14, x: 18, y: 340, width: 170, height: 14 },  // Flutter kick on front 5 m
  { id: 15, x: 18, y: 329, width: 170, height: 14 },  // Flutter kick on back 5 m
  { id: 16, x: 18, y: 318, width: 170, height: 14 },  // Front crawl 5 m wearing lifejacket
  
  // Water Smart® Education
  { id: 17, x: 18, y: 290, width: 170, height: 14 },  // Wear a Lifejacket
  { id: 18, x: 18, y: 279, width: 170, height: 14 },  // Look Before You Leap
  { id: 19, x: 18, y: 267, width: 170, height: 14 },  // Swim to Survive
  { id: 20, x: 18, y: 255, width: 170, height: 14 },  // Within Arms' Reach
];