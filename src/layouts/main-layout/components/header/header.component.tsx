import styles from "./header.module.scss";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle.component";
import { Tab } from "./components/tab/tab.component";

export const Header = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <header className={styles.container}>
      <span>Europe/Spain</span>
      <div className={styles.toolbar}>
        <Tab>patata</Tab>
        <Tab>patata</Tab>
        <Tab>patata</Tab>
        <div className={styles.divider} />
        <ThemeToggle />
      </div>
    </header>
  );
};
