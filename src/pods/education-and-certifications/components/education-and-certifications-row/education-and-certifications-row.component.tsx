import { TransitionMaskWrapper } from "@/layouts/main-layout/components/header/components/transition-mask-wrapper/transition-mask-wrapper.component";
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
        <TransitionMaskWrapper>
          <span className={styles.title}>
            {educationAndCertificationsRow.title}
          </span>
        </TransitionMaskWrapper>

        <TransitionMaskWrapper>
          <span className={styles.date}>
            {educationAndCertificationsRow.date}
          </span>
        </TransitionMaskWrapper>
      </div>

      <TransitionMaskWrapper>
        <span className={styles.subtitle}>
          {educationAndCertificationsRow.subtitle}
        </span>
      </TransitionMaskWrapper>

      {educationAndCertificationsRow.description && (
        <TransitionMaskWrapper>
          <p className={styles.description}>
            {educationAndCertificationsRow.description}
          </p>
        </TransitionMaskWrapper>
      )}
    </div>
  );
};
