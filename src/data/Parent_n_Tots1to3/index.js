// src/data/index.js
import { pnt1SkillGroups, pnt1Skills, pnt1CheckboxPositions, pnt1HighlightPositions } from './parent_tot1Data';
import { pnt2SkillGroups, pnt2Skills, pnt2CheckboxPositions, pnt2HighlightPositions } from './parent_tot2Data.js';
import { pnt3SkillGroups, pnt3Skills, pnt3CheckboxPositions, pnt3HighlightPositions } from './parent_tot3Data.js';

export const swimmerData = {
  "1": {
    skillGroups: pnt1SkillGroups,
    skills: pnt1Skills,
    checkboxPositions: pnt1CheckboxPositions,
    highlightPositions: pnt1HighlightPositions,
  },
  "2": {
    skillGroups: pnt2SkillGroups,
    skills: pnt2Skills,
    checkboxPositions: pnt2CheckboxPositions,
    highlightPositions: pnt2HighlightPositions,
  },
  "3": {
    skillGroups: pnt3SkillGroups,
    skills: pnt3Skills,
    checkboxPositions: pnt3CheckboxPositions,
    highlightPositions: pnt3HighlightPositions,
  },
};