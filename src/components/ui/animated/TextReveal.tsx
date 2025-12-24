import { motion, useInView, type Variants } from "motion/react";
import { type ElementType, useRef } from "react";

interface TextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  startIndex?: number; // Add this to control the starting delay
}

export function TextReveal({
  text,
  as: Component = "span",
  className = "",
  startIndex = 0,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  const variants: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)", color: "orange" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", color: "black" },
  };

  const letters = text.split("");

  return (
    <Component ref={ref} className={`inline-block ${className ?? ""}`}>
      {letters.map((letter, index) => (
        <motion.span
          custom={index}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: (startIndex + index) * 0.015, duration: 0.15 }}
          key={index.toString()}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Component>
  );
}
