import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null)

  return (
    <div>
      <section id="contact" ref={contactRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a
                      href="mailto:alex@example.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">LinkedIn</h4>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      linkedin.com/in/alexchen
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">GitHub</h4>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      github.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">Current Status</h3>
                <motion.div
                  className="bg-green-50 border border-green-100 rounded-lg p-4 inline-flex items-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="h-3 w-3 bg-green-500 rounded-full mr-3 animate-pulse-subtle"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  ></motion.div>
                  <span className="font-medium">
                    Available for freelance projects
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className="rounded-lg"
                  />
                </div>

                <motion.button
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 rounded-full text-white font-medium px-6 py-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
