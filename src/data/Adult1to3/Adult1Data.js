export const adult1SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Enter and exit shallow water", id: 1 },
      { skill: "Jump into deep water, return and exit", id: 2 },
      { skill: "Sideways roll entry wearing lifejacket", id: 3 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Tread water 30 sec. wearing lifejacket",
        mustSee: [
          "Make sure your arms are always moving back and forth",
          "Make sure your legs are always kicking big, like you're riding a bike",
          "Ensure your mouth and nose is always above the surface the whole time",
          "Make sure your body is vertical and [add comment about arms/legs]"
        ],
        id: 4 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Hold breath underwater 5–10 sec.", id: 5 },
      { skill: "Submerge and exhale 5–10 times", id: 6 },
      { skill: "Open eyes underwater", id: 7 },
      { skill: "Recover object from bottom in chest-deep water", id: 8 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Wearing lifejacket, jump into deep water, tread 30 sec. and swim/kick on back 5–10 m",
        id: 9 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Float on front",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are straight and at the top of the water",
          "Ensure your whole face in the water and blow bubbles",
          "Make sure to put your whole face in the water and your body is at the surface in a star position"
        ],
        id: 10 
      },
      { 
        skill: "Float on back",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are straight and at the top of the water",
          "Ensure your ears are in the water and your whole body is near the surface of the water"
        ],
        id: 11 
      },
      { 
        skill: "Roll laterally front to back and back to front",
        mustSee: [
          "When rolling onto your back make sure your tummy is at the top of the water right away",
          "When rolling onto your front, make sure you put your whole face in the water and blow bubbles",
          "Make sure your body stays horizontal"
        ],
        id: 12 
      },
      { 
        skill: "Glide on front 3–5 m",
        mustSee: [
          "Make sure your legs are straight and together at the top of the water",
          "Make sure you put your entire face in the water and blow bubbles",
          "Have a streamlined body position by having your arms extended beyond your head"
        ],
        id: 13 
      },
      { 
        skill: "Glide on back 3–5 m",
        mustSee: [
          "Make sure your arms are at your side",
          "Make sure your legs are straight and touching at the top of the water",
          "Ensure your ears are in the water and your whole body is near the surface of the water"
        ],
        id: 14 
      },
      { 
        skill: "Glide on side 3–5 m",
        mustSee: [
          "Make sure your body is on its side, with your bottom arm extended beyond your head and your top arm by your side to maintain a streamlined body position"
        ],
        id: 15 
      },
      { 
        skill: "Flutter kick on front 10–15 m",
        id: 16 
      },
      { 
        skill: "Flutter kick on back 10–15 m",
        mustSee: [
          "Ensure that your legs are always kicking up and down continuously",
          "Ensure your ears are in the water, tummy up, and you are kicking up and down at the surface of the water to maintain a streamlined body position"
        ],
        id: 17 
      },
      { 
        skill: "Flutter kick on side 10–15 m",
        mustSee: [
          "Ensure you have a continuous flutter kick",
          "Make sure your body is on its side, with your bottom arm extended beyond your head and your top arm by your side to maintain a streamlined body position"
        ],
        id: 18 
      },
      { 
        skill: "Whip kick (in vertical position) with lifejacket 15–30 sec.",
        mustSee: [
          "Ensure both legs whip with your feet wider than your knees",
          "Make sure your body is vertical and your kick is simultaneous and symmetrical"
        ],
        id: 19 
      },
      { 
        skill: "Front crawl or back crawl 10–15 m",
        mustSee: [
          "Ensure that your arms are always alternating and reaching high out of the water",
          "Ensure both legs are continuously alternating with a slight knee bend",
          "Front: Ensure you are blowing bubbles when your face is in the water and you have a continuous breathing pattern",
          "Front: Remember to keep your body on your front by [add comment about arms/legs]",
          "Back: Ensure your breathing is relaxed",
          "Back: Remember to keep your body on your back by [add comment about arms/legs]"
        ],
        id: 20 
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Interval training: 4 x 9–12 m flutter kick with 10–15 sec. rests",
        id: 21 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Swim with a Buddy", id: 22 },
      { skill: "Wear a Lifejacket", id: 23 },
      { skill: "Check the Ice", id: 24 },
      { skill: "Swim to Survive", id: 25 },
      { skill: "Within Arms' Reach", id: 26 },
    ]
  }
];

export const adult1Skills = adult1SkillGroups.flatMap(group => group.skills);

