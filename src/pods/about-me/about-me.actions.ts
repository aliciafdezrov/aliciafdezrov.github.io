import { createInitialAboutMeInfo, AboutMeInfo } from "./about-me.vm";
import { mapApiAboutMeToAboutMe } from "./about-me.mapper";
import { getAboutMeInfo } from "./api/about-me.api";

export const getAboutMe = async (): Promise<AboutMeInfo> => {
  try {
    const apiAboutMe = await getAboutMeInfo();
    return mapApiAboutMeToAboutMe(apiAboutMe);
  } catch {
    return createInitialAboutMeInfo();
  }
};
