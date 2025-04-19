"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
} from "lucide-react"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Testimonials from "@/components/Testimonials"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Contact from "@/components/Contact"
import { DayPickerProvider } from "react-day-picker"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

// Add this component right before the closing </div> of the main container
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    toggleVisibility() // Check initial state
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg z-40 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400 }}
      aria-label="Scroll to top"
    >
      <ArrowRight className="h-6 w-6 transform rotate-270" style={{ transform: "rotate(-90deg)" }} />
    </motion.button>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [activeProjectFilter, setActiveProjectFilter] = useState("all")

  interface SectionRef {
    current: HTMLElement | null
  }

  interface NavItem {
    id: string
    label: string
  }

  interface Project {
    title: string
    description: string
    image: string
    tags: string[]
    category: string
    links: {
      github: string
      live: string
    }
  }

  const scrollToSection = (elementId: string): void => {
    const element = document.getElementById(elementId)
    if (!element) return

    // Get the header height to offset the scroll position
    const headerHeight = document.querySelector("header")?.offsetHeight || 0

    // Calculate position with respect to the document
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset

    // Scroll with smooth behavior
    window.scrollTo({
      top: elementPosition - headerHeight - 20, // Additional 20px for padding
      behavior: "smooth",
    })
  }

  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"])
  const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 6px 16px rgba(0, 0, 0, 0.08)"])

  // Refs for sections
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Check which section is in view
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Throttle function to limit how often the scroll handler fires
    interface ThrottleCallback {
      (...args: any[]): void
    }

    const throttle = (callback: ThrottleCallback, delay: number): ThrottleCallback => {
      let lastCall = 0
      return (...args: any[]) => {
      const now = new Date().getTime()
      if (now - lastCall >= delay) {
        lastCall = now
        callback(...args)
      }
      }
    }

    const handleScroll = throttle(() => {
      // Get the header height to adjust the scroll position
      const headerHeight = document.querySelector("header")?.offsetHeight || 0
      const scrollPosition = window.scrollY + headerHeight + 10 // Add some buffer

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "experience", ref: experienceRef },
        { id: "testimonials", ref: testimonialsRef },
        { id: "contact", ref: contactRef },
      ]

      for (const section of sections) {
        if (!section.ref.current) continue

        const element = section.ref.current
        const offsetTop = element.offsetTop
        const height = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          if (activeSection !== section.id) {
            setActiveSection(section.id)
            // Update URL hash without scrolling
            history.replaceState(null, "", `#${section.id}`)
          }
          break
        }
      }
    }, 100) // Throttle to run at most every 100ms

    window.addEventListener("scroll", handleScroll)

    // Initial check for active section
    setTimeout(handleScroll, 100)

    // Check if URL has a hash on load and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
    }
  },)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, payment processing with Stripe, and order tracking.",
      image: "/placeholder.svg?height=400&width=700",
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
      image: "/placeholder.svg?height=400&width=700",
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
      image: "/placeholder.svg?height=400&width=700",
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
      image: "/placeholder.svg?height=400&width=700",
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
      image: "/placeholder.svg?height=400&width=700",
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
      image: "/placeholder.svg?height=400&width=700",
      tags: ["AWS Lambda", "S3", "CloudFront", "Node.js", "Terraform"],
      category: "backend",
      links: {
        github: "https://github.com/username/serverless-image-processing",
        live: "https://img.example.com",
      },
    },
  ]

  const filteredProjects =
    activeProjectFilter === "all" ? projects : projects.filter((project) => project.category === activeProjectFilter)

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent h-[50vh]" />
      </motion.div>
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <DayPickerProvider initialProps={{}}>
        <Footer />
      </DayPickerProvider>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

