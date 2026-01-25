import { getInfo } from "@/lib/read-file";
import { EducationAndCertificationsApiInfo } from "./education-and-certifications.api-model";

export const getEducationAndCertificationsInfo = async (): Promise<EducationAndCertificationsApiInfo> => {
  try {
    const json = await getInfo();
    return json.academic;
  } catch (exception) {
    throw exception;
  }
};
