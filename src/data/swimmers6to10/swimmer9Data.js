export const swimmer9SkillGroups = [
  {
    category: "H₂O Proficiency",
    skills: [
      { 
        skill: "Entries with aids – at least 2",
        id: 1 
      },
      { 
        skill: "Head-up swim (25 m) & scull in ready position",
        mustSee: [
          "When going into ready position, make sure your toes stay near the surface of the water while sculling"
        ],
        id: 2 
      },
      { 
        skill: "Defence methods – front, side & rear",
        mustSee: [
          "Always ensure your own safety as a rescuer by using reverse and ready, swimming away, or submerging from victims who are trying to grasp you"
        ],
        id: 3 
      },
      { 
        skill: "Eggbeater kick – travel, change direction & height",
        mustSee: [
          "Ensure both legs are alternating in semi-circles towards the middle, and keep feet wider than knees"
        ],
        id: 4 
      },
      { 
        skill: "Carry object (4.5 kg or 10 lbs) – 25 m",
        mustSee: [
          "Ensure your head is above the water and that you use a lifesaving kick"
        ],
        id: 5 
      },
      { 
        skill: "Remove unconscious victim",
        mustSee: [
          "When doing a removal, make sure you prioritize safety and use good judgement to select an effective removal for the victim you're rescuing",
          "Remember to always give your bystander clear direction"
        ],
        id: 6 
      },
      { 
        skill: "Surface dives, search to recover object",
        id: 7 
      },
      { 
        skill: "Turn & support victim face up – shallow water",
        mustSee: [
          "When recovering your victim, ensure your victim's face is supported above the water the entire time to prevent water from entering the airway"
        ],
        id: 8 
      },
      { 
        skill: "Front crawl – 100 m",
        mustSee: [
          "Arms are always alternating with elbows higher than hands, reach forward and pull down past your hip",
          "Kick is continuous and initiated from your hips",
          "Always breathe to the side and exhale in the water",
          "Body is horizontal on its front"
        ],
        id: 9 
      },
      { 
        skill: "Back crawl – 100 m",
        mustSee: [
          "Arms are straight as they alternate, enter the water beyond shoulders and pull down through the water with bent arms to your thighs",
          "Keep your legs and feet relaxed as you kick",
          "Breathing is relaxed",
          "Body is relaxed on its back"
        ],
        id: 10 
      },
      { 
        skill: "Breaststroke – 100 m",
        mustSee: [
          "Both arms pull towards chest at the same time with elbow higher than hands, then extend beyond head",
          "Both legs kick at the same time with knees close and feet wide apart",
          "Ensure always exhaling when face is in the water",
          "Body is always on its front and horizontal, pull arms towards chest, breathe, kick then glide with arms extended beyond head and legs straight"

        ],
        id: 11 
      },
      { 
        skill: "Fitness training – 600 m workout (3 times)",
        id: 12 
      },
      { 
        skill: "Swim 300 m in 9 min.",
        mustSee: [
          "To meet the 100m in 3 mins, make sure strengthen your swim stroke to meet proper technique and build stamina"
        ],
        id: 13 
      },
    ]
  },
  {
    category: "First Aid",
    skills: [
      { 
        skill: "Care for bone or joint injury",
        mustSee: [
          "Remember to check the environment for hazards, your victim's responsiveness, and call EMS immediately if necessary",
          "Remember to minimize movement of the injury"
        ],
        id: 14 
      },
      { 
        skill: "Care for respiratory emergency – asthma or allergic reaction",
        mustSee: [
          "Remember to check the environment for hazards, your victim's responsiveness, and call EMS immediately if necessary",
          "Remember to place your victim in a comfortable position and assist your victim to find and use their medication"
        ],
        id: 15 
      },
    ]
  },
  {
    category: "Recognition & Rescue",
    skills: [
      { 
        skill: "Locate & describe submerged object",
        id: 16 
      },
      { 
        skill: "Rescue with towing aid – 20 m",
        mustSee: [
          "Remember to call for help before entering the water",
          "Make sure to keep your eyes on the victim by entering the water with a stride jump and swimming to the victim using a head up approach",
          "Remember to always communicate with your victim throughout the rescue by providing reassurance and appropriate care"
        ],
        id: 17 
      },
    ]
  }
];

