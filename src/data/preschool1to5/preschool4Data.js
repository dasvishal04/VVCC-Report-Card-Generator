export const preschool4SkillGroups = [
  {
    category: "Entries and Exits",
    skills: [
      { skill: "Jump into deep water, return and exit", id: 1 },
      { skill: "Sideways entry", id: 2 },
    ]
  },
  {
    category: "Surface Support",
    skills: [
      { 
        skill: "Tread water 10 sec. wearing lifejacket",
        mustSee: [
          "Make sure your hands are always moving back and forth",
          "Make sure your legs are always kicking big, like you're riding a bike",
          "Ensure your mouth and nose is always above the surface the whole time",
          "Make sure your body is vertical and [add comment about arms/legs]"
        ],
        id: 3 
      },
    ]
  },
  {
    category: "Underwater Skills",
    skills: [
      { skill: "Open eyes underwater", id: 4 },
      { skill: "Recover item in chest-deep water", id: 5 },
    ]
  },
  {
    category: "Swim to Survive® Skills",
    skills: [
      { 
        skill: "Wearing a lifejacket, sideways entry into deep water; tread 15 sec.; swim/kick 5 m",
        id: 6 
      },
      { 
        skill: "Front float; roll to back; swim 5 m",
        mustSee: [
          "Make sure your arms are at the top of the water and out like a star",
          "Make sure your legs are at the top of the water",
          "Ensure your ears are in the water and your whole body is near the surface of the water and start kicking"
        ],
        id: 7 
      },
    ]
  },
  {
    category: "Movement / Swimming Skills",
    skills: [
      { 
        skill: "Glide on side 3 m",
        mustSee: [
          "Make sure your body is on its side, with your bottom arm extended beyond your head and your top arm by your side to maintain a streamlined body position"
        ],
        id: 8 
      },
      { 
        skill: "Flutter kick on front 7 m; on back 7 m; on side 5 m",
        mustSee: [
          "Ensure that your legs are always kicking up and down continuously",
          "Ensure that your entire face is in the water blowing bubbles (front)",
          "Ensure your arms are extended beyond your head, kicking up and down at the surface of the water to maintain a streamlined body position (front)",
          "Ensure your ears are in the water, tummy up, and you are kicking up and down at the surface of the water to maintain a streamlined body position (back)",
          "Ensure you have a continuous flutter kick (side)",
          "Make sure your body is on its side, with your bottom arm extended beyond your head and your top arm by your side to maintain a streamlined body position (side)"
        ],
        id: 9 
      },
      { 
        skill: "Front crawl 5 m wearing lifejacket",
        mustSee: [
          "Make sure your arms are always alternating and reaching high out of the water",
          "Make sure both legs are continuously kicking",
          "Remember to stay relaxed on your front and keep arms and legs moving continuously"
        ],
        id: 10 
      },
    ]
  },
  {
    category: "Water Smart® Education",
    skills: [
      { skill: "Within Arms' Reach", id: 11 },
      { skill: "Wear a Lifejacket", id: 12 },
    ]
  }
];

export const preschool4Skills = preschool4SkillGroups.flatMap(group => group.skills);

// Preschool 4 checkboxes
export const preschool4CheckboxPositions = [
  // Entries and Exits
  { id: 1, x: 217, y: 281 },   // Jump into deep water, return and exit
  { id: 2, x: 217, y: 270 },   // Sideways entry
  
  // Surface Support
  { id: 3, x: 217, y: 242 },   // Tread water 10 sec. wearing lifejacket
  
  // Underwater Skills
  { id: 4, x: 217, y: 216 },   // Open eyes underwater
  { id: 5, x: 217, y: 204 },   // Recover item in chest-deep water
  
  // Swim to Survive® Skills
  { id: 6, x: 217, y: 177 },   // Wearing a lifejacket, sideways entry into deep water; tread 15 sec.; swim/kick 5 m
  { id: 7, x: 217, y: 154 },   // Front float; roll to back; swim 5 m
  
  // Movement / Swimming Skills
  { id: 8, x: 217, y: 126 },   // Glide on side 3 m
  { id: 9, x: 217, y: 115 },   // Flutter kick on front 7 m; on back 7 m; on side 5 m
  { id: 10, x: 217, y: 92 },  // Front crawl 5 m wearing lifejacket
  
  // Water Smart® Education
  { id: 11, x: 217, y: 66 },  // Within Arms' Reach
  { id: 12, x: 217, y: 53 },  // Wear a Lifejacket
];

// Preschool 4 highlight positions
export const preschool4HighlightPositions = [
  // Entries and Exits
  { id: 1, x: 217, y: 281, width: 165, height: 10 },   // Jump into deep water, return and exit
  { id: 2, x: 217, y: 270, width: 165, height: 10 },   // Sideways entry
  
  // Surface Support
  { id: 3, x: 217, y: 242, width: 165, height: 10 },   // Tread water 10 sec. wearing lifejacket
  
  // Underwater Skills
  { id: 4, x: 217, y: 216, width: 165, height: 10 },   // Open eyes underwater
  { id: 5, x: 217, y: 204, width: 165, height: 10 },   // Recover item in chest-deep water
  
  // Swim to Survive® Skills
  { id: 6, x: 217, y: 167, width: 165, height: 22 },   // Wearing a lifejacket, sideways entry into deep water; tread 15 sec.; swim/kick 5 m
  { id: 7, x: 217, y: 154, width: 165, height: 10 },   // Front float; roll to back; swim 5 m
  
  // Movement / Swimming Skills
  { id: 8, x: 217, y: 126, width: 165, height: 10 },   // Glide on side 3 m
  { id: 9, x: 217, y: 105, width: 165, height: 22 },   // Flutter kick on front 7 m; on back 7 m; on side 5 m
  { id: 10, x: 217, y: 92, width: 165, height: 10 },   // Front crawl 5 m wearing lifejacket
  
  // Water Smart® Education
  { id: 11, x: 217, y: 66, width: 165, height: 10 },   // Within Arms' Reach
  { id: 12, x: 217, y: 53, width: 165, height: 10 },   // Wear a Lifejacket
];