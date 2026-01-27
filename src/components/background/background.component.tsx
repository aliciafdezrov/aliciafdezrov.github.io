import styles from "./background.module.scss";

export const Background = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.mask}>
        <div className={styles.dots} />
      </div>
    </div>
  );
};
