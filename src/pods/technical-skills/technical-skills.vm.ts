export interface Skill {
  name: string;
  icon: string;
}

export interface TechnicalSkillsItem {
  title: string;
  skills: Skill[];
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
