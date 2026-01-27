import Image from "next/image";
import styles from "./user-profile.module.scss";
import photo2 from "@/content/avatars/photo2.webp";
import { getAcademic } from "./user-profile.actions";
import { Tag } from "@/components/tag/tag.component";

export const UserProfile = async () => {
  const academic = await getAcademic();

  return (
    <div className={styles.container}>
      <Image
        alt="profile-photo"
        unoptimized
        width={160}
        height={160}
        src={photo2}
        className={styles.avatar}
      />
      <span>Europe/Spain</span>
      <div className={styles.languagesContainer}>
        {academic.languages.map((language) => (
          <Tag key={language.name} label={language.name} />
        ))}
      </div>
    </div>
  );
};
