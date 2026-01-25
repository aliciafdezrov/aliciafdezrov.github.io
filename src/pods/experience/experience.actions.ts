import { createInitialExperienceInfo, ExperienceInfo } from "./experience.vm";
import { getExperienceInfo } from "./api";
import { mapApiExperienceToExperience } from "./experience.mapper";

export const getExperience = async (): Promise<ExperienceInfo> => {
  try {
    const apiExperience = await getExperienceInfo();
    return mapApiExperienceToExperience(apiExperience);
  } catch {
    return createInitialExperienceInfo();
  }
};
