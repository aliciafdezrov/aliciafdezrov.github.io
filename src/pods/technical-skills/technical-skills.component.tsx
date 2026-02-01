import { getTechnicalSkills } from "./technical-skills.actions";
import styles from "./technical-skills.module.scss";
import { TechnicalSkillsRowComponent } from "./components/technical-skills-row/technical-skills-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";

export const TechnicalSkills = async () => {
  const technicalSkills = await getTechnicalSkills();

  return (
    <>
      <RevealMotion>
        <h3 className={styles.title}>Technical skills</h3>
      </RevealMotion>
      <div className={styles.content}>
        {technicalSkills.categories.map((category) => (
          <TechnicalSkillsRowComponent
            key={category.title}
            technicalSkillsRow={category}
          />
        ))}
      </div>
    </>
  );
};
