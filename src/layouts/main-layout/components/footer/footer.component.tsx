import styles from "./footer.module.scss";
import { info } from "@/content/info";
import { SocialLink } from "@/components/social-link/social-link.component";
import { Icon } from "@/components/icon/Icon.component";
import type { Footer as FooterVm } from "@/layouts/main-layout/main-layout.vm";

interface FooterProps {
  vm: FooterVm;
}

export const Footer = ({ vm }: FooterProps) => {
  const socialLinks = info.personalInfo.socialMedia;
  return (
    <footer className={styles.container}>
      <span className={styles.text}>
        {vm.madeWith} <Icon iconName="love" /> {vm.from}
      </span>
      <span className={styles.links}>
        {socialLinks.map((link) => (
          <SocialLink
            key={link.media}
            icon={link.icon}
            href={link.link}
            aria-label={link.media}
            className={styles.socialLink}
          />
        ))}
      </span>
    </footer>
  );
};
