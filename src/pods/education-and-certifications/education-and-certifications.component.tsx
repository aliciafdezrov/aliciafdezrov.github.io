import { Suspense } from "react";
import { getEducationAndCertifications } from "./education-and-certifications.actions";
import styles from "./education-and-certifications.module.css";
import { EducationAndCertificationsRowComponent } from "./components/education-and-certifications-row/education-and-certifications-row.component";

const EducationAndCertificationsComponent = async () => {
  const educationAndCertifications = await getEducationAndCertifications();

  return (
    <div className={styles.container}>
      <span className={styles.title}>Education & Certifications</span>
      {educationAndCertifications.degrees.map((degree) => (
        <EducationAndCertificationsRowComponent key={degree.date} educationAndCertificationsRow={degree} />
      ))}
    </div>
  );
};

export const EducationAndCertifications = async () => {
  return (
    <Suspense fallback={"Loading..."}>
      <EducationAndCertificationsComponent />
    </Suspense>
  );
};
