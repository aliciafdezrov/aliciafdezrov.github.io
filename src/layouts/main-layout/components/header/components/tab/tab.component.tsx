"use client";

import styles from "./tab.module.scss";
import { Icon } from "@/components/icon/Icon.component";
import { IconName } from "@/content/icons";

interface TabProps extends React.PropsWithChildren {
  iconName?: IconName;
  sectionId?: string;
  ariaLabel?: string;
}

export const Tab = (props: TabProps) => {
  const { children, iconName, sectionId, ariaLabel } = props;

  const scrollToSection = () => {
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      className={styles.tab}
      onClick={scrollToSection}
      type="button"
      aria-label={ariaLabel}
    >
      {iconName && (
        <span aria-hidden="true">
          <Icon iconName={iconName} />
        </span>
      )}

      <span className={styles.content}>{children}</span>
    </button>
  );
};
