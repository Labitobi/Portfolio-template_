import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const Testimonials = () => {
   const testimonialsRef = useRef<HTMLElement>(null)

  return (
    <div>
      <section
        id="testimonials"
        ref={testimonialsRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">
              What people say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager at TechStart",
                image: "/Sarah-Johnson.png",
                text: "Alex delivered our project on time and exceeded our expectations. His technical expertise and attention to detail made our application not only functional but also user-friendly and scalable.",
              },
              {
                name: "Michael Rodriguez",
                role: "CTO at InnovateCorp",
                image: "/Micheal-Rodriguez.png",
                text: "Working with Alex was a pleasure. He quickly understood our complex requirements and implemented elegant solutions. His communication skills and proactive approach made the development process smooth.",
              },
              {
                name: "Emily Chen",
                role: "Founder of DesignHub",
                image: "/Emily-Chen.png",
                text: "Alex transformed our design concepts into a fully functional web application. His ability to bridge the gap between design and development is exceptional. I highly recommend his services.",
              },
              {
                name: "David Kim",
                role: "Lead Developer at WebFuture",
                image: "/David-Kim.png",
                text: "As a fellow developer, I was impressed by Alex's clean code and thoughtful architecture decisions. He's a valuable addition to any development team and brings both technical skills and leadership.",
              },
              {
                name: "Jessica Martinez",
                role: "E-commerce Director",
                image: "/Jessica-Martinez.png",
                text: "Our e-commerce platform needed significant performance improvements. Alex identified the bottlenecks and optimized our application, resulting in a 60% faster load time and increased conversions.",
              },
              {
                name: "Robert Wilson",
                role: "Startup Founder",
                image: "/Robert-Wilson.png",
                text: "Alex helped us build our MVP from scratch. His fullstack expertise allowed us to launch quickly with a solid foundation. He continues to be our go-to developer for all technical challenges.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      fill
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>

                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
