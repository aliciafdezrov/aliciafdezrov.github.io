import { getTechnicalSkills } from "./technical-skills.actions";
import styles from "./technical-skills.module.scss";
import { TechnicalSkillsRowComponent } from "./components/technical-skills-row/technical-skills-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";

export const TechnicalSkills = () => {
  const technicalSkills = getTechnicalSkills();

  return (
    <>
      <RevealMotion delay={PAGE_ANIMATION_DELAYS.technicalSkills.title}>
        <h3 className={styles.title}>Technical skills</h3>
      </RevealMotion>
      <div className={styles.content}>
        {technicalSkills.categories.map((category, index) => (
          <TechnicalSkillsRowComponent
            key={category.title}
            technicalSkillsRow={category}
            index={index}
          />
        ))}
      </div>
    </>
  );
};
