export interface TechnicalSkillsItem {
  title: string;
  skills: string[];
  description: string;
}

export const createInitialTechnicalSkillsItem = (): TechnicalSkillsItem => ({
  title: "",
  skills: [],
  description: "",
});

export interface TechnicalSkillsInfo {
  categories: Array<TechnicalSkillsItem>;
}

export const createInitialTechnicalSkillsInfo = (): TechnicalSkillsInfo => ({
  categories: [],
});
