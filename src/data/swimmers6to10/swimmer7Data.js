export const swimmer7SkillGroups = [
  {
    category: "H₂O Proficiency",
    skills: [
      { 
        skill: "Head-up front crawl or breaststroke – 25 m",
        mustSee: [
          "Ensure your eyes are always above the surface of the water",
        ],
        id: 1 
      },
      { 
        skill: "Scull in ready position – 30 sec.",
        mustSee: [
          "Make sure your toes stay near the surface of the water",
          "Ensure you stay in the same spot as you scull, no traveling"
        ],
        id: 2 
      },
      { 
        skill: "Carry object (2.3 kg or 5 lbs) – 15 m",
        mustSee: [
          "Ensure your head is above the water and that you use a lifesaving kick"
        ],
        id: 3 
      },
      { 
        skill: "Foot-first surface dive",
        mustSee: [
          "Make sure you descend vertically and come up to the surface with arms extended above your head"
        ],
        id: 4 
      },
      { skill: "Head-first surface dive", id: 5 },
      { 
        skill: "Lifesaving kick – 25 m",
        mustSee: [
          "For eggbeater, esure both legs are alternating in semi-circles, while keeping feet wider than knees ",
          "For scissor kick have one leg extend forward and other extend back, then squeeze lefs together in a scissor like action",
          "For whip kick, ensure both legs kick at the same time with knees close and feet wide apart"
        ],
        id: 6 
      },
      { skill: "Inflate clothing / use as buoyant assist", id: 7 },
      { skill: "Obstacle swim – 25 m", id: 8 },
      { 
        skill: "Front crawl – 50 m",
        mustSee: [
          "Arms are always alternating with elbows higher than hands, reach forward and pull down past your hip",
          "Kick is continuous and initiated from your hips",
          "Always breathe to the side and exhale in the water",
          "Body is horizontal on its front"
        ],
        id: 9 
      },
      { 
        skill: "Back crawl – 50 m",
        mustSee: [
          "Arms are straight as they alternate, enter the water beyond shoulders and pull down through the water with bent arms to your thighs",
          "Keep your legs and feet relaxed as you kick",
          "Breathing is relaxed",
          "Body is relaxed on its back"
        ],
        id: 10 
      },
      { 
        skill: "Breaststroke – 50 m",
        mustSee: [
          "Both arms pull towards chest at the same time with elbow higher than hands, then extend beyond head",
          "Both legs kick at the same time with knees close and feet wide apart",
          "Ensure always exhaling when face is in the water",
          "Body is always on its front and horizontal, pull arms towards chest, breathe, kick then glide with arms extended beyond head and legs straight"
        ],
        id: 11 
      },
      { 
        skill: "Fitness training – 350 m workout (3 times)",
        id: 12 
      },
      { 
        skill: "Swim 100 m in 3 min.",
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
        skill: "Assess conscious victim",
        mustSee: [
          "Remember to check the environment for hazards, your victim's responsiveness, and any potential areas of bleeding",
          "Be sure to communicate with your victim to gather relevant information"
        ],
        id: 14 
      },
      { 
        skill: "Contacting EMS",
        mustSee: [
          "Remember to include all relevant information including who, what, where and why"
        ],
        id: 15 
      },
      { 
        skill: "Care for external bleeding",
        mustSee: [
          "Remember to check the environment for hazards, establish responsiveness, and bleeding",
          "Ensure you check ABCs, rest and reassure your victim, and apply direct pressure to the injury"
        ],
        id: 16 
      },
    ]
  },
  {
    category: "Recognition & Rescue",
    skills: [
      { 
        skill: "Look & see",
        id: 17 
      },
      { 
        skill: "Victim simulation: weak & non-swimmer",
        mustSee: [
          "Weak swimmers might have some swimming abilities and are usually at the surface of the water, but have difficulty reaching safety",
          "They may require assistance from a rescuer"
        ],
        id: 18 
      },
      { 
        skill: "Victim recognition: weak & non-swimmer",
        mustSee: [
          "Non-swimmers have no swimming abilities and are usually near or under the surface of the water",
          "They require assistance of a rescuer to make it back to safety",
          "Non-swimmers pose danger to the rescuer"
        ],
        id: 19 
      },
      { 
        skill: "Rescue drill: throw aid to target – 30 sec.",
        id: 20 
      },
    ]
  }
];

