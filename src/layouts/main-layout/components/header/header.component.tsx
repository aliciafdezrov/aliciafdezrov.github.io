import styles from "./header.module.scss";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle.component";
import { Tab } from "./components/tab/tab.component";

export const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.region}>Europe/Spain</span>
      <div className={styles.toolbar}>
        <Tab sectionId="about-me" iconName="person">
          About
        </Tab>
        <Tab sectionId="experience" iconName="briefcase">
          Experience
        </Tab>
        <Tab sectionId="skills" iconName="grid">
          Skills
        </Tab>
        <Tab sectionId="education" iconName="book">
          Education
        </Tab>
        <div className={styles.divider} />
        <ThemeToggle />
      </div>
    </header>
  );
};
