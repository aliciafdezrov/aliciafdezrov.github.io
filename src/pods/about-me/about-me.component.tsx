import { Icon } from "@/components/icon/Icon.component";
import { getAboutMe } from "./about-me.actions";
import styles from "./about-me.module.scss";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";

export const AboutMe = async () => {
  const aboutMe = await getAboutMe();

  return (
    <>
      <div className={styles.container}>
        <RevealMotion translateY="0.25rem">
          <h1 className={styles.title}>{aboutMe.name}</h1>
        </RevealMotion>

        <RevealMotion translateY="0.25rem" delay={0.2}>
          <h2 className={styles.role}>{aboutMe.role}</h2>
        </RevealMotion>

        {aboutMe.socialMedia.length > 0 && (
          <div className={styles.socialLinks}>
            {aboutMe.socialMedia.map((social, index) => (
              <RevealMotion key={index} delay={0.2}>
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
          <RevealMotion translateY="0.5rem" delay={0.4}>
            <div className={styles.description}>{aboutMe.description}</div>
          </RevealMotion>
        )}
      </div>
    </>
  );
};
