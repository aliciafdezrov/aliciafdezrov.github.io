import { TechnicalSkillsApiInfo } from "./technical-skills.api-model";
import { info } from "@/content/info";
import { getDictionary, Lang } from "@/i18n/getDictionary";

export const getTechnicalSkillsInfo = (lang: Lang): TechnicalSkillsApiInfo => {
  try {
    const dict = getDictionary(lang);
    return {
      title: dict.sections.technicalExpertise,
      skills: info.technicalSkills.map((skill, index) => ({
        ...skill,
        category: dict.skills.categories[index]?.category ?? skill.category,
      })),
    };
  } catch (exception) {
    throw exception;
  }
};
