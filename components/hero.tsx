'use client'

import { Character3D } from './3d-character'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-px h-full bg-accent/10"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-accent/10"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        {/* Left Content */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small tagline */}
          <div className="flex items-center gap-4">
            {/* <span className="w-12 h-px bg-accent"></span> */}
            {/* <p className="text-sm uppercase tracking-widest font-sans text-accent">Since 2024</p> */}
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight">
              Aniket<br />
              <span className="text-accent">Kuntare</span>
            </h1>
            
            <p className="text-2xl font-serif text-muted tracking-wide">
              Cybersecurity Professional
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/80 leading-relaxed font-sans max-w-lg">
            2+ years crafting secure IT infrastructure, mastering penetration testing, and building resilient cybersecurity solutions. Specializing in vulnerability assessment and advanced threat analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="#contact"
              className="px-10 py-4 bg-accent text-accent-foreground font-semibold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity border border-accent text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#experience"
              className="px-10 py-4 border-2 border-accent text-accent font-semibold uppercase tracking-widest text-sm hover:bg-accent hover:text-accent-foreground transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Work
            </motion.a>
            <motion.a
              href="/AniketKuntareResume.pdf"
              download="AniketKuntareResume.pdf"
              className="px-10 py-4 border-2 border-accent/50 text-foreground/70 font-semibold uppercase tracking-widest text-sm hover:border-accent hover:bg-accent/10 transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-serif text-accent font-bold">2+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60">Years Exp</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-serif text-accent font-bold">5</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60">Certs</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-serif text-accent font-bold">20+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60">Skills</div>
            </div>
          </div>
        </motion.div>

        {/* Right - 3D Character */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <Character3D />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
