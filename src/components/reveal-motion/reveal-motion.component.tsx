"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import styles from "./reveal-motion.module.scss";

interface RevealMotionProps extends React.PropsWithChildren {
  children: React.ReactNode;
  delay?: number;
  translateY?: string;
  className?: string;
}

export const RevealMotion = ({
  children,
  delay = 0,
  translateY = "1rem",
  className,
  ...rest
}: RevealMotionProps) => {
  const [maskRemoved, setMaskRemoved] = useState(false);

  const handleAnimationComplete = () => {
    setMaskRemoved(true);
  };

  // If mask is removed after transition, use the no-mask version
  if (maskRemoved) {
    return (
      <motion.div
        className={`${styles.revealedNoMask} ${className || ""}`}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{
        maskPosition: "100% 0",
        filter: "blur(1rem)",
        transform: `translateY(${translateY})`,
      }}
      animate={{
        maskPosition: "0% 0",
        filter: "blur(0)",
        transform: "translateY(0)",
      }}
      transition={{
        delay: delay,
        duration: 2,
        ease: "easeInOut",
      }}
      onAnimationComplete={handleAnimationComplete}
      className={`${styles.revealMotion} ${className || ""}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
