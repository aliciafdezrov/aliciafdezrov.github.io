"use client";

import styles from "./tab.module.scss";
import { Icon } from "@/components/icon/Icon.component";
import { IconName } from "@/content/icons";

interface TabProps extends React.PropsWithChildren {
  iconName?: IconName;
  sectionId?: string;
}

export const Tab = (props: TabProps) => {
  const { children, iconName, sectionId } = props;

  const scrollToSection = () => {
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button className={styles.tab} onClick={scrollToSection} type="button">
      {iconName && <Icon iconName={iconName} />}

      <span className={styles.content}>{children}</span>
    </button>
  );
};
