import { Suspense } from "react";
import { getEducationAndCertifications } from "./education-and-certifications.actions";
import styles from "./education-and-certifications.module.scss";
import { EducationAndCertificationsRowComponent } from "./components/education-and-certifications-row/education-and-certifications-row.component";
import { TransitionMaskWrapper } from "@/layouts/main-layout/components/header/components/transition-mask-wrapper/transition-mask-wrapper.component";

const EducationAndCertificationsComponent = async () => {
  const educationAndCertifications = await getEducationAndCertifications();

  return (
    <>
      <TransitionMaskWrapper>
        <span className={styles.title}>Education & Certifications</span>
      </TransitionMaskWrapper>
      <div className={styles.content}>
        {educationAndCertifications.degrees.map((degree) => (
          <EducationAndCertificationsRowComponent
            key={degree.date}
            educationAndCertificationsRow={degree}
          />
        ))}
      </div>
    </>
  );
};

export const EducationAndCertifications = async () => {
  return (
    <Suspense fallback={"Loading..."}>
      <EducationAndCertificationsComponent />
    </Suspense>
  );
};
