import styles from "./footer.module.scss";
import { info } from "@/content/info";
import { SocialLink } from "@/components/social-link/social-link.component";
import { Icon } from "@/components/icon/Icon.component";

export const Footer = () => {
  const socialLinks = info.personalInfo.socialMedia;
  return (
    <footer className={styles.container}>
      <span className={styles.text}>
        Made with <Icon iconName="love" /> from Spain
      </span>
      <span className={styles.links}>
        {socialLinks.map((link) => (
          <SocialLink
            key={link.media}
            icon={link.icon}
            href={link.link}
            className={styles.socialLink}
          />
        ))}
      </span>
    </footer>
  );
};
