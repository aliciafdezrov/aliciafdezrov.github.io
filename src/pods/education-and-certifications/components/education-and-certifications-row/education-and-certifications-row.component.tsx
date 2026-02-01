import { RevealMotion } from "@/components/reveal-motion/reveal-motion.component";
import { EducationAndCertificationsItem } from "../../education-and-certifications.vm";
import styles from "./education-and-certifications-row.module.scss";
import { PAGE_ANIMATION_DELAYS } from "@/core/animation-delays";

interface EducationAndCertificationsRowProps {
  educationAndCertificationsRow: EducationAndCertificationsItem;
  index: number;
}
export const EducationAndCertificationsRowComponent = async (
  props: EducationAndCertificationsRowProps
) => {
  const { educationAndCertificationsRow, index } = props;
  const config = PAGE_ANIMATION_DELAYS.educationAndCertifications.rows;
  const baseDelay = config.base + index * config.increment;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RevealMotion delay={baseDelay}>
          <h4 className={styles.title}>
            {educationAndCertificationsRow.title}
          </h4>
        </RevealMotion>

        <RevealMotion delay={baseDelay + config.offsets.date} className={styles.date}>
          {educationAndCertificationsRow.date}
        </RevealMotion>
      </div>

      <RevealMotion delay={baseDelay + config.offsets.subtitle} className={styles.subtitle}>
        {educationAndCertificationsRow.subtitle}
      </RevealMotion>

      {educationAndCertificationsRow.description && (
        <RevealMotion delay={baseDelay + config.offsets.description} className={styles.description}>
          {educationAndCertificationsRow.description}
        </RevealMotion>
      )}
    </div>
  );
};
