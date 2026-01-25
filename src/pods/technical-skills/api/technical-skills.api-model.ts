export interface SkillValue {
  name: string;
  icon: string;
}

export interface TechnicalSkillsApiItem {
  category: string;
  values: SkillValue[];
  description: string;
}

export const createInitialTechnicalSkillsApiItem = (): TechnicalSkillsApiItem => ({
  category: "",
  values: [],
  description: "",
});

export type TechnicalSkillsApiInfo = Array<TechnicalSkillsApiItem>;

export const createInitialTechnicalSkillsApiInfo = (): TechnicalSkillsApiInfo => [];
