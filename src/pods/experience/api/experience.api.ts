import { ExperienceApiInfo } from "./experience.api-model";
import { info } from "@/content/info";

export const getExperienceInfo = (): ExperienceApiInfo => {
  try {
    return info.experience;
  } catch (exception) {
    throw exception;
  }
};
