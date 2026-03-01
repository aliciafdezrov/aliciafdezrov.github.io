import { createInitialAboutMeInfo, AboutMeInfo } from "./about-me.vm";
import { mapApiAboutMeToAboutMe } from "./about-me.mapper";
import { getAboutMeInfo } from "./api/about-me.api";
import { Lang } from "@/i18n/getDictionary";

export const getAboutMe = (lang: Lang): AboutMeInfo => {
  try {
    const apiAboutMe = getAboutMeInfo(lang);
    return mapApiAboutMeToAboutMe(apiAboutMe);
  } catch {
    return createInitialAboutMeInfo();
  }
};
