import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { ExperienceItem } from "../../experience.vm";
import styles from "./experience-row.module.scss";

interface ExperienceRowProps {
  experienceRow: ExperienceItem;
}
export const ExperienceRowComponent = async (props: ExperienceRowProps) => {
  const { experienceRow } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RevealMotion>
          <h4 className={styles.title}>{experienceRow.title}</h4>
        </RevealMotion>
        <RevealMotion className={styles.date}>
          {experienceRow.date}
        </RevealMotion>
      </div>
      <RevealMotion className={styles.subtitle}>
        {experienceRow.subtitle}
      </RevealMotion>

      <ul className={styles.list}>
        {experienceRow.keyContributions.map((contribution, index) => (
          <RevealMotion key={index}>
            <li className={styles.listItem}>{contribution}</li>
          </RevealMotion>
        ))}
      </ul>
    </div>
  );
};