// Adult 1 checkboxes
export const adult1CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 548 },   // Enter and exit shallow water
  { id: 2, x: 19, y: 538 },   // Jump into deep water, return and exit
  { id: 3, x: 19, y: 526 },   // Sideways roll entry wearing lifejacket
  
  // Surface Support
  { id: 4, x: 19, y: 499 },   // Tread water 30 sec. wearing lifejacket
  
  // Underwater Skills
  { id: 5, x: 19, y: 471 },   // Hold breath underwater 5–10 sec.
  { id: 6, x: 19, y: 460 },   // Submerge and exhale 5–10 times
  { id: 7, x: 19, y: 448 },   // Open eyes underwater
  { id: 8, x: 19, y: 436 },   // Recover object from bottom in chest-deep water
  
  // Swim to Survive® Skills
  { id: 9, x: 19, y: 398 },   // Wearing lifejacket, jump into deep water, tread 30 sec. and swim/kick on back 5–10 m
  
  // Movement / Swimming Skills
  { id: 10, x: 19, y: 348 },  // Float on front
  { id: 11, x: 19, y: 336 },  // Float on back
  { id: 12, x: 19, y: 325 },  // Roll laterally front to back and back to front
  { id: 13, x: 19, y: 303 },  // Glide on front 3–5 m
  { id: 14, x: 19, y: 291 },  // Glide on back 3–5 m
  { id: 15, x: 19, y: 279 },  // Glide on side 3–5 m
  { id: 16, x: 19, y: 268 },  // Flutter kick on front 10–15 m
  { id: 17, x: 19, y: 257 },  // Flutter kick on back 10–15 m
  { id: 18, x: 19, y: 245 },  // Flutter kick on side 10–15 m
  { id: 19, x: 19, y: 234 },  // Whip kick (in vertical position) with lifejacket 15–30 sec.
  { id: 20, x: 19, y: 211 },  // Front crawl or back crawl 10–15 m
  
  // Fitness
  { id: 21, x: 19, y: 183 },   // Interval training: 4 x 9–12 m flutter kick with 10–15 sec. rests
  
  // Water Smart® Education
  { id: 22, x: 19, y: 145 },   // Swim with a Buddy
  { id: 23, x: 19, y: 134 },  // Wear a Lifejacket (continues on right column)
  { id: 24, x: 19, y: 122 },  // Check the Ice
  { id: 25, x: 19, y: 111 },  // Swim to Survive
  { id: 26, x: 19, y: 99 },  // Within Arms' Reach
];

// Adult 1 highlight positions
export const adult1HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 19, y: 548, width: 165, height: 10 },   // Enter and exit shallow water
  { id: 2, x: 19, y: 538, width: 165, height: 10 },   // Jump into deep water, return and exit
  { id: 3, x: 19, y: 526, width: 165, height: 10 },   // Sideways roll entry wearing lifejacket
  
  // Surface Support
  { id: 4, x: 19, y: 499, width: 165, height: 10 },   // Tread water 30 sec. wearing lifejacket
  
  // Underwater Skills
  { id: 5, x: 19, y: 471, width: 165, height: 10 },   // Hold breath underwater 5–10 sec.
  { id: 6, x: 19, y: 460, width: 165, height: 10 },   // Submerge and exhale 5–10 times
  { id: 7, x: 19, y: 448, width: 165, height: 10 },   // Open eyes underwater
  { id: 8, x: 19, y: 426, width: 165, height: 22 },   // Recover object from bottom in chest-deep water
  
  // Swim to Survive® Skills
  { id: 9, x: 19, y: 378, width: 165, height: 33 },   // Wearing lifejacket, jump into deep water, tread 30 sec. and swim/kick on back 5–10 m
  
  // Movement / Swimming Skills
  { id: 10, x: 19, y: 348, width: 165, height: 10 },  // Float on front
  { id: 11, x: 19, y: 336, width: 165, height: 10 },  // Float on back
  { id: 12, x: 19, y: 315, width: 165, height: 22 },  // Roll laterally front to back and back to front
  { id: 13, x: 19, y: 303, width: 165, height: 10 },  // Glide on front 3–5 m
  { id: 14, x: 19, y: 291, width: 165, height: 10 },  // Glide on back 3–5 m
  { id: 15, x: 19, y: 279, width: 165, height: 10 },  // Glide on side 3–5 m
  { id: 16, x: 19, y: 268, width: 165, height: 10 },  // Flutter kick on front 10–15 m
  { id: 17, x: 19, y: 257, width: 165, height: 10 },  // Flutter kick on back 10–15 m
  { id: 18, x: 19, y: 245, width: 165, height: 10 },  // Flutter kick on side 10–15 m
  { id: 19, x: 19, y: 224, width: 165, height: 22 },  // Whip kick (in vertical position) with lifejacket 15–30 sec.
  { id: 20, x: 19, y: 211, width: 165, height: 10 },  // Front crawl or back crawl 10–15 m
  
  // Fitness
  { id: 21, x: 19, y: 173, width: 165, height: 22 },   // Interval training: 4 x 9–12 m flutter kick with 10–15 sec. rests
  
  // Water Smart® Education
  { id: 22, x: 19, y: 145, width: 165, height: 10 },   // Swim with a Buddy
  { id: 23, x: 19, y: 134, width: 165, height: 10 },  // Wear a Lifejacket (continues on right column)
  { id: 24, x: 19, y: 122, width: 165, height: 10 },  // Check the Ice
  { id: 25, x: 19, y: 111, width: 165, height: 10 },  // Swim to Survive
  { id: 26, x: 19, y: 99, width: 165, height: 10 },  // Within Arms' Reach
];