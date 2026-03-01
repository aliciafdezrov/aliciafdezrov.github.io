import styles from "./header.module.scss";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle.component";
import { Tab } from "./components/tab/tab.component";
import { Section } from "@/core/sections";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher.component";
import type { Header as HeaderVm } from "@/layouts/main-layout/main-layout.vm";

interface HeaderProps {
  vm: HeaderVm;
}

export const Header = ({ vm }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <span className={styles.region}>{vm.region}</span>
      <div className={styles.toolbar}>
        <Tab
          sectionId={Section.AboutMe}
          iconName="person"
          ariaLabel={vm.navigation.about.label}
        >
          {vm.navigation.about.text}
        </Tab>
        <Tab
          sectionId={Section.Experience}
          iconName="briefcase"
          ariaLabel={vm.navigation.experience.label}
        >
          {vm.navigation.experience.text}
        </Tab>
        <Tab
          sectionId={Section.Skills}
          iconName="grid"
          ariaLabel={vm.navigation.skills.label}
        >
          {vm.navigation.skills.text}
        </Tab>
        <Tab
          sectionId={Section.Education}
          iconName="book"
          ariaLabel={vm.navigation.education.label}
        >
          {vm.navigation.education.text}
        </Tab>
        <span className={styles.divider} />
        <LanguageSwitcher
          currentLang={vm.lang.lang}
          ariaLabel={vm.lang.label}
        />
        <ThemeToggle />
      </div>
    </header>
  );
};
