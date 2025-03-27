import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [headerBg, setHeaderBg] = useState('transparent')
  const [headerShadow, setHeaderShadow] = useState('none')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderBg('white')
        setHeaderShadow('0 4px 6px rgba(0, 0, 0, 0.1)')
      } else {
        setHeaderBg('transparent')
        setHeaderShadow('none')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-5"
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow,
        }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-primary font-bold text-xl">Alex Chen</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative ${
                  activeSection === item.id ? "text-primary" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "50%", x: "-50%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Resume
            </a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.header>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 p-4"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="ml-2 text-xl font-medium">Alex Chen</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full" title="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-3 rounded-full text-lg font-medium ${
                  activeSection === item.id
                    ? "text-primary bg-gray-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)

                  // Add a small delay to ensure the menu closes first
                  setTimeout(() => {
                    scrollToSection(item.id)
                  }, 300)
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Navigation

