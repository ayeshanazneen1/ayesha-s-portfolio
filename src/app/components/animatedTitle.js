// components/animatedTitle.js
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Software Engineer",
  "MERN Stack Developer",
  "Android Native Developer",
];

export default function AnimatedTitle({ className }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % titles.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        <motion.span
          key={titles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="block absolute left-0 top-0"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
