import { getEducationAndCertifications } from "./education-and-certifications.actions";
import styles from "./education-and-certifications.module.scss";
import { EducationAndCertificationsRowComponent } from "./components/education-and-certifications-row/education-and-certifications-row.component";
import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";
import { Lang } from "@/i18n/getDictionary";

interface EducationAndCertificationsProps {
  lang: Lang;
}

export const EducationAndCertifications = ({ lang }: EducationAndCertificationsProps) => {
  const educationAndCertifications = getEducationAndCertifications(lang);

  return (
    <>
      <RevealMotion delay={PAGE_ANIMATION_DELAYS.educationAndCertifications.title}>
        <h3 className={styles.title}>{educationAndCertifications.title}</h3>
      </RevealMotion>
      <div className={styles.content}>
        {educationAndCertifications.degrees.map((degree, index) => (
          <EducationAndCertificationsRowComponent
            key={degree.date}
            educationAndCertificationsRow={degree}
            index={index}
          />
        ))}
      </div>
    </>
  );
};
