import { Suspense } from "react";
import { getAboutMe } from "./about-me.actions";
import styles from "./about-me.module.scss";
import { iconLibrary } from "@/content/icons";
import { Icon } from "@/components/icon/Icon.component";

const AboutMeComponent = async () => {
  const aboutMe = await getAboutMe();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{aboutMe.name}</h1>
      <span className={styles.role}>{aboutMe.role}</span>

      {aboutMe.socialMedia.length > 0 && (
        <div className={styles.socialLinks}>
          {aboutMe.socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className={styles.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              <Icon iconName={social.icon} /> {social.media}
            </a>
          ))}
        </div>
      )}

      {aboutMe.description && (
        <div className={styles.description}>{aboutMe.description}</div>
      )}
    </div>
  );
};

export const AboutMe = async () => {
  return (
    <Suspense fallback={"Loading..."}>
      <AboutMeComponent />
    </Suspense>
  );
};
