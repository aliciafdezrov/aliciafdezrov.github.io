import {
    createInitialTechnicalSkillsInfo,
    createInitialTechnicalSkillsItem,
    TechnicalSkillsInfo,
    TechnicalSkillsItem
} from "./technical-skills.vm";
import {TechnicalSkillsApiInfo, TechnicalSkillsApiItem} from "./api/technical-skills.api-model";

export const mapTechnicalSkillsItemApiToTechnicalSkillsItem = (item: TechnicalSkillsApiItem): TechnicalSkillsItem => {
    const technicalSkillsItem = createInitialTechnicalSkillsItem();
    technicalSkillsItem.title = item.category;
    technicalSkillsItem.skills = item.values;
    technicalSkillsItem.description = item.description;
    return technicalSkillsItem;
};

export const mapApiTechnicalSkillsToTechnicalSkills = (data: TechnicalSkillsApiInfo): TechnicalSkillsInfo => {
    const technicalSkillsInfo: TechnicalSkillsInfo = createInitialTechnicalSkillsInfo();
    technicalSkillsInfo.categories = data.map(mapTechnicalSkillsItemApiToTechnicalSkillsItem);
    return technicalSkillsInfo;
};
