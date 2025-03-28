import React, { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [activeProjectFilter, setActiveProjectFilter] = useState("all");

  type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    links: {
      github: string;
      live: string;
    };
  };

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, payment processing with Stripe, and order tracking.",
      image: "/Project-images/ecommerce.png",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "fullstack",
      links: {
        github: "https://github.com/username/ecommerce-platform",
        live: "https://ecommerce-platform.com",
      },
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates. Built with React, Express, Socket.io, and PostgreSQL. Features include task assignment, progress tracking, team collaboration, and detailed analytics.",
      image: "/Project-images/task-management.png",
      tags: ["React", "Express", "PostgreSQL", "Socket.io", "Docker"],
      category: "fullstack",
      links: {
        github: "https://github.com/username/task-management",
        live: "https://task-app.com",
      },
    },
    {
      title: "Developer Portfolio Template",
      description:
        "An open-source portfolio template for developers. Built with Next.js and Tailwind CSS, featuring a minimalist design, dark mode support, and easy customization. Used by over 500 developers worldwide.",
      image: "/Project-images/dev-portfolio.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "frontend",
      links: {
        github: "https://github.com/username/dev-portfolio",
        live: "https://dev-portfolio-template.com",
      },
    },
    {
      title: "API Gateway Service",
      description:
        "A microservice API gateway built with Node.js and Express. Handles authentication, rate limiting, request routing, and service discovery for a distributed system architecture.",
      image: "/Project-images/api-service.png",
      tags: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
      category: "backend",
      links: {
        github: "https://github.com/username/api-gateway",
        live: "https://api-docs.example.com",
      },
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "A real-time analytics dashboard for monitoring application performance and user behavior. Built with React, D3.js, and WebSockets for live data visualization.",
      image: "/Project-images/analytics-dashboard.png",
      tags: ["React", "D3.js", "WebSockets", "Node.js", "MongoDB"],
      category: "frontend",
      links: {
        github: "https://github.com/username/analytics-dashboard",
        live: "https://analytics-demo.example.com",
      },
    },
    {
      title: "Serverless Image Processing",
      description:
        "A serverless application for on-the-fly image processing and optimization. Built with AWS Lambda, S3, and CloudFront to handle image resizing, format conversion, and delivery.",
      image: "/Project-images/image-processing.png",
      tags: ["AWS Lambda", "S3", "CloudFront", "Node.js", "Terraform"],
      category: "backend",
      links: {
        github: "https://github.com/username/serverless-image-processing",
        live: "https://img.example.com",
      },
    },
  ];

  
  const filteredProjects = useMemo(() => {
    return activeProjectFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeProjectFilter);
  }, [activeProjectFilter, projects]);

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 mb-8">
            A selection of my recent work and personal projects.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "frontend", "backend", "fullstack"].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveProjectFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeProjectFilter === filter
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  fill
                  alt={project.title}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            See More Projects
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
