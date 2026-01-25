export interface ExperienceItem {
  title: string;
  subtitle: string;
  date: string;
  keyContributions: string[];
}

export const createInitialExperienceItem = (): ExperienceItem => ({
  title: "",
  subtitle: "",
  date: "",
  keyContributions: [],
});

export interface ExperienceInfo {
  jobs: Array<ExperienceItem>;
}

export const createInitialExperienceInfo = (): ExperienceInfo => ({
  jobs: [],
});
