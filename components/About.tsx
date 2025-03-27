import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

const About = () => {
  const aboutRef = useRef(null)

  return (
    <div>
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p>
                  I'm a passionate fullstack developer with over 5 years of
                  experience building web applications and services. My journey
                  in software development began during my computer science
                  studies, where I discovered my love for creating elegant
                  solutions to complex problems.
                </p>

                <p>
                  Currently, I work as a Senior Software Engineer at{" "}
                  <strong>TechCorp</strong>, where I lead development on our
                  core platform. I specialize in building scalable applications
                  using React, Node.js, and AWS, with a strong focus on code
                  quality and user experience.
                </p>

                <p>
                  When I'm not coding, you can find me contributing to open
                  source projects, writing technical articles, or exploring new
                  technologies. I'm particularly interested in serverless
                  architectures, WebAssembly, and the future of web development.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/alexchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-[#24292e] text-white rounded-full hover:bg-[#1b1f23] transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/alexchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-[#0077B5] text-white rounded-full hover:bg-[#006699] transition-colors"
                  >
                    <Linkedin size={18} className="mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/alexchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a91da] transition-colors"
                  >
                    <Twitter size={18} className="mr-2" />
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
