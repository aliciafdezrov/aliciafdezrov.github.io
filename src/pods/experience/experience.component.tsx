import { getExperience } from "./experience.actions";
import styles from "./experience.module.scss";
import { ExperienceRowComponent } from "./components/experience-row/experience-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";
import { Lang } from "@/i18n/getDictionary";

interface ExperienceProps {
  lang: Lang;
}

export const Experience = ({ lang }: ExperienceProps) => {
  const experience = getExperience(lang);

  return (
    <div className={styles.container}>
      <RevealMotion delay={PAGE_ANIMATION_DELAYS.experience.title}>
        <h3 className={styles.title}>{experience.title}</h3>
      </RevealMotion>
      {experience.jobs.map((job, index) => (
        <ExperienceRowComponent key={job.date} experienceRow={job} index={index} />
      ))}
    </div>
  );
};
