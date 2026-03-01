import { AboutMeApiInfo } from "./about-me.api-model";
import { info } from "@/content/info";
import { getDictionary, Lang } from "@/i18n/getDictionary";

export const getAboutMeInfo = (lang: Lang): AboutMeApiInfo => {
  try {
    const dict = getDictionary(lang);
    return {
      ...info.personalInfo,
      role: dict.aboutMe.role,
      description: dict.aboutMe.description,
    };
  } catch (exception) {
    throw exception;
  }
};
