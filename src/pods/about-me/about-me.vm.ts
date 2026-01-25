export interface SocialMedia {
  media: string;
  link: string;
  icon: string;
}

export interface AboutMeInfo {
  name: string;
  role: string;
  description: string;
  socialMedia: SocialMedia[];
}

export const createInitialAboutMeInfo = (): AboutMeInfo => ({
  name: "",
  role: "",
  description: "",
  socialMedia: [],
});
