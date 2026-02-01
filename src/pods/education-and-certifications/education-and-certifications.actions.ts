import { createInitialEducationAndCertificationsInfo, EducationAndCertificationsInfo } from "./education-and-certifications.vm";
import { mapApiEducationAndCertificationsToEducationAndCertifications } from "./education-and-certifications.mapper";
import { getEducationAndCertificationsInfo } from "./api/education-and-certifications.api";

export const getEducationAndCertifications = (): EducationAndCertificationsInfo => {
  try {
    const apiEducationAndCertifications = getEducationAndCertificationsInfo();
    return mapApiEducationAndCertificationsToEducationAndCertifications(apiEducationAndCertifications);
  } catch {
    return createInitialEducationAndCertificationsInfo();
  }
};
