import {
  AboutMeApiInfo,
  createInitialAboutMeApiInfo,
} from "./about-me.api-model";
import { info } from "@/content/info";

export const getAboutMeInfo = (): AboutMeApiInfo => {
  try {
    return info.personalInfo || createInitialAboutMeApiInfo();
  } catch (exception) {
    throw exception;
  }
};
