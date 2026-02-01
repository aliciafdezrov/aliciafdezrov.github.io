import { getTechnicalSkills } from "./technical-skills.actions";
import styles from "./technical-skills.module.scss";
import { TechnicalSkillsRowComponent } from "./components/technical-skills-row/technical-skills-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";

export const TechnicalSkills = () => {
  const technicalSkills = getTechnicalSkills();

  return (
    <>
      <RevealMotion delay={2.0}>
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
