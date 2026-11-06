"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only enable custom cursor on desktop devices
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768 && window.matchMedia("(pointer: fine)").matches);
    };
    
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over links, buttons, or elements with data-cursor="hover"
      const isHoverable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.closest("[data-cursor='hover']");
        
      setIsHovering(!!isHoverable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, [isDesktop, pathname]); // Re-attach listeners on route change

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-muted-gold rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center text-[8px] text-midnight font-medium uppercase tracking-widest"
      animate={{
        x: mousePosition.x - (isHovering ? 32 : 8),
        y: mousePosition.y - (isHovering ? 32 : 8),
        scale: isHovering ? 4 : 1,
        backgroundColor: isHovering ? "#F7F3EA" : "#B89A62",
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {isHovering && <span className="opacity-100 scale-100 transition-opacity delay-100 duration-200">View</span>}
    </motion.div>
  );
}
