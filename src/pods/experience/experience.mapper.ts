import {
    createInitialExperienceInfo,
    createInitialExperienceItem,
    ExperienceInfo,
    ExperienceItem
} from "./experience.vm";
import {ExperienceApiInfo, ExperienceApiItem} from "./api/experience.api-model";

export const mapExperienceItemApiToExperienceItem = (item: ExperienceApiItem): ExperienceItem => {
    const experienceItem = createInitialExperienceItem();
    experienceItem.title = item.company;
    experienceItem.date = item.date;
    experienceItem.subtitle = item.role;
    experienceItem.keyContributions = item.keyContributions;
    return experienceItem;
};

export const mapApiExperienceToExperience = (data: ExperienceApiInfo): ExperienceInfo => {
    const experienceInfo: ExperienceInfo = createInitialExperienceInfo();
    experienceInfo.title = data.title;
    experienceInfo.jobs = data.jobs.map(mapExperienceItemApiToExperienceItem);
    return experienceInfo;
};
