import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { EducationAndCertificationsItem } from "../../education-and-certifications.vm";
import styles from "./education-and-certifications-row.module.scss";

interface EducationAndCertificationsRowProps {
  educationAndCertificationsRow: EducationAndCertificationsItem;
}
export const EducationAndCertificationsRowComponent = async (
  props: EducationAndCertificationsRowProps
) => {
  const { educationAndCertificationsRow } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RevealMotion>
          <h4 className={styles.title}>
            {educationAndCertificationsRow.title}
          </h4>
        </RevealMotion>

        <RevealMotion className={styles.date}>
          {educationAndCertificationsRow.date}
        </RevealMotion>
      </div>

      <RevealMotion className={styles.subtitle}>
        {educationAndCertificationsRow.subtitle}
      </RevealMotion>

      {educationAndCertificationsRow.description && (
        <RevealMotion className={styles.description}>
          {educationAndCertificationsRow.description}
        </RevealMotion>
      )}
    </div>
  );
};
