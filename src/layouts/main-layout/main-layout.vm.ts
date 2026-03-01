import { Lang } from "@/i18n/getDictionary";

export interface NavigationItem {
  text: string;
  label: string;
}

export interface Navigation {
  about: NavigationItem;
  experience: NavigationItem;
  skills: NavigationItem;
  education: NavigationItem;
}

export interface Language {
  label: string;
  lang: Lang;
}

export interface Header {
  region: string;
  navigation: Navigation;
  lang: Language;
}

export interface Footer {
  madeWith: string;
  from: string;
}

export interface MainLayout {
  header: Header;
  footer: Footer;
}

export const createInitialNavigationItem = (): NavigationItem => ({
  text: "",
  label: "",
});

export const createInitialNavigation = (): Navigation => ({
  about: createInitialNavigationItem(),
  experience: createInitialNavigationItem(),
  skills: createInitialNavigationItem(),
  education: createInitialNavigationItem(),
});

export const createInitialLanguage = (): Language => ({
  label: "",
  lang: Lang.EN,
});

export const createInitialHeader = (): Header => ({
  region: "",
  navigation: createInitialNavigation(),
  lang: createInitialLanguage(),
});

export const createInitialFooter = (): Footer => ({
  madeWith: "",
  from: "",
});

export const createInitialMainLayout = (): MainLayout => ({
  header: createInitialHeader(),
  footer: createInitialFooter(),
});
