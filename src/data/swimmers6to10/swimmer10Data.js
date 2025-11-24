export const swimmer10SkillGroups = [
  {
    category: "Knowledge",
    skills: [
      { skill: "The Lifesaving Society", id: 1 },
    ]
  },
  {
    category: "Skill",
    skills: [
      { 
        skill: "Self-Rescue",
        mustSee: [
          "When doing your self-rescues make sure you always have effective communication and maintain your group huddle for the full 1 minute"
        ],
        id: 2 
      },
      { 
        skill: "Entries",
        mustSee: [
          "When doing your entries into the water, ensure that you are choosing a safe entry depending on the depth of the pool and maintain a controlled path through the water"
        ],
        id: 3 
      },
      { 
        skill: "Swimming and lifesaving strokes",
        mustSee: [
          "For front crawl, ensure arms are always alternating with elbows higher than hands, reach forward and pull down past your hip",
          "For front crawl, ensure kick is continuous and initiated from your hips",
          "For front crawl, always breathe to the side and exhale in the water",
          "For front crawl, ensure body is horizontal on its front",

          "For back crawl, ensure arms are straight as they alternate, enter the water beyond shoulders and pull down through the water with bent arms to your thighs",
          "For back crawl, keep your legs and feet relaxed as you kick",
          "For backc rawl, keep breathing is relaxed",
          "For back crawl, ensure body is relaxed on its back", 

          "For breaststroke, ensure both arms pull towards chest at the same time with elbow higher than hands, then extend beyond head",
          "For breaststroke, ensure both legs kick at the same time with knees close and feet wide apart",
          "For breaststroke ensure always exhaling when face is in the water",
          "For breaststroke, ensure body is always on its front and horizontal, pull arms towards chest, breathe, kick then glide with arms extended beyond head and legs straight",

        ],
        id: 4 
      },
      { 
        skill: "25m or yd each of: front crawl, back crawl breaststroke",
        id: 5 
      },
      { 
        skill: "25m or yd each of: head-up front crawl, head-up breaststroke",
        id: 6 
      },
      { 
        skill: "25m or yd each of: whip kick, eggbeater, scissor kick or inverted scissor kick",
        id: 7 
      },
      { 
        skill: "Sculling",
        mustSee: [
          "When stationary sculling, make sure you maintain a stationary ready position for 30 seconds",
          "When doing a travelling scull, ensure you maintain your ready position for the full 10m"
        ],
        id: 8 
      },
      { 
        skill: "in place for 30 seconds",
        id: 9 
      },
      { 
        skill: "scull head-first 10m and feet-first 10m",
        id: 10 
      },
      { 
        skill: "Victim Recognition",
        mustSee: [
          "See Rookie Patrol: Victim simulation/recognition for comments"
        ],
        id: 11 
      },
      { 
        skill: "Reaching and Throwing Assists",
        mustSee: [
          "When doing your reaching and throwing assists, ensure you demonstrate a safe and effective use of reaching and throwing aids to victims"
        ],
        id: 12 
      },
      { 
        skill: "2 reaching assists",
        id: 13 
      },
      { 
        skill: "throw aid to target 3 out of 4 times",
        id: 14 
      },
      { 
        skill: "throw a buoyant aid with line to victim of 5m distance and pull victim to safety",
        id: 15 
      },
      { 
        skill: "Drowning Resuscitation: Single rescuer adult and child drowning and resuscitation",
        id: 16 
      },
    ]
  },
  {
    category: "Fitness",
    skills: [
      { 
        skill: "Obstacle Swim",
        mustSee: [
          "When doing your obstacle swim, ensure you have a head-first descent under obstacles with effective underwater movements and return to surface"
        ],
        id: 17 
      },
      { 
        skill: "Rescue Drill",
        id: 18 
      },
      { 
        skill: "Fitness Challenge 400m or yd fitness training",
        mustSee: [
          "To meet the 400m, make sure to improve your swim stroke tehniques to build upon stamina"
        ],
        id: 19 
      },
    ]
  },
];

export const swimmer10Skills = swimmer10SkillGroups.flatMap(group => group.skills);

