import { getInfo } from "@/lib/read-file";
import {
  AboutMeApiInfo,
  createInitialAboutMeApiInfo,
} from "./about-me.api-model";

export const getAboutMeInfo = async (): Promise<AboutMeApiInfo> => {
  try {
    const json = await getInfo();
    const data = json as { personalInfo?: AboutMeApiInfo };
    return data.personalInfo || createInitialAboutMeApiInfo();
  } catch (exception) {
    throw exception;
  }
};
