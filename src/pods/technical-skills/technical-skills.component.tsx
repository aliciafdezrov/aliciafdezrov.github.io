import { getTechnicalSkills } from "./technical-skills.actions";
import styles from "./technical-skills.module.scss";
import { TechnicalSkillsRowComponent } from "./components/technical-skills-row/technical-skills-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";
import { Lang } from "@/i18n/getDictionary";

interface TechnicalSkillsProps {
  lang: Lang;
}

export const TechnicalSkills = ({ lang }: TechnicalSkillsProps) => {
  const technicalSkills = getTechnicalSkills(lang);

  return (
    <>
      <RevealMotion delay={PAGE_ANIMATION_DELAYS.technicalSkills.title}>
        <h3 className={styles.title}>{technicalSkills.title}</h3>
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
