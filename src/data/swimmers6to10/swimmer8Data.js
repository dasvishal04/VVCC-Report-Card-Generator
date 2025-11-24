export const swimmer8SkillGroups = [
  {
    category: "H₂O Proficiency",
    skills: [
      { 
        skill: "Somersault sequence – forward & backward",
        id: 1 
      },
      { 
        skill: "Stride entry & swim head-up 25 m. Ready position",
        id: 2 
      },
      { 
        skill: "Eggbeater kick on back – 25 m",
        mustSee: [
          "Ensure both legs are alternating in semi-circles towards the middle, and keep feet wider than knees",
          "Ensure body is on your back"
        ],
        id: 3 
      },
      { 
        skill: "Support object (2.3 kg or 5 lbs) – 1 min.",
        mustSee: [
          "Ensure your head is above the surface the entire time and you use a strong lifesaving kick for support"
        ],
        id: 4 
      },
      { skill: "Search & recover object", id: 5 },
      { 
        skill: "Remove conscious victim",
        mustSee: [
          "When doing a removal, make sure you prioritize safety and use good judgement to select an effective removal for the victim you're rescuing"
        ],
        id: 6 
      },
      { 
        skill: "Front crawl – 75 m",
        mustSee: [
          "Arms are always alternating with elbows higher than hands, reach forward and pull down past your hip",
          "Kick is continuous and initiated from your hips",
          "Always breathe to the side and exhale in the water",
          "Body is horizontal on its front"
        ],
        id: 7 
      },
      { 
        skill: "Back crawl – 75 m",
        mustSee: [
          "Arms are straight as they alternate, enter the water beyond shoulders and pull down through the water with bent arms to your thighs",
          "Keep your legs and feet relaxed as you kick",
          "Breathing is relaxed",
          "Body is relaxed on its back"
        ],
        id: 8 
      },
      { 
        skill: "Breaststroke – 75 m",
        mustSee: [
          "Both arms pull towards chest at the same time with elbow higher than hands, then extend beyond head",
          "Both legs kick at the same time with knees close and feet wide apart",
          "Ensure always exhaling when face is in the water",
          "Body is always on its front and horizontal, pull arms towards chest, breathe, kick then glide with arms extended beyond head and legs straight"
        ],
        id: 9 
      },
      { 
        skill: "Lifesaving medley: 100 m (3 times)",
        id: 10 
      },
      { 
        skill: "Swim 200 m in 6 min.",
        mustSee: [
          "To meet the 100m in 3 mins, make sure strengthen your swim stroke to meet proper technique and build stamina"
        ],
        id: 11 
      },
    ]
  },
  {
    category: "First Aid",
    skills: [
      { 
        skill: "Assess unconscious, breathing victim",
        mustSee: [
          "Remember to check the environment for hazards, your victim's responsiveness, and call EMS and get an AED right away",
          "Check the airway by opening it using a head-tilt-chin-lift",
          "Look, listen and feel for breathing for at least 5 seconds",
          "Place your victim in recovery position"
        ],
        id: 12 
      },
      { 
        skill: "Care for victim in shock",
        mustSee: [
          "Remember to check the environment for hazards, your victim's responsiveness, and assess ABCs right away",
          "Call EMS and get an AED right away",
          "Make sure you rest and reassure your victim, provide warmth, and place your victim in recovery position"
        ],
        id: 13 
      },
      { 
        skill: "Obstructed airway – conscious victim",
        mustSee: [
          "Once you've assessed the victim and concluded that they are choking, make sure to encourage coughing and reassure your victim",
          "Remember to call for help before starting your treatment",
          "Make sure to alternate 5 back blows and 5 abdominal thrusts until the victim's airway is cleared or they fall unconscious"
        ],
        id: 14 
      },
    ]
  },
  {
    category: "Recognition & Rescue",
    skills: [
      { 
        skill: "Victim simulation: weak, non-swimmer & unconscious",
        mustSee: [
          "See Rookie Patrol: Victim simulation/recognition for comments"
        ],
        id: 15 
      },
      { 
        skill: "Victim recognition: weak, non-swimmer & unconscious",
        mustSee: [
          "See Rookie Patrol: Victim simulation/recognition for comments",
          "Remember victim avoidance skills such as ready position, swim away, or submerge when in danger"
        ],
        id: 16 
      },
      { 
        skill: "Victim avoidance",
        mustSee: [
          "Remember victim avoidance skills such as ready position, swim away, or submerge when in danger"
        ],
        id: 17 
      },
      { 
        skill: "Non-contact rescue with buoyant aid – 20 m",
        mustSee: [
          "Remember to call for help before entering the water",
          "Make sure you always have your eyes on the victim by entering the water with a stride jump and swimming to the victim using a head up approach",
          "Remember to always communicate with your victim throughout the rescue"
        ],
        id: 18 
      },
    ]
  }
];

