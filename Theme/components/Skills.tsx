import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Server, Code, Github, Terminal, Globe, Database } from 'lucide-react'

const Skills = () => {
 const skillsRef = useRef<HTMLElement>(null);

  return (
    <div>
      <section id="skills" ref={skillsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600">
              My expertise spans across frontend, backend, and DevOps
              technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {[
                  { name: "React / Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "CSS / Tailwind / Styled Components", level: 85 },
                  { name: "Redux / Context API", level: 80 },
                  { name: "Testing (Jest, React Testing Library)", level: 75 },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.1 * index,
                          ease: [0.34, 1.56, 0.64, 1], 
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-full mr-4">
                  <Server className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Node.js / Express", level: 90 },
                  { name: "Python / Django", level: 75 },
                  { name: "SQL / NoSQL Databases", level: 85 },
                  { name: "GraphQL / REST APIs", level: 80 },
                  { name: "AWS / Firebase", level: 70 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.1 * index,
                          ease: [0.34, 1.56, 0.64, 1], // Spring-like animation
                        }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Skills */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Git / GitHub", icon: <Github className="h-6 w-6" /> },
                {
                  name: "Docker / Kubernetes",
                  icon: <Terminal className="h-6 w-6" />,
                },
                { name: "CI/CD", icon: <Server className="h-6 w-6" /> },
                { name: "Agile / Scrum", icon: <Globe className="h-6 w-6" /> },
                { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
                { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
                { name: "Redis", icon: <Database className="h-6 w-6" /> },
                { name: "Serverless", icon: <Server className="h-6 w-6" /> },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center"
                >
                  <div className="mr-3 text-primary">{skill.icon}</div>
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Skills
