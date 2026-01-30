import { TransitionMaskWrapper } from "@/layouts/main-layout/components/header/components/transition-mask-wrapper/transition-mask-wrapper.component";
import { ExperienceItem } from "../../experience.vm";
import styles from "./experience-row.module.scss";

interface ExperienceRowProps {
  experienceRow: ExperienceItem;
}
export const ExperienceRowComponent = async (props: ExperienceRowProps) => {
  const { experienceRow } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TransitionMaskWrapper>
          <span className={styles.title}>{experienceRow.title}</span>
        </TransitionMaskWrapper>
        <TransitionMaskWrapper>
          <span className={styles.date}>{experienceRow.date}</span>
        </TransitionMaskWrapper>
      </div>
      <TransitionMaskWrapper>
        <span className={styles.subtitle}>{experienceRow.subtitle}</span>
      </TransitionMaskWrapper>

      <ul className={styles.list}>
        {experienceRow.keyContributions.map((contribution, index) => (
          <TransitionMaskWrapper key={index}>
            <li className={styles.listItem}>{contribution}</li>
          </TransitionMaskWrapper>
        ))}
      </ul>
    </div>
  );
};
