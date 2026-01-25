export interface TechnicalSkillsApiItem {
  category: string;
  values: string[];
  description: string;
}

export const createInitialTechnicalSkillsApiItem = (): TechnicalSkillsApiItem => ({
  category: "",
  values: [],
  description: "",
});

export type TechnicalSkillsApiInfo = Array<TechnicalSkillsApiItem>;

export const createInitialTechnicalSkillsApiInfo = (): TechnicalSkillsApiInfo => [];
