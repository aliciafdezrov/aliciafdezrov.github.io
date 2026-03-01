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

export interface TechnicalSkillsApiInfo {
  title: string;
  skills: Array<TechnicalSkillsApiItem>;
}

export const createInitialTechnicalSkillsApiInfo = (): TechnicalSkillsApiInfo => ({
  title: "",
  skills: [],
});
