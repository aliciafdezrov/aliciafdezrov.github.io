export interface LanguageItem {
  name: string;
  description: string;
}

export const createInitialLanguageItem = (): LanguageItem => ({
  name: "",
  description: "",
});

export interface AcademicInfo {
  languages: Array<LanguageItem>;
}

export const createInitialAcademicInfo = (): AcademicInfo => ({
  languages: [],
});