export const swimmer9Skills = swimmer9SkillGroups.flatMap(group => group.skills);

// Swimmer 9 checkboxes - Following the pattern from previous swimmers
export const swimmer9CheckboxPositions = [
  // H₂O Proficiency
  { id: 1, x: 415, y: 206 },    // Entries with aids – at least 2
  { id: 2, x: 415, y: 195 },    // Head-up swim (25 m) & scull in ready position
  { id: 3, x: 415, y: 173 },    // Defence methods – front, side & rear
  { id: 4, x: 415, y: 161 },    // Eggbeater kick – travel, change direction & height
  { id: 5, x: 415, y: 139 },    // Carry object (4.5 kg or 10 lbs) – 25 m
  { id: 6, x: 415, y: 127 },    // Remove unconscious victim
  { id: 7, x: 415, y: 115 },    // Surface dives, search to recover object
  { id: 8, x: 415, y: 103 },    // Turn & support victim face up – shallow water
  { id: 9, x: 415, y: 82 },    // Front crawl – 100 m
  { id: 10, x: 415, y: 70 },   // Back crawl – 100 m
  
  // Right side (Swimmer 9 continued)
  { id: 11, x: 613, y: 559 },  // Breaststroke – 100 m
  { id: 12, x: 613, y: 547 },  // Fitness training – 600 m workout (3 times)
  { id: 13, x: 613, y: 525 },  // Swim 300 m in 9 min.
  
  // First Aid
  { id: 14, x: 613, y: 497 },  // Care for bone or joint injury
  { id: 15, x: 613, y: 487 },  // Care for respiratory emergency – asthma or allergic reaction
  
  // Recognition & Rescue
  { id: 16, x: 613, y: 447 },  // Locate & describe submerged object
  { id: 17, x: 613, y: 435 },  // Rescue with towing aid – 20 m
];

// Swimmer 9 highlight positions
export const swimmer9HighlightPositions = [
  // H₂O Proficiency (left side)
  { id: 1, x: 415, y: 206, width: 165, height: 10 },   // Entries with aids – at least 2
  { id: 2, x: 415, y: 185, width: 165, height: 22 },   // Head-up swim (25 m) & scull in ready position (2 lines)
  { id: 3, x: 415, y: 173, width: 165, height: 10 },   // Defence methods – front, side & rear
  { id: 4, x: 415, y: 151, width: 165, height: 22 },   // Eggbeater kick – travel, change direction & height (2 lines)
  { id: 5, x: 415, y: 139, width: 165, height: 10 },   // Carry object (4.5 kg or 10 lbs) – 25 m
  { id: 6, x: 415, y: 127, width: 165, height: 10 },   // Remove unconscious victim
  { id: 7, x: 415, y: 115, width: 165, height: 10 },   // Surface dives, search to recover object
  { id: 8, x: 415, y: 93, width: 165, height: 22 },   // Turn & support victim face up – shallow water (2 lines)
  { id: 9, x: 415, y: 82, width: 165, height: 10 },    // Front crawl – 100 m
  { id: 10, x: 415, y: 70, width: 165, height: 10 },   // Back crawl – 100 m
  
  // Right side (Swimmer 9 continued)
  { id: 11, x: 613, y: 559, width: 165, height: 10 },  // Breaststroke – 100 m
  { id: 12, x: 613, y: 537, width: 165, height: 22 },  // Fitness training – 600 m workout (3 times) (2 lines)
  { id: 13, x: 613, y: 523, width: 165, height: 10 },  // Swim 300 m in 9 min.
  
  // First Aid
  { id: 14, x: 613, y: 497, width: 165, height: 10 },  // Care for bone or joint injury
  { id: 15, x: 613, y: 474, width: 165, height: 22 },  // Care for respiratory emergency – asthma or allergic reaction (2 lines)
  
  // Recognition & Rescue
  { id: 16, x: 613, y: 447, width: 165, height: 10 },  // Locate & describe submerged object
  { id: 17, x: 613, y: 435, width: 165, height: 10 },  // Rescue with towing aid – 20 m
];