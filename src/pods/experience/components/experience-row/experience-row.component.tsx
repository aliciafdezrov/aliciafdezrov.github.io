import { ExperienceItem } from "../../experience.vm";
import styles from "./experience-row.module.css";

interface ExperienceRowProps {
  experienceRow: ExperienceItem;
}
export const ExperienceRowComponent = async (props: ExperienceRowProps) => {
  const { experienceRow } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{experienceRow.title}</span>
        <span className={styles.date}>{experienceRow.date}</span>
      </div>
      <span className={styles.subtitle}>{experienceRow.subtitle}</span>

      <ul className={styles.list}>
        {experienceRow.keyContributions.map((contribution, index) => (
          <li key={index} className={styles.listItem}>
            {contribution}
          </li>
        ))}
      </ul>
    </div>
  );
};
