import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: Array<{ name: string; color: string }>;
  githubUrl: string;
  demoUrl: string;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects: Project[] = [
    {
      title: "AI Data Visualizer",
      description: "Interactive dashboard for visualizing complex datasets using machine learning algorithms and D3.js for dynamic chart generation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Python", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "TensorFlow", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "D3.js", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "3D Portfolio Engine",
      description: "Web-based 3D portfolio platform built with Three.js, featuring interactive models, particle systems, and WebGL shaders.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Three.js", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "WebGL", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "React", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Crypto Trading Bot",
      description: "Automated cryptocurrency trading system using machine learning for market prediction and real-time trading execution.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Python", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "ML", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "APIs", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Smart Campus App",
      description: "Cross-platform mobile application for campus navigation, resource booking, and student collaboration with real-time updates.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "React Native", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "Firebase", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "Maps API", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "IoT Monitoring System",
      description: "Real-time IoT sensor monitoring dashboard with predictive analytics for environmental data collection and automated alerts.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Arduino", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "MQTT", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "Node.js", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "VR Learning Platform",
      description: "Virtual reality educational platform for immersive learning experiences in science and engineering with multiplayer capabilities.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Unity", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "C#", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "VR SDK", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title text-center text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -12, rotateX: 5, rotateY: 5 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-2 py-1 ${tag.color} rounded text-sm font-medium`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-cyan hover:text-accent-purple transition-colors"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-cyan hover:text-accent-purple transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
