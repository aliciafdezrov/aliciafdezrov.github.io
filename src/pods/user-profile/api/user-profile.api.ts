import { AcademicApiInfo } from "./user-profile.api-model";
import { info } from "@/content/info";
import { getDictionary, Lang } from "@/i18n/getDictionary";

export const getAcademicInfo = (lang: Lang): AcademicApiInfo => {
  try {
    const dict = getDictionary(lang);
    return {
      region: dict.header.region,
      languages: info.academic.languages.map((language, index) => ({
        name: dict.languages[index]?.name ?? language.name,
      })),
    };
  } catch (exception) {
    throw exception;
  }
};
