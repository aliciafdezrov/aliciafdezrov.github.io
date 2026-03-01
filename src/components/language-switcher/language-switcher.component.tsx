"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lang } from "@/i18n/getDictionary";
import styles from "./language-switcher.module.scss";

interface LanguageSwitcherProps {
  currentLang: Lang;
  ariaLabel: string;
}

export const LanguageSwitcher = ({
  currentLang,
  ariaLabel,
}: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const otherLang = currentLang === Lang.EN ? Lang.ES : Lang.EN;
  const newPath = pathname.replace(`/${currentLang}`, `/${otherLang}`);

  return (
    <Link href={newPath} className={styles.switcher} aria-label={ariaLabel}>
      {otherLang.toUpperCase()}
    </Link>
  );
};
