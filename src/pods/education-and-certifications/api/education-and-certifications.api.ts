import { EducationAndCertificationsApiInfo } from "./education-and-certifications.api-model";
import { info } from "@/content/info";
import { getDictionary, Lang } from "@/i18n/getDictionary";

export const getEducationAndCertificationsInfo = (
  lang: Lang
): EducationAndCertificationsApiInfo => {
  try {
    const dict = getDictionary(lang);
    return {
      title: dict.sections.educationAndCertifications,
      degrees: info.academic.degrees.map((degree, index) => ({
        ...degree,
        name: dict.education.degrees[index]?.name ?? degree.name,
        description:
          dict.education.degrees[index]?.description ?? degree.description,
      })),
    };
  } catch (exception) {
    throw exception;
  }
};
