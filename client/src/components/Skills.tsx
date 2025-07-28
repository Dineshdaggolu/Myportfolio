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
      title: "Frontend Development",
      icon: "fas fa-code",
      iconColor: "text-accent-cyan",
      skills: [
        { name: "React.js", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "CSS/Tailwind", percentage: 88 }
      ],
      description: "Experienced in building responsive, interactive web applications using modern frameworks and libraries. Passionate about creating seamless user experiences with clean, maintainable code."
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      iconColor: "text-accent-purple",
      skills: [
        { name: "Node.js", percentage: 82 },
        { name: "Python", percentage: 87 },
        { name: "Database", percentage: 80 }
      ],
      description: "Proficient in server-side development, API design, and database management. Experience with cloud platforms and microservices architecture."
    },
    {
      title: "Machine Learning",
      icon: "fas fa-brain",
      iconColor: "text-accent-green",
      skills: [
        { name: "TensorFlow", percentage: 75 },
        { name: "Scikit-learn", percentage: 78 },
        { name: "Data Analysis", percentage: 83 }
      ],
      description: "Passionate about artificial intelligence and machine learning. Experience with deep learning, data preprocessing, and model optimization techniques."
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
