import { createInitialEducationAndCertificationsInfo, EducationAndCertificationsInfo } from "./education-and-certifications.vm";
import { mapApiEducationAndCertificationsToEducationAndCertifications } from "./education-and-certifications.mapper";
import { getEducationAndCertificationsInfo } from "./api/education-and-certifications.api";
import { Lang } from "@/i18n/getDictionary";

export const getEducationAndCertifications = (lang: Lang): EducationAndCertificationsInfo => {
  try {
    const apiEducationAndCertifications = getEducationAndCertificationsInfo(lang);
    return mapApiEducationAndCertificationsToEducationAndCertifications(apiEducationAndCertifications);
  } catch {
    return createInitialEducationAndCertificationsInfo();
  }
};
