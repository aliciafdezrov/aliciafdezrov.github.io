import { createInitialExperienceInfo, ExperienceInfo } from "./experience.vm";
import { mapApiExperienceToExperience } from "./experience.mapper";
import { getExperienceInfo } from "./api/experience.api";
import { Lang } from "@/i18n/getDictionary";

export const getExperience = (lang: Lang): ExperienceInfo => {
  try {
    const apiExperience = getExperienceInfo(lang);
    return mapApiExperienceToExperience(apiExperience);
  } catch {
    return createInitialExperienceInfo();
  }
};
