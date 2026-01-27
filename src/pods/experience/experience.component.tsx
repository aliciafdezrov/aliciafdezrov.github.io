import { Suspense } from "react";
import { getExperience } from "./experience.actions";
import styles from "./experience.module.scss";
import { ExperienceRowComponent } from "./components/experience-row/experience-row.component";

const ExperienceComponent = async () => {
  const experience = await getExperience();

  return (
    <div className={styles.container}>
      <span className={styles.title}>Work Experience</span>
      {experience.jobs.map((job) => (
        <ExperienceRowComponent key={job.date} experienceRow={job} />
      ))}
    </div>
  );
};

export const Experience = async () => {
  return (
    <Suspense fallback={"Loading..."}>
      <ExperienceComponent />
    </Suspense>
  );
};
