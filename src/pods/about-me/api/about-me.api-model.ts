export interface SocialMediaApi {
  media: string;
  link: string;
  icon: string;
}

export interface AboutMeApiInfo {
  name: string;
  role: string;
  description: string;
  socialMedia: SocialMediaApi[];
}

export const createInitialAboutMeApiInfo = (): AboutMeApiInfo => ({
  name: "",
  role: "",
  description: "",
  socialMedia: [],
});
