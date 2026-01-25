import {
    createInitialEducationAndCertificationsInfo,
    createInitialEducationAndCertificationsItem,
    EducationAndCertificationsInfo,
    EducationAndCertificationsItem
} from "./education-and-certifications.vm";
import {EducationAndCertificationsApiInfo, EducationAndCertificationsApiItem} from "./api/education-and-certifications.api-model";

export const mapEducationAndCertificationsItemApiToEducationAndCertificationsItem = (item: EducationAndCertificationsApiItem): EducationAndCertificationsItem => {
    const educationAndCertificationsItem = createInitialEducationAndCertificationsItem();
    educationAndCertificationsItem.title = item.name;
    educationAndCertificationsItem.subtitle = item.location;
    educationAndCertificationsItem.date = item.date;
    educationAndCertificationsItem.description = item.description;
    return educationAndCertificationsItem;
};

export const mapApiEducationAndCertificationsToEducationAndCertifications = (data: EducationAndCertificationsApiInfo): EducationAndCertificationsInfo => {
    const educationAndCertificationsInfo: EducationAndCertificationsInfo = createInitialEducationAndCertificationsInfo();
    educationAndCertificationsInfo.degrees = data.degrees.map(mapEducationAndCertificationsItemApiToEducationAndCertificationsItem);
    return educationAndCertificationsInfo;
};
