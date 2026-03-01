export interface LanguageItem {
  name: string;
}

export const createInitialLanguageItem = (): LanguageItem => ({
  name: "",
});

export interface AcademicInfo {
  region: string;
  languages: Array<LanguageItem>;
}

export const createInitialAcademicInfo = (): AcademicInfo => ({
  region: "",
  languages: [],
});
