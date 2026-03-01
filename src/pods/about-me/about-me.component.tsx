import { getAboutMe } from "./about-me.actions";
import styles from "./about-me.module.scss";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";
import { SocialLink } from "@/components/social-link/social-link.component";
import { Lang } from "@/i18n/getDictionary";

interface AboutMeProps {
  lang: Lang;
}

export const AboutMe = ({ lang }: AboutMeProps) => {
  const aboutMe = getAboutMe(lang);
  const delays = PAGE_ANIMATION_DELAYS.aboutMe;

  return (
    <>
      <div className={styles.container}>
        <RevealMotion delay={delays.name}>
          <h1 className={styles.title}>{aboutMe.name}</h1>
        </RevealMotion>

        <RevealMotion delay={delays.role}>
          <h2 className={styles.role}>{aboutMe.role}</h2>
        </RevealMotion>

        {aboutMe.socialMedia.length > 0 && (
          <div className={styles.socialLinks}>
            {aboutMe.socialMedia.map((social, index) => (
              <RevealMotion
                key={index}
                delay={
                  delays.socialLinks.base + index * delays.socialLinks.increment
                }
              >
                <SocialLink
                  href={social.link}
                  className={styles.socialLink}
                  text={social.media}
                  icon={social.icon}
                />
              </RevealMotion>
            ))}
          </div>
        )}

        {aboutMe.description && (
          <RevealMotion
            delay={delays.description}
            translateY="0.25rem"
            blur="0.25rem"
          >
            <div className={styles.description}>{aboutMe.description}</div>
          </RevealMotion>
        )}
      </div>
    </>
  );
};
