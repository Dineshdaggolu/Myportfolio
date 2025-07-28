import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  iconColor: string;
  skills: Skill[];
  description: string;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateProgress(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      iconColor: "text-accent-cyan",
      skills: [
        { name: "Python", percentage: 90 },
        { name: "HTML", percentage: 85 },
        { name: "CSS", percentage: 80 }
      ],
      description: "Strong foundation in Python programming with HackerRank certification. Experienced in web development using HTML and CSS for creating responsive and modern user interfaces."
    },
    {
      title: "Data & Database",
      icon: "fas fa-database",
      iconColor: "text-accent-purple",
      skills: [
        { name: "DBMS", percentage: 85 },
        { name: "Data Structures", percentage: 88 },
        { name: "Python for Data Science", percentage: 80 }
      ],
      description: "Certified in Database Management Systems from Scalar. Strong understanding of data structures and algorithms. Completed IBM certification in Python for Data Science."
    },
    {
      title: "Core Skills",
      icon: "fas fa-brain",
      iconColor: "text-accent-green",
      skills: [
        { name: "Problem Solving", percentage: 90 },
        { name: "Algorithms", percentage: 85 },
        { name: "Creative Thinking", percentage: 80 }
      ],
      description: "Strong analytical and problem-solving abilities with logical thinking approach. Experienced in algorithmic problem solving and creative approach to technical challenges."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-secondary-dark/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title text-center text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card-3d h-80"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="card-inner h-full">
                <div className="card-front">
                  <div className="text-center h-full flex flex-col justify-center">
                    <i className={`${category.icon} text-4xl ${category.iconColor} mb-4`}></i>
                    <h3 className="text-xl font-semibold mb-4 text-text-light">{category.title}</h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-text-light">{skill.name}</span>
                            <span className="text-sm text-text-muted">{skill.percentage}%</span>
                          </div>
                          <div className="w-full bg-secondary-dark rounded-full h-2">
                            <motion.div 
                              className="skill-progress h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={animateProgress ? { width: `${skill.percentage}%` } : { width: 0 }}
                              transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="text-center h-full flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-4 text-white">{category.title.replace('Development', 'Expertise')}</h3>
                    <p className="text-sm text-white/90">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
