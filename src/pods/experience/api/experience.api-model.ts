export interface ExperienceApiItem {
  role: string;
  date: string;
  company: string;
  keyContributions: string[];
}

export const createInitialExperienceApiItem = (): ExperienceApiItem => ({
  role: "",
  date: "",
  company: "",
  keyContributions: [],
});

export interface ExperienceApiInfo {
  jobs: Array<ExperienceApiItem>;
}

export const createInitialExperienceApiInfo = (): ExperienceApiInfo => ({
  jobs: [],
});
