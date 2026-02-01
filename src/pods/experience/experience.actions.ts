import { createInitialExperienceInfo, ExperienceInfo } from "./experience.vm";
import { mapApiExperienceToExperience } from "./experience.mapper";
import { getExperienceInfo } from "./api/experience.api";

export const getExperience = (): ExperienceInfo => {
  try {
    const apiExperience = getExperienceInfo();
    return mapApiExperienceToExperience(apiExperience);
  } catch {
    return createInitialExperienceInfo();
  }
};
