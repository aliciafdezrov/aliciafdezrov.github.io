import { TechnicalSkillsItem } from "../../technical-skills.vm";
import styles from "./technical-skills-row.module.css";

interface TechnicalSkillsRowProps {
  technicalSkillsRow: TechnicalSkillsItem;
}
export const TechnicalSkillsRowComponent = async (props: TechnicalSkillsRowProps) => {
  const { technicalSkillsRow } = props;

  return (
    <div className={styles.container}>
      <span className={styles.title}>{technicalSkillsRow.title}</span>
      {technicalSkillsRow.description && (
        <span className={styles.description}>{technicalSkillsRow.description}</span>
      )}
      <div className={styles.tagsContainer}>
        {technicalSkillsRow.skills.map((skill, index) => (
          <div key={index} className={styles.tag}>
            <span className={styles.tagLabel}>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
