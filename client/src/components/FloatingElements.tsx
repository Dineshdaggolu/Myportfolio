import { motion } from "framer-motion";

export default function FloatingElements() {
  const elements = [
    { 
      size: "w-20 h-20", 
      position: "top-20 left-10", 
      gradient: "from-accent-cyan to-accent-purple",
      shape: "rounded-lg",
      delay: 0 
    },
    { 
      size: "w-16 h-16", 
      position: "top-40 right-20", 
      gradient: "from-accent-purple to-accent-cyan",
      shape: "rounded-full",
      delay: -2 
    },
    { 
      size: "w-12 h-12", 
      position: "bottom-40 left-1/4", 
      gradient: "from-accent-green to-accent-cyan",
      shape: "rounded-lg",
      delay: -4 
    }
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`floating-element absolute ${element.size} ${element.position} bg-gradient-to-br ${element.gradient} ${element.shape} opacity-70`}
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </>
  );
}
