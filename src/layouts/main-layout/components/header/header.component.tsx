import styles from "./header.module.scss";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle.component";
import { Tab } from "./components/tab/tab.component";
import { Section } from "@/core/sections";

export const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.region}>Europe/Spain</span>
      <div className={styles.toolbar}>
        <Tab sectionId={Section.AboutMe} iconName="person">
          About
        </Tab>
        <Tab sectionId={Section.Experience} iconName="briefcase">
          Experience
        </Tab>
        <Tab sectionId={Section.Skills} iconName="grid">
          Skills
        </Tab>
        <Tab sectionId={Section.Education} iconName="book">
          Education
        </Tab>
        <div className={styles.divider} />
        <ThemeToggle />
      </div>
    </header>
  );
};
