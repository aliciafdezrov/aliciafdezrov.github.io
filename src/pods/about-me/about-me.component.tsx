import { Suspense } from "react";
import { getAboutMe } from "./about-me.actions";
import styles from "./about-me.module.scss";
import { iconLibrary } from "@/content/icons";
import { Icon } from "@/components/icon/Icon.component";
import { TransitionMaskWrapper } from "@/layouts/main-layout/components/header/components/transition-mask-wrapper/transition-mask-wrapper.component";

const AboutMeComponent = async () => {
  const aboutMe = await getAboutMe();

  return (
    <div className={styles.container}>
      <TransitionMaskWrapper>
        <h1 className={styles.title}>{aboutMe.name}</h1>
      </TransitionMaskWrapper>

      <TransitionMaskWrapper>
        <span className={styles.role}>{aboutMe.role}</span>
      </TransitionMaskWrapper>

      {aboutMe.socialMedia.length > 0 && (
        <div className={styles.socialLinks}>
          {aboutMe.socialMedia.map((social, index) => (
            <TransitionMaskWrapper key={index}>
              <a
                key={index}
                href={social.link}
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer"
              >
                <Icon iconName={social.icon} /> {social.media}
              </a>
            </TransitionMaskWrapper>
          ))}
        </div>
      )}

      {aboutMe.description && (
        <TransitionMaskWrapper>
          <div className={styles.description}>{aboutMe.description}</div>
        </TransitionMaskWrapper>
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
