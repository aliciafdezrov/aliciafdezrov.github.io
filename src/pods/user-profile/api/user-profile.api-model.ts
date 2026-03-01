export interface LanguageApiItem {
  name: string;
}

export const createInitialLanguageApiItem = (): LanguageApiItem => ({
  name: "",
});

export interface AcademicApiInfo {
  region: string;
  languages: Array<LanguageApiItem>;
}

export const createInitialAcademicApiInfo = (): AcademicApiInfo => ({
  region: "",
  languages: [],
});
