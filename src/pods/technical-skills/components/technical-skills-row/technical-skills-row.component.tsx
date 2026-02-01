import { Tag } from "@/components/tag/tag.component";
import { TechnicalSkillsItem } from "../../technical-skills.vm";
import styles from "./technical-skills-row.module.scss";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
interface TechnicalSkillsRowProps {
  technicalSkillsRow: TechnicalSkillsItem;
}
export const TechnicalSkillsRowComponent = async (
  props: TechnicalSkillsRowProps
) => {
  const { technicalSkillsRow } = props;

  return (
    <div className={styles.container}>
      <RevealMotion>
        <h4 className={styles.title}>{technicalSkillsRow.title}</h4>
      </RevealMotion>
      {technicalSkillsRow.description && (
        <RevealMotion className={styles.description}>
          {technicalSkillsRow.description}
        </RevealMotion>
      )}
      <div className={styles.tagsContainer}>
        {technicalSkillsRow.skills.map((skill, index) => (
          <Tag key={index} label={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};
