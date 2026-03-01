import { getDictionary, Lang } from "@/i18n/getDictionary";
import { MainLayout, createInitialMainLayout } from "./main-layout.vm";

export const getMainLayout = (lang: Lang): MainLayout => {
  try {
    const dict = getDictionary(lang);
    return {
      header: {
        region: dict.header.region,
        navigation: {
          about: { text: dict.header.nav.about, label: dict.header.ariaLabels.about },
          experience: { text: dict.header.nav.experience, label: dict.header.ariaLabels.experience },
          skills: { text: dict.header.nav.skills, label: dict.header.ariaLabels.skills },
          education: { text: dict.header.nav.education, label: dict.header.ariaLabels.education },
        },
        lang: {
          label: dict.header.ariaLabels.langSwitcher,
          lang,
        },
      },
      footer: {
        madeWith: dict.footer.madeWith,
        from: dict.footer.from,
      },
    };
  } catch {
    return createInitialMainLayout();
  }
};
