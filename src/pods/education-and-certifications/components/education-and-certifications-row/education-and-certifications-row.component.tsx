import { EducationAndCertificationsItem } from "../../education-and-certifications.vm";
import styles from "./education-and-certifications-row.module.scss";

interface EducationAndCertificationsRowProps {
  educationAndCertificationsRow: EducationAndCertificationsItem;
}
export const EducationAndCertificationsRowComponent = async (props: EducationAndCertificationsRowProps) => {
  const { educationAndCertificationsRow } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{educationAndCertificationsRow.title}</span>
        <span className={styles.date}>{educationAndCertificationsRow.date}</span>
      </div>
      <span className={styles.subtitle}>{educationAndCertificationsRow.subtitle}</span>

      {educationAndCertificationsRow.description && (
        <p className={styles.description}>{educationAndCertificationsRow.description}</p>
      )}
    </div>
  );
};