export const swimmer8Skills = swimmer8SkillGroups.flatMap(group => group.skills);

// Swimmer 8 checkboxes - Following the pattern from previous swimmers
export const swimmer8CheckboxPositions = [
  // H₂O Proficiency
  { id: 1, x: 414, y: 550 },   // Somersault sequence – forward & backward
  { id: 2, x: 414, y: 527 },   // Stride entry & swim head-up 25 m. Ready position
  { id: 3, x: 414, y: 504 },   // Eggbeater kick on back – 25 m
  { id: 4, x: 414, y: 492 },   // Support object (2.3 kg or 5 lbs) – 1 min.
  { id: 5, x: 414, y: 481},   // Search & recover object
  { id: 6, x: 414, y: 470 },   // Remove conscious victim
  { id: 7, x: 414, y: 459 },   // Front crawl – 75 m
  { id: 8, x: 414, y: 447 },   // Back crawl – 75 m
  { id: 9, x: 414, y: 436 },   // Breaststroke – 75 m
  { id: 10, x: 414, y: 424 },  // Lifesaving medley: 100 m (3 times)
  { id: 11, x: 414, y: 413 },  // Swim 200 m in 6 min.
  
  // First Aid
  { id: 12, x: 414, y: 386 },  // Assess unconscious, breathing victim
  { id: 13, x: 414, y: 374 },  // Care for victim in shock
  { id: 14, x: 414, y: 363 },  // Obstructed airway – conscious victim
  
  // Recognition & Rescue
  { id: 15, x: 414, y: 336 },  // Victim simulation: weak, non-swimmer & unconscious
  { id: 16, x: 414, y: 312 },  // Victim recognition: weak, non-swimmer & unconscious
  { id: 17, x: 414, y: 290 },  // Victim avoidance
  { id: 18, x: 414, y: 279 },  // Non-contact rescue with buoyant aid – 20 m
];

// Swimmer 8 highlight positions
export const swimmer8HighlightPositions = [
  // H₂O Proficiency
  { id: 1, x: 414, y: 540, width: 165, height: 22 },  // Somersault sequence – forward & backward
  { id: 2, x: 414, y: 517, width: 165, height: 22 },  // Stride entry & swim head-up 25 m. Ready position (2 lines)
  { id: 3, x: 414, y: 504, width: 165, height: 10 },  // Eggbeater kick on back – 25 m
  { id: 4, x: 414, y: 492, width: 165, height: 10 },  // Support object (2.3 kg or 5 lbs) – 1 min.
  { id: 5, x: 414, y: 481, width: 165, height: 10 },  // Search & recover object
  { id: 6, x: 414, y: 470, width: 165, height: 10 },  // Remove conscious victim
  { id: 7, x: 414, y: 459, width: 165, height: 10 },  // Front crawl – 75 m
  { id: 8, x: 414, y: 447, width: 165, height: 10 },  // Back crawl – 75 m
  { id: 9, x: 414, y: 436, width: 165, height: 10 },  // Breaststroke – 75 m
  { id: 10, x: 414, y: 424, width: 165, height: 10 }, // Lifesaving medley: 100 m (3 times)
  { id: 11, x: 414, y: 413, width: 165, height: 10 }, // Swim 200 m in 6 min.
  
  // First Aid
  { id: 12, x: 414, y: 386, width: 165, height: 10 }, // Assess unconscious, breathing victim
  { id: 13, x: 414, y: 374, width: 165, height: 10 }, // Care for victim in shock
  { id: 14, x: 414, y: 360, width: 165, height: 10 }, // Obstructed airway – conscious victim
  
  // Recognition & Rescue
  { id: 15, x: 414, y: 322, width: 165, height: 22 }, // Victim simulation: weak, non-swimmer & unconscious (2 lines)
  { id: 16, x: 414, y: 312, width: 165, height: 22 }, // Victim recognition: weak, non-swimmer & unconscious (2 lines)
  { id: 17, x: 414, y: 290, width: 165, height: 10 }, // Victim avoidance
  { id: 18, x: 414, y: 263, width: 165, height: 22 }, // Non-contact rescue with buoyant aid – 20 m (2 lines)
];