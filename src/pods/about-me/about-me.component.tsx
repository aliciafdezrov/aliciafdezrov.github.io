import { Icon } from "@/components/icon/Icon.component";
import { getAboutMe } from "./about-me.actions";
import styles from "./about-me.module.scss";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";

export const AboutMe = async () => {
  const aboutMe = await getAboutMe();

  return (
    <>
      <div className={styles.container}>
        <RevealMotion delay={0}>
          <h1 className={styles.title}>{aboutMe.name}</h1>
        </RevealMotion>

        <RevealMotion delay={0.1}>
          <h2 className={styles.role}>{aboutMe.role}</h2>
        </RevealMotion>

        {aboutMe.socialMedia.length > 0 && (
          <div className={styles.socialLinks}>
            {aboutMe.socialMedia.map((social, index) => (
              <RevealMotion key={index} delay={0.15 + index * 0.03}>
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
          <RevealMotion delay={0.3}>
            <div className={styles.description}>{aboutMe.description}</div>
          </RevealMotion>
        )}
      </div>
    </>
  );
};
