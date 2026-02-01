import { createInitialTechnicalSkillsInfo, TechnicalSkillsInfo } from "./technical-skills.vm";
import { mapApiTechnicalSkillsToTechnicalSkills } from "./technical-skills.mapper";
import { getTechnicalSkillsInfo } from "./api/technical-skills.api";

export const getTechnicalSkills = (): TechnicalSkillsInfo => {
  try {
    const apiTechnicalSkills = getTechnicalSkillsInfo();
    return mapApiTechnicalSkillsToTechnicalSkills(apiTechnicalSkills);
  } catch {
    return createInitialTechnicalSkillsInfo();
  }
};
