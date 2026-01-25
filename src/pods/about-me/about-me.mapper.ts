import {
    createInitialAboutMeInfo,
    AboutMeInfo
} from "./about-me.vm";
import {AboutMeApiInfo} from "./api/about-me.api-model";

export const mapApiAboutMeToAboutMe = (data: AboutMeApiInfo): AboutMeInfo => {
    const aboutMeInfo: AboutMeInfo = createInitialAboutMeInfo();
    aboutMeInfo.name = data.name;
    aboutMeInfo.role = data.role;
    aboutMeInfo.description = data.description;
    aboutMeInfo.socialMedia = data.socialMedia;
    return aboutMeInfo;
};
