export interface LanguageApiItem {
  name: string;
  description: string;
}

export const createInitialLanguageApiItem = (): LanguageApiItem => ({
  name: "",
  description: "",
});

export interface AcademicApiInfo {
  languages: Array<LanguageApiItem>;
}

export const createInitialAcademicApiInfo = (): AcademicApiInfo => ({
  languages: [],
});
