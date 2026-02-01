import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { EducationAndCertificationsItem } from "../../education-and-certifications.vm";
import styles from "./education-and-certifications-row.module.scss";

interface EducationAndCertificationsRowProps {
  educationAndCertificationsRow: EducationAndCertificationsItem;
  index: number;
}
export const EducationAndCertificationsRowComponent = async (
  props: EducationAndCertificationsRowProps
) => {
  const { educationAndCertificationsRow, index } = props;
  const baseDelay = 3.1 + index * 0.25;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RevealMotion delay={baseDelay}>
          <h4 className={styles.title}>
            {educationAndCertificationsRow.title}
          </h4>
        </RevealMotion>

        <RevealMotion delay={baseDelay + 0.05} className={styles.date}>
          {educationAndCertificationsRow.date}
        </RevealMotion>
      </div>

      <RevealMotion delay={baseDelay + 0.1} className={styles.subtitle}>
        {educationAndCertificationsRow.subtitle}
      </RevealMotion>

      {educationAndCertificationsRow.description && (
        <RevealMotion delay={baseDelay + 0.15} className={styles.description}>
          {educationAndCertificationsRow.description}
        </RevealMotion>
      )}
    </div>
  );
};
