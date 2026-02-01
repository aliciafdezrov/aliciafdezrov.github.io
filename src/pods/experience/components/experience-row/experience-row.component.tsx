import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { ExperienceItem } from "../../experience.vm";
import styles from "./experience-row.module.scss";

interface ExperienceRowProps {
  experienceRow: ExperienceItem;
  index: number;
}
export const ExperienceRowComponent = async (props: ExperienceRowProps) => {
  const { experienceRow, index } = props;
  const baseDelay = 0.5 + index * 0.4;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RevealMotion delay={baseDelay}>
          <h4 className={styles.title}>{experienceRow.title}</h4>
        </RevealMotion>
        <RevealMotion delay={baseDelay + 0.05} className={styles.date}>
          {experienceRow.date}
        </RevealMotion>
      </div>
      <RevealMotion delay={baseDelay + 0.1} className={styles.subtitle}>
        {experienceRow.subtitle}
      </RevealMotion>

      <ul className={styles.list}>
        {experienceRow.keyContributions.map((contribution, contributionIndex) => (
          <RevealMotion delay={baseDelay + 0.15 + contributionIndex * 0.05} key={contributionIndex}>
            <li className={styles.listItem}>{contribution}</li>
          </RevealMotion>
        ))}
      </ul>
    </div>
  );
};
