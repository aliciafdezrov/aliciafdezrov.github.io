"use client";

import { toggleTheme } from "@/actions/theme.actions";
import { useTransition } from "react";
import styles from "./theme-toggle.module.scss";
import { Icon } from "../../../../components/icon/Icon.component";

export function ThemeToggle() {
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      await toggleTheme();
    });
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={handleToggle}
      disabled={isPending}
      aria-label="Toggle theme"
      type="button"
    >
      {/* <span className={styles.lightIcon}>
        <Icon iconName="lightMode" />
      </span>
      <span className={styles.darkIcon}>
        <Icon iconName="darkMode" />
      </span> */}
    </button>
  );
}
