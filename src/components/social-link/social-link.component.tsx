import { Icon } from "@/components/icon/Icon.component";
import styles from "./social-link.module.scss";

interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: string;
  text?: string;
}

export const SocialLink = ({ href, icon, text, ...props }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className={styles.socialLink}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Icon iconName={icon} /> {text && text}
    </a>
  );
};