// Swimmer 10 checkboxes - Following the pattern from previous swimmers
export const swimmer10CheckboxPositions = [
  // Knowledge
  { id: 1, x: 613, y: 376 },   // The Lifesaving Society
  
  // Skill
  { id: 2, x: 613, y: 348 },   // Self-Rescue
  { id: 3, x: 613, y: 337 },   // Entries
  { id: 4, x: 613, y: 326 },   // Swimming and lifesaving strokes
  { id: 5, x: 626, y: 314 },   // 25m or yd each of: front crawl, back crawl breaststroke
  { id: 6, x: 626, y: 292 },   // 25m or yd each of: head-up front crawl, head-up breaststroke
  { id: 7, x: 626, y: 269 },   // 25m or yd each of: whip kick, eggbeater, scissor kick or inverted scissor kick
  { id: 8, x: 613, y: 235 },   // Sculling
  { id: 9, x: 626, y: 224},   // in place for 30 seconds
  { id: 10, x: 626, y: 212},  // scull head-first 10m and feet-first 10m
  { id: 11, x: 613, y: 189},  // Victim Recognition
  { id: 12, x: 613, y: 177},  // Reaching and Throwing Assists
  { id: 13, x: 626, y: 166},  // 2 reaching assists
  { id: 14, x: 626, y: 155},  // throw aid to target 3 out of 4 times
  { id: 15, x: 626, y: 143},  // throw a buoyant aid with line to victim of 5m distance and pull victim to safety
  { id: 16, x: 613, y: 109},  // Drowning Resuscitation: Single rescuer adult and child drowning and resuscitation
  
  // Fitness
  { id: 17, x: 613, y: 59},  // Obstacle Swim
  { id: 18, x: 613, y: 48},  // Rescue Drill
  { id: 19, x: 613, y: 37 },  // Fitness Challenge 400m or yd fitness training
];

// Swimmer 10 highlight positions
export const swimmer10HighlightPositions = [
  // Knowledge
  { id: 1, x: 613, y: 374, width: 165, height: 10 },  // The Lifesaving Society
  
  // Skill
  { id: 2, x: 613, y: 348, width: 165, height: 10 },  // Self-Rescue
  { id: 3, x: 613, y: 337, width: 165, height: 10 },  // Entries
  { id: 4, x: 613, y: 326, width: 165, height: 10 },  // Swimming and lifesaving strokes
  { id: 5, x: 626, y: 304, width: 152, height: 22 },  // 25m or yd each of: front crawl, back crawl breaststroke (2 lines, indented)
  { id: 6, x: 626, y: 280, width: 152, height: 22 },  // 25m or yd each of: head-up front crawl, head-up breaststroke (2 lines, indented)
  { id: 7, x: 626, y: 243, width: 152, height: 34 },  // 25m or yd each of: whip kick, eggbeater, scissor kick or inverted scissor kick (3 lines, indented)
  { id: 8, x: 613, y: 235, width: 165, height: 10 },  // Sculling
  { id: 9, x: 626, y: 224, width: 152, height: 10 },  // in place for 30 seconds (indented)
  { id: 10, x: 626, y: 202, width: 152, height: 22 }, // scull head-first 10m and feet-first 10m (2 lines, indented)
  { id: 11, x: 613, y: 189, width: 165, height: 10 }, // Victim Recognition
  { id: 12, x: 613, y: 177, width: 165, height: 10 }, // Reaching and Throwing Assists
  { id: 13, x: 626, y: 166, width: 152, height: 10 }, // 2 reaching assists (indented)
  { id: 14, x: 626, y: 155, width: 152, height: 10 }, // throw aid to target 3 out of 4 times (indented)
  { id: 15, x: 626, y: 120, width: 152, height: 34 }, // throw a buoyant aid with line to victim of 5m distance and pull victim to safety (2 lines, indented)
  { id: 16, x: 613, y: 85, width: 165, height: 34 }, // Drowning Resuscitation: Single rescuer adult and child drowning and resuscitation (3 lines)
  
  // Fitness
  { id: 17, x: 613, y: 59, width: 165, height: 10 },  // Obstacle Swim
  { id: 18, x: 613, y: 48, width: 165, height: 10 },  // Rescue Drill
  { id: 19, x: 613, y: 23, width: 165, height: 22 },  // Fitness Challenge 400m or yd fitness training (2 lines)
];