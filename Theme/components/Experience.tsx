import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);

  return (
    <div>
      <section id="experience" ref={experienceRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-gray-600">
              My professional journey as a software engineer.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
              {[
                {
                  role: "Senior Software Engineer",
                  company: "TechCorp",
                  location: "San Francisco, CA",
                  period: "2021 - Present",
                  description:
                    "Lead developer for the company's core platform. Architected and implemented major features, improved performance by 40%, and mentored junior developers.",
                  technologies: [
                    "React",
                    "Node.js",
                    "AWS",
                    "GraphQL",
                    "MongoDB",
                  ],
                },
                {
                  role: "Software Engineer",
                  company: "InnovateSoft",
                  location: "Seattle, WA",
                  period: "2019 - 2021",
                  description:
                    "Developed and maintained multiple client projects. Implemented CI/CD pipelines, reduced build times by 60%, and collaborated with cross-functional teams.",
                  technologies: [
                    "React",
                    "TypeScript",
                    "Express",
                    "PostgreSQL",
                    "Docker",
                  ],
                },
                {
                  role: "Frontend Developer",
                  company: "WebSolutions",
                  location: "Austin, TX",
                  period: "2017 - 2019",
                  description:
                    "Created responsive web applications for clients across various industries. Improved site performance and implemented modern UI/UX practices.",
                  technologies: [
                    "JavaScript",
                    "HTML/CSS",
                    "Vue.js",
                    "Sass",
                    "Webpack",
                  ],
                },
                {
                  role: "Junior Developer",
                  company: "StartupHub",
                  location: "Boston, MA",
                  period: "2016 - 2017",
                  description:
                    "Assisted in developing web applications and fixing bugs. Participated in code reviews and learned industry best practices.",
                  technologies: [
                    "JavaScript",
                    "jQuery",
                    "PHP",
                    "MySQL",
                    "Bootstrap",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
                  <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="text-lg text-primary">{job.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mt-1">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            className="max-w-3xl mx-auto mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">
                      Master of Science in Computer Science
                    </h4>
                    <p className="text-primary">Stanford University</p>
                    <p className="text-gray-600">2014 - 2016</p>
                    <p className="mt-2">
                      Specialized in Artificial Intelligence and Machine
                      Learning. Thesis on "Optimizing Neural Networks for Web
                      Applications".
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">
                      Bachelor of Science in Computer Engineering
                    </h4>
                    <p className="text-primary">MIT</p>
                    <p className="text-gray-600">2010 - 2014</p>
                    <p className="mt-2">
                      Graduated with honors. Active member of the Coding Club
                      and participated in multiple hackathons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience
