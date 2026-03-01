import {
  createInitialAcademicInfo,
  createInitialLanguageItem,
  AcademicInfo,
  LanguageItem,
} from "./user-profile.vm";
import {
  AcademicApiInfo,
  LanguageApiItem,
} from "./api/user-profile.api-model";

export const mapLanguageItemApiToLanguageItem = (
  item: LanguageApiItem
): LanguageItem => {
  const languageItem = createInitialLanguageItem();
  languageItem.name = item.name;
  return languageItem;
};

export const mapApiAcademicToAcademic = (
  data: AcademicApiInfo
): AcademicInfo => {
  const academicInfo: AcademicInfo = createInitialAcademicInfo();
  academicInfo.region = data.region;
  academicInfo.languages = data.languages.map(mapLanguageItemApiToLanguageItem);
  return academicInfo;
};
