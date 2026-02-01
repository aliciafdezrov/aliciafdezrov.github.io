import { EducationAndCertificationsApiInfo } from "./education-and-certifications.api-model";
import { info } from "@/content/info";

export const getEducationAndCertificationsInfo = (): EducationAndCertificationsApiInfo => {
  try {
    return info.academic;
  } catch (exception) {
    throw exception;
  }
};
