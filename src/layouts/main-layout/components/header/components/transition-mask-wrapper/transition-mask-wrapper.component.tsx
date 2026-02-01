"use client";
import { motion } from "motion/react";

interface TransitionMaskWrapperProps {
  className?: string;
  delay?: number;
}

export const TransitionMaskWrapper = (
  props: React.PropsWithChildren<TransitionMaskWrapperProps>
) => {
  const { children, className = "", delay = 0 } = props;
  return (
    <motion.span
      initial={{
        x: -10,
        opacity: 0,
        filter: "blur(1rem)",
        maskPosition: "0 100%",
      }}
      animate={{
        x: 0,
        opacity: 1,
        maskPosition: "0 0",
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
        delay,
      }}
      style={{ display: "inline-block" }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.span>
  );
};
