import { getEducationAndCertifications } from "./education-and-certifications.actions";
import styles from "./education-and-certifications.module.scss";
import { EducationAndCertificationsRowComponent } from "./components/education-and-certifications-row/education-and-certifications-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";

export const EducationAndCertifications = async () => {
  const educationAndCertifications = await getEducationAndCertifications();

  return (
    <>
      <RevealMotion>
        <h3 className={styles.title}>Education & Certifications</h3>
      </RevealMotion>
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
