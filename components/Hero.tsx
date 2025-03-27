import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Hero = () => {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 300], [0, 50])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div>
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="flex-1 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ y }}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-primary shadow-lg overflow-hidden animate-float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/Alex-Chen.png"
                  fill
                  alt="Alex Chen"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 text-center lg:text-right"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                className="inline-block px-4 py-1 mb-6 bg-primary/10 rounded-full text-sm font-medium text-primary"
                variants={fadeInUp}
              >
                Fullstack Software Engineer
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                variants={fadeInUp}
              >
                Hi, I'm Alex Chen
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                I build exceptional digital experiences with clean, efficient
                code. Specializing in fullstack development with a focus on
                React, Node.js, and cloud technologies.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  className="text-base px-8 bg-primary hover:bg-primary/90 rounded-full"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 border-gray-300 text-gray-700 hover:bg-primary rounded-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero
