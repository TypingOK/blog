"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

const MyInfoTop = ({
  children,
  className = "",
  coordX = 0,
  coordY = 0,
}: {
  children: ReactNode;
  className?: string;
  coordX?: string | number;
  coordY?: string | number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: coordX, y: coordY }}
      whileInView={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MyInfoTop;
