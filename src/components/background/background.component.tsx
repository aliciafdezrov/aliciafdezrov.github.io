import styles from "./background.module.css";

interface BackgroundProps {
  dotSize?: string;
  dotColor?: string;
  dotOpacity?: number;
}

export const Background = ({
  dotSize = "2px",
  dotColor = "#0279be",
  dotOpacity = 0.4,
}: BackgroundProps) => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.mask}>
        <div
          className={styles.dots}
          style={
            {
              "--dots-color": dotColor,
              "--dots-size": dotSize,
              "--dots-opacity": dotOpacity,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};
