import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { ExperienceItem } from "../../experience.vm";
import styles from "./experience-row.module.scss";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";

interface ExperienceRowProps {
  experienceRow: ExperienceItem;
  index: number;
}
export const ExperienceRowComponent = async (props: ExperienceRowProps) => {
  const { experienceRow, index } = props;
  const config = PAGE_ANIMATION_DELAYS.experience.rows;
  const baseDelay = config.base + index * config.increment;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RevealMotion delay={baseDelay}>
          <h4 className={styles.title}>{experienceRow.title}</h4>
        </RevealMotion>
        <RevealMotion delay={baseDelay + config.offsets.date} className={styles.date}>
          {experienceRow.date}
        </RevealMotion>
      </div>
      <RevealMotion delay={baseDelay + config.offsets.subtitle} className={styles.subtitle}>
        {experienceRow.subtitle}
      </RevealMotion>

      {experienceRow.keyContributions.length === 1 ? (
        <RevealMotion delay={baseDelay + config.offsets.contributions.base} className={styles.listItem}>
          {experienceRow.keyContributions[0]}
        </RevealMotion>
      ) : (
        <ul className={styles.list}>
          {experienceRow.keyContributions.map((contribution, contributionIndex) => (
            <RevealMotion delay={baseDelay + config.offsets.contributions.base + contributionIndex * config.offsets.contributions.increment} key={contributionIndex}>
              <li className={styles.listItem}>{contribution}</li>
            </RevealMotion>
          ))}
        </ul>
      )}
    </div>
  );
};
