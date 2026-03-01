import styles from "./header.module.scss";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle.component";
import { Tab } from "./components/tab/tab.component";
import { Section } from "@/core/sections";

export const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.region}>Europe/Spain</span>
      <div className={styles.toolbar}>
        <Tab sectionId={Section.AboutMe} iconName="person" aria-label="Navigate to About Me section">
          About
        </Tab>
        <Tab sectionId={Section.Experience} iconName="briefcase" aria-label="Navigate to Experience section">
          Experience
        </Tab>
        <Tab sectionId={Section.Skills} iconName="grid" aria-label="Navigate to Skills section">
          Skills
        </Tab>
        <Tab sectionId={Section.Education} iconName="book" aria-label="Navigate to Education section">
          Education
        </Tab>
        <span className={styles.divider} />
        <ThemeToggle />
      </div>
    </header>
  );
};
