import { Icon } from "@/components/icon/Icon.component";
import { getAboutMe } from "./about-me.actions";
import styles from "./about-me.module.scss";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";

export const AboutMe = () => {
  const aboutMe = getAboutMe();
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
              <RevealMotion key={index} delay={delays.socialLinks.base + index * delays.socialLinks.increment}>
                <a
                  key={index}
                  href={social.link}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon iconName={social.icon} /> {social.media}
                </a>
              </RevealMotion>
            ))}
          </div>
        )}

        {aboutMe.description && (
          <RevealMotion delay={delays.description}>
            <div className={styles.description}>{aboutMe.description}</div>
          </RevealMotion>
        )}
      </div>
    </>
  );
};
