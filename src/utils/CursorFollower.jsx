import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "./animations";

export default function CursorFollower({
  text = "Hover Me",
  icon = "",
  className = "",
  textClassName = "text-white",
  gradientFrom = "rgba(255,255,255,0.9)",
  gradientTo = "rgba(255,255,255,0.2)",
  circleSize = 80,
  framerAtts = {},
  hoverColor ,
  children
}) {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [textHovered, setTextHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCirclePos({ x, y });

    // Collision detection
    if (textRef.current) {
      const textRect = textRef.current.getBoundingClientRect();
      const distX = e.clientX - (textRect.left + textRect.width / 2);
      const distY = e.clientY - (textRect.top + textRect.height / 2);
      const distance = Math.sqrt(distX * distX + distY * distY);
      setTextHovered(distance < circleSize / 1.5);
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden cursor-none group text-center${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTextHovered(false);
      }}
      {...framerAtts}
    >
      {/* Absolutely positioned container for the glow */}
      <div className="absolute inset-0 z-0 pointer-events-none sm:block hidden">
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="glow"
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{
                left: circlePos.x,
                top: circlePos.y,
                x: "-50%",
                y: "-50%",
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute rounded-full"
              style={{
                width: circleSize,
                height: circleSize,
                background: `radial-gradient(circle at center, ${gradientFrom}, ${gradientTo})`,
                filter: "blur(10px)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Content wrapper to isolate text+icon from animation layout */}
      {children || (
        <div className="relative z-20 flex items-center justify-center ">
        <span
          ref={textRef}
          className={`transition-colors duration-150 ${textClassName}`}
          style={{ color: textHovered ? "#ffffff " || hoverColor : "" }}
        >
          {text}
        </span>
        <span className="z-40">{icon}</span>
      </div>
      )}
    </motion.button>
  );
}
