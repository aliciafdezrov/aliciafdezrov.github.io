import { getInfo } from "@/lib/read-file";
import { TechnicalSkillsApiInfo, createInitialTechnicalSkillsApiInfo } from "./technical-skills.api-model";

export const getTechnicalSkillsInfo = async (): Promise<TechnicalSkillsApiInfo> => {
  try {
    const json = await getInfo();
    return json.technicalSkills || createInitialTechnicalSkillsApiInfo();
  } catch (exception) {
    throw exception;
  }
};
