"use client";
import { useEffect, useState } from "react";
import styles from "./transition-mask.module.scss";
import { cn } from "@/lib/cn";

export const TransitionMask = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return <div className={cn(styles.mask, isHidden && styles.maskHidden)} />;
};
