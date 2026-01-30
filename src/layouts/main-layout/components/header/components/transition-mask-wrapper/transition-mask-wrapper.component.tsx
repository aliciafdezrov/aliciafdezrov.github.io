"use client";
import { motion } from "motion/react";

export const TransitionMaskWrapper = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ x: -10, opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      animate={{ x: 0, opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ display: "inline-block" }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div> 
  );
};
