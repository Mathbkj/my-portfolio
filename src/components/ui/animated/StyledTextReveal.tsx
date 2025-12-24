import { motion, useInView, type Variants } from "motion/react";
import { type ElementType, useRef } from "react";

interface TextSegment {
  text: string;
  className?: string;
}

interface StyledTextRevealProps {
  segments: TextSegment[];
  as?: ElementType;
  className?: string;
}

export function StyledTextReveal({
  segments,
  as: Component = "span",
  className = "",
}: StyledTextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  let letterIndex = 0;

  return (
    <Component ref={ref} className={`inline-block ${className ?? ""}`}>
      {segments.map((segment, segmentIndex) => {
        const letters = segment.text.split("");
        return (
          <span key={segmentIndex} className={segment.className}>
            {letters.map((letter) => {
              const currentIndex = letterIndex++;
              return (
                <motion.span
                  key={currentIndex.toString()}
                  custom={currentIndex}
                  variants={variants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: currentIndex * 0.03, duration: 0.3 }}
                  style={{ display: "inline-block" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
}
