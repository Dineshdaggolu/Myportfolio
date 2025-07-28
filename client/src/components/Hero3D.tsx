import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import FloatingElements from "./FloatingElements";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const meshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating geometries
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.5, 1.5, 8),
      new THREE.TorusGeometry(0.6, 0.2, 16, 100)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x06B6D4, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x8B5CF6, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x10B981, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xF59E0B, wireframe: true })
    ];

    const meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const mesh = new THREE.Mesh(geometries[i], materials[i]);
      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 6;
      mesh.position.z = (Math.random() - 0.5) * 5;
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 8;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    meshesRef.current = meshes;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-3d relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <FloatingElements />
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Alex Chen
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl mb-4 text-text-muted"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Computer Science Engineering Student
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-text-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Passionate about creating innovative solutions through code. Specializing in web development, 
          machine learning, and 3D graphics programming.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-3d"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-3d"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
      
      {/* 3D Objects Container */}
      <div ref={containerRef} className="absolute inset-0 z-0" />
    </section>
  );
}
