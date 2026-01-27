import styles from "./header.module.scss";
import { ThemeToggle } from "../theme-toggle/theme-toggle.component";

export const Header = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <header className={styles.container}>
      <span>Europe/Spain</span>
      <div className={styles.toolbar}>
        <ThemeToggle />
      </div>
    </header>
  );
};