export const swimmer7Skills = swimmer7SkillGroups.flatMap(group => group.skills);

// Swimmer 7 checkboxes - Following the pattern from previous swimmers
export const swimmer7CheckboxPositions = [
  // H₂O Proficiency
  { id: 1, x: 217, y: 335 },   // Head-up front crawl or breaststroke – 25 m
  { id: 2, x: 217, y: 324 },   // Scull in ready position – 30 sec.
  { id: 3, x: 217, y: 313 },   // Carry object (2.3 kg or 5 lbs) – 15 m
  { id: 4, x: 217, y: 303 },   // Foot-first surface dive
  { id: 5, x: 217, y: 291 },   // Head-first surface dive
  { id: 6, x: 217, y: 279 },   // Lifesaving kick – 25 m
  { id: 7, x: 217, y: 268 },   // Inflate clothing / use as buoyant assist
  { id: 8, x: 217, y: 257 },   // Obstacle swim – 25 m
  { id: 9, x: 217, y: 246 },   // Front crawl – 50 m
  { id: 10, x: 217, y: 235 },  // Back crawl – 50 m
  { id: 11, x: 217, y: 222 },  // Breaststroke – 50 m
  { id: 12, x: 217, y: 210 },  // Fitness training – 350 m workout (3 times)
  { id: 13, x: 217, y: 189 },  // Swim 100 m in 3 min.
  
  // First Aid
  { id: 14, x: 217, y: 162 },  // Assess conscious victim
  { id: 15, x: 217, y: 150 },  // Contacting EMS
  { id: 16, x: 217, y: 136 },  // Care for external bleeding
  
  // Recognition & Rescue
  { id: 17, x: 217, y: 109 },  // Look & see
  { id: 18, x: 217, y: 96 },  // Victim simulation: weak & non-swimmer
  { id: 19, x: 217, y: 84 },  // Victim recognition: weak & non-swimmer
  { id: 20, x: 217, y: 72 },  // Rescue drill: throw aid to target – 30 sec.
];

// Swimmer 7 highlight positions
export const swimmer7HighlightPositions = [
  // H₂O Proficiency
  { id: 1, x: 217, y: 335, width: 165, height: 10 },  // Head-up front crawl or breaststroke – 25 m
  { id: 2, x: 217, y: 324, width: 165, height: 10 },  // Scull in ready position – 30 sec.
  { id: 3, x: 217, y: 313, width: 165, height: 10 },  // Carry object (2.3 kg or 5 lbs) – 15 m
  { id: 4, x: 217, y: 303, width: 165, height: 10 },  // Foot-first surface dive
  { id: 5, x: 217, y: 291, width: 165, height: 10 },  // Head-first surface dive
  { id: 6, x: 217, y: 279, width: 165, height: 10 },  // Lifesaving kick – 25 m
  { id: 7, x: 217, y: 268, width: 165, height: 10 },  // Inflate clothing / use as buoyant assist
  { id: 8, x: 217, y: 257, width: 165, height: 10 },  // Obstacle swim – 25 m
  { id: 9, x: 217, y: 246, width: 165, height: 10 },  // Front crawl – 50 m
  { id: 10, x: 217, y: 235, width: 165, height: 10 }, // Back crawl – 50 m
  { id: 11, x: 217, y: 222, width: 165, height: 10 }, // Breaststroke – 50 m
  { id: 12, x: 217, y: 200, width: 165, height: 22 }, // Fitness training – 350 m workout (3 times) (2 lines)
  { id: 13, x: 217, y: 189, width: 165, height: 10 }, // Swim 100 m in 3 min.
  
  // First Aid
  { id: 14, x: 217, y: 162, width: 165, height: 10 }, // Assess conscious victim
  { id: 15, x: 217, y: 150, width: 165, height: 10 }, // Contacting EMS
  { id: 16, x: 217, y: 136, width: 165, height: 10 }, // Care for external bleeding
  
  // Recognition & Rescue
  { id: 17, x: 217, y: 109, width: 165, height: 10 }, // Look & see
  { id: 18, x: 217, y: 96, width: 165, height: 10 },  // Victim simulation: weak & non-swimmer
  { id: 19, x: 217, y: 84, width: 165, height: 10 },  // Victim recognition: weak & non-swimmer
  { id: 20, x: 217, y: 72, width: 165, height: 10 },  // Rescue drill: throw aid to target – 30 sec.
];