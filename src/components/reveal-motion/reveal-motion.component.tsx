"use client";
import { useState } from "react";
import { motion } from "motion/react";
import styles from "./reveal-motion.module.scss";
import { cn } from "@/lib/cn";

interface RevealMotionProps extends React.PropsWithChildren {
  children: React.ReactNode;
  delay?: number;
  translateY?: string;
  className?: string;
  blur?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const RevealMotion = ({
  children,
  delay = 0,
  translateY = "1rem",
  blur = "1rem",
  className,
  as = "div",
  ...rest
}: RevealMotionProps) => {
  const [maskRemoved, setMaskRemoved] = useState(false);
  const MotionTag = (motion as unknown as Record<string, React.ElementType>)[as];

  const handleAnimationComplete = () => {
    setMaskRemoved(true);
  };

  // If mask is removed after transition, use the no-mask version
  if (maskRemoved) {
    return (
      <MotionTag className={cn(styles.revealedNoMask, className)} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial={{
        maskPosition: "100% 0",
        filter: `blur(${blur})`,
        transform: `translateY(${translateY})`,
      }}
      animate={{
        maskPosition: "0% 0",
        filter: "blur(0)",
        transform: "translateY(0)",
      }}
      transition={{
        delay: delay,
        duration: 1,
        ease: "easeOut",
      }}
      onAnimationComplete={handleAnimationComplete}
      className={cn(styles.revealMotion, className)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};
