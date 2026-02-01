import { Tag } from "@/components/tag/tag.component";
import { TechnicalSkillsItem } from "../../technical-skills.vm";
import styles from "./technical-skills-row.module.scss";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";

interface TechnicalSkillsRowProps {
  technicalSkillsRow: TechnicalSkillsItem;
  index: number;
}
export const TechnicalSkillsRowComponent = async (
  props: TechnicalSkillsRowProps
) => {
  const { technicalSkillsRow, index } = props;
  const baseDelay = 2.1 + index * 0.15;

  return (
    <div className={styles.container}>
      <RevealMotion delay={baseDelay}>
        <h4 className={styles.title}>{technicalSkillsRow.title}</h4>
      </RevealMotion>
      {technicalSkillsRow.description && (
        <RevealMotion delay={baseDelay + 0.05} className={styles.description}>
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
