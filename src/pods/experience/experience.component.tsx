import { Suspense } from "react";
import { getExperience } from "./experience.actions";
import styles from "./experience.module.scss";
import { ExperienceRowComponent } from "./components/experience-row/experience-row.component";
import { TransitionMaskWrapper } from "@/layouts/main-layout/components/header/components/transition-mask-wrapper/transition-mask-wrapper.component";

const ExperienceComponent = async () => {
  const experience = await getExperience();

  return (
    <div className={styles.container}>
      <TransitionMaskWrapper>
        <span className={styles.title}>Work Experience</span>
      </TransitionMaskWrapper>
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
