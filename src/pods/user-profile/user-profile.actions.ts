import { createInitialAcademicInfo, AcademicInfo } from "./user-profile.vm";
import { getAcademicInfo } from "./api/user-profile.api";
import { mapApiAcademicToAcademic } from "./user-profile.mapper";
import { Lang } from "@/i18n/getDictionary";

export const getAcademic = (lang: Lang): AcademicInfo => {
  try {
    const apiAcademic = getAcademicInfo(lang);
    return mapApiAcademicToAcademic(apiAcademic);
  } catch {
    return createInitialAcademicInfo();
  }
};
