import Image from "next/image";
import styles from "./user-profile.module.scss";
import photo2 from "@/content/avatars/photo2.webp";
import { getAcademic } from "./user-profile.actions";
import { Tag } from "@/components/tag/tag.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";
import { Lang } from "@/i18n/getDictionary";

interface UserProfileProps {
  lang: Lang;
}

export const UserProfile = ({ lang }: UserProfileProps) => {
  const academic = getAcademic(lang);
  const delay = PAGE_ANIMATION_DELAYS.userProfile;

  return (
    <RevealMotion delay={delay} className={styles.container}>
      <Image
        alt="profile-photo"
        unoptimized
        width={160}
        height={160}
        src={photo2}
        className={styles.avatar}
      />
      <span>{academic.region}</span>
      <div className={styles.languagesContainer}>
        {academic.languages.map((language) => (
          <Tag key={language.name} label={language.name} />
        ))}
      </div>
    </RevealMotion>
  );
};
