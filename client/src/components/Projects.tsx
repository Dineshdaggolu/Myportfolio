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
      title: "Python Data Analysis Tool",
      description: "Comprehensive data analysis application using Python and pandas for processing large datasets, generating insights, and creating visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Python", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "Pandas", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "Data Science", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com/dineshdag",
      demoUrl: "https://demo.com"
    },
    {
      title: "Student Management System",
      description: "Database-driven student management system with CRUD operations, built using Python and SQL for efficient data handling and retrieval.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Python", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "SQL", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "DBMS", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com/dineshdag",
      demoUrl: "https://demo.com"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application to visualize sorting algorithms and data structures, helping students understand complex algorithmic concepts.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Python", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "Algorithms", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "Data Structures", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com/dineshdag",
      demoUrl: "https://demo.com"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern responsive portfolio website showcasing projects and skills, built with HTML, CSS, and enhanced with 3D animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "HTML", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "CSS", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "JavaScript", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com/dineshdag",
      demoUrl: "https://demo.com"
    },
    {
      title: "Python Automation Scripts",
      description: "Collection of Python automation scripts for daily tasks including file organization, data processing, and system monitoring.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "Python", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "Automation", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "Scripts", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com/dineshdag",
      demoUrl: "https://demo.com"
    },
    {
      title: "Database Design Project",
      description: "Comprehensive database design project implementing normalized database schema with complex queries and stored procedures.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { name: "MySQL", color: "bg-accent-cyan/20 text-accent-cyan" },
        { name: "Database Design", color: "bg-accent-purple/20 text-accent-purple" },
        { name: "SQL", color: "bg-accent-green/20 text-accent-green" }
      ],
      githubUrl: "https://github.com/dineshdag",
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
