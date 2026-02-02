"use client";

import { Theme } from "@/core/theme";
import styles from "./theme-toggle.module.scss";
import { Icon } from "../../../../../../components/icon/Icon.component";

export function ThemeToggle() {
  const handleToggle = () => {
    // Get current theme from the document
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === Theme.Dark ? Theme.Light : Theme.Dark;

    // Update the document attribute (no cookie persistence)
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={handleToggle}
      aria-label="Toggle theme"
      type="button"
    >
      <span className={styles.lightIcon}>
        <Icon iconName="lightMode" />
      </span>
      <span className={styles.darkIcon}>
        <Icon iconName="darkMode" />
      </span>
    </button>
  );
}
