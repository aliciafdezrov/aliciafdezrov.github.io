import { ExperienceApiInfo } from "./experience.api-model";
import { info } from "@/content/info";
import { getDictionary, Lang } from "@/i18n/getDictionary";

export const getExperienceInfo = (lang: Lang): ExperienceApiInfo => {
  try {
    const dict = getDictionary(lang);
    return {
      title: dict.sections.workExperience,
      jobs: info.experience.jobs.map((job, index) => ({
        ...job,
        role: dict.experience.jobs[index]?.role ?? job.role,
        keyContributions:
          dict.experience.jobs[index]?.keyContributions ?? job.keyContributions,
      })),
    };
  } catch (exception) {
    throw exception;
  }
};
