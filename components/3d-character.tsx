'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function Character3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  useEffect(() => {
    // Disable mouse tracking on mobile
    if (window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (e.clientX - centerX) / rect.width
      const y = (e.clientY - centerY) / rect.height

      setRotateX(-y * 10)
      setRotateY(x * 10)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        min-h-[350px]
        sm:min-h-[450px]
        md:min-h-[650px]
        overflow-visible
        px-4
      "
    >
      <motion.div
        style={{
          perspective: 1200,
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 20,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            scale: {
              duration: 0.8,
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Shadow */}
          <div
            className="
              absolute
              w-52 h-52
              sm:w-64 sm:h-64
              md:w-80 md:h-80
              rounded-full
              bg-black/20
              blur-3xl
              scale-110
            "
          />

          {/* Image */}
          <div
            className="
              relative
              w-60 h-60
              sm:w-72 sm:h-72
              md:w-[430px] md:h-[430px]
              lg:w-[480px] lg:h-[480px]
              rounded-full
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              border-4
              border-white/10
              z-10
            "
          >
            <img
              src="/myprofile.png"
              alt="Aniket Kuntare"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />

            {/* Shine */}
            <div
              className="
                absolute
                top-0
                left-8
                h-full
                w-16
                rotate-12
                bg-white/10
                blur-xl
              "
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}