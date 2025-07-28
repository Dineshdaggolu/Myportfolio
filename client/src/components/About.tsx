import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const badges = [
    { text: "Problem Solver", gradient: "from-accent-cyan to-accent-purple" },
    { text: "Creative Thinker", gradient: "from-accent-purple to-accent-green" },
    { text: "Team Player", gradient: "from-accent-green to-accent-cyan" }
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title text-center text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-text-light">
              I'm a motivated B.Tech student at Vel Tech Rangarajan Dr. Sagunthala R&D Institute 
              of Science and Technology (2023-2027) with a current CGPA of 8.592. I specialize in 
              Python programming, Data Structures, DBMS, and Algorithms with a strong foundation 
              in problem-solving and logical thinking.
            </p>
            <p className="text-lg leading-relaxed text-text-light">
              I am eager to contribute to meaningful projects while advancing my knowledge in 
              software development, web technologies, and Android development. I have earned 
              certifications in Python programming, Data Science from IBM, and Database Management 
              Systems, demonstrating my commitment to continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              {badges.map((badge, index) => (
                <motion.span
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${badge.gradient} rounded-full text-sm font-medium text-white`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {badge.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Computer science student workspace" 
              className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-xl opacity-80"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
