'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-accent/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-serif text-2xl font-bold text-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AK
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest font-sans text-foreground/70 hover:text-accent transition-colors"
                whileHover={{ color: 'var(--color-accent)' }}
              >
                {link.label}
              </motion.a>
            ))}
           
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
