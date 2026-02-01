import { Tag } from "@/components/tag/tag.component";
import { TechnicalSkillsItem } from "../../technical-skills.vm";
import styles from "./technical-skills-row.module.scss";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";

interface TechnicalSkillsRowProps {
  technicalSkillsRow: TechnicalSkillsItem;
  index: number;
}
export const TechnicalSkillsRowComponent = async (
  props: TechnicalSkillsRowProps
) => {
  const { technicalSkillsRow, index } = props;
  const config = PAGE_ANIMATION_DELAYS.technicalSkills.rows;
  const baseDelay = config.base + index * config.increment;

  return (
    <div className={styles.container}>
      <RevealMotion delay={baseDelay}>
        <h4 className={styles.title}>{technicalSkillsRow.title}</h4>
      </RevealMotion>
      {technicalSkillsRow.description && (
        <RevealMotion
          delay={baseDelay + config.offsets.description}
          className={styles.description}
        >
          {technicalSkillsRow.description}
        </RevealMotion>
      )}
      <div className={styles.tagsContainer}>
        {technicalSkillsRow.skills.map((skill) => (
          <RevealMotion
            key={skill.name}
            delay={baseDelay + config.offsets.description}
          >
            <Tag label={skill.name} icon={skill.icon} />
          </RevealMotion>
        ))}
      </div>
    </div>
  );
};
