import { createInitialTechnicalSkillsInfo, TechnicalSkillsInfo } from "./technical-skills.vm";
import { mapApiTechnicalSkillsToTechnicalSkills } from "./technical-skills.mapper";
import { getTechnicalSkillsInfo } from "./api/technical-skills.api";
import { Lang } from "@/i18n/getDictionary";

export const getTechnicalSkills = (lang: Lang): TechnicalSkillsInfo => {
  try {
    const apiTechnicalSkills = getTechnicalSkillsInfo(lang);
    return mapApiTechnicalSkillsToTechnicalSkills(apiTechnicalSkills);
  } catch {
    return createInitialTechnicalSkillsInfo();
  }
};
