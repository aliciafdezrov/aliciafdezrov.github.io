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
  title: string;
  jobs: Array<ExperienceApiItem>;
}

export const createInitialExperienceApiInfo = (): ExperienceApiInfo => ({
  title: "",
  jobs: [],
});
