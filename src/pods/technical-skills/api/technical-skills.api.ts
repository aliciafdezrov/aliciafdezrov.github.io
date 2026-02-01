import { TechnicalSkillsApiInfo, createInitialTechnicalSkillsApiInfo } from "./technical-skills.api-model";
import { info } from "@/content/info";

export const getTechnicalSkillsInfo = (): TechnicalSkillsApiInfo => {
  try {
    return info.technicalSkills || createInitialTechnicalSkillsApiInfo();
  } catch (exception) {
    throw exception;
  }
};
