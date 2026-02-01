import { AcademicApiInfo } from "./user-profile.api-model";
import { info } from "@/content/info";

export const getAcademicInfo = (): AcademicApiInfo => {
  try {
    return info.academic;
  } catch (exception) {
    throw exception;
  }
};
