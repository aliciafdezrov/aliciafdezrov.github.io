import { Tag } from "@/components/tag/tag.component";
import { TechnicalSkillsItem } from "../../technical-skills.vm";
import styles from "./technical-skills-row.module.css";

interface TechnicalSkillsRowProps {
  technicalSkillsRow: TechnicalSkillsItem;
}
export const TechnicalSkillsRowComponent = async (
  props: TechnicalSkillsRowProps
) => {
  const { technicalSkillsRow } = props;

  return (
    <div className={styles.container}>
      <span className={styles.title}>{technicalSkillsRow.title}</span>
      {technicalSkillsRow.description && (
        <span className={styles.description}>
          {technicalSkillsRow.description}
        </span>
      )}
      <div className={styles.tagsContainer}>
        {technicalSkillsRow.skills.map((skill, index) => (
          <Tag key={index} label={skill} />
        ))}
      </div>
    </div>
  );
};
