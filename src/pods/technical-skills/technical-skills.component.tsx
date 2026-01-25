import { Suspense } from "react";
import { getTechnicalSkills } from "./technical-skills.actions";
import styles from "./technical-skills.module.css";
import { TechnicalSkillsRowComponent } from "./components/technical-skills-row/technical-skills-row.component";

const TechnicalSkillsComponent = async () => {
  const technicalSkills = await getTechnicalSkills();

  return (
    <>
      <h2 className={styles.title}>Technical skills</h2>
      <div className={styles.container}>
        {technicalSkills.categories.map((category) => (
          <TechnicalSkillsRowComponent key={category.title} technicalSkillsRow={category} />
        ))}
      </div>
    </>
  );
};

export const TechnicalSkills = async () => {
  return (
    <Suspense fallback={"Loading..."}>
      <TechnicalSkillsComponent />
    </Suspense>
  );
};
