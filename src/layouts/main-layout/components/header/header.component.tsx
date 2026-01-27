import { Icon } from "@/components/icon/Icon.component";
import styles from "./header.module.scss";

export const Header = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <header className={styles.container}>
      <span>Europe/Spain</span>
      <div className={styles.toolbar}>
        <button aria-label="change mode">
          <Icon iconName="lightMode" />
        </button>
      </div>
    </header>
  );
};
