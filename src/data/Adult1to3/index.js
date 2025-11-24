// src/data/index.js
import { adult1SkillGroups, adult1Skills, adult1CheckboxPositions, adult1HighlightPositions } from './Adult1Data.js';
import { adult2SkillGroups, adult2Skills, adult2CheckboxPositions, adult2HighlightPositions } from './Adult2Data.js';
import { adult3SkillGroups, adult3Skills, adult3CheckboxPositions, adult3HighlightPositions } from './Adult3Data.js';

export const swimmerData = {
  "1": {
    skillGroups: adult1SkillGroups,
    skills: adult1Skills,
    checkboxPositions: adult1CheckboxPositions,
    highlightPositions: adult1HighlightPositions,
  },
  "2": {
    skillGroups: adult2SkillGroups,
    skills: adult2Skills,
    checkboxPositions: adult2CheckboxPositions,
    highlightPositions: adult2HighlightPositions,
  },
  "3": {
    skillGroups: adult3SkillGroups,
    skills: adult3Skills,
    checkboxPositions: adult3CheckboxPositions,
    highlightPositions: adult3HighlightPositions,
  },
};