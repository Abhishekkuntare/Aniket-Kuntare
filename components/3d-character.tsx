'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function Character3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  useEffect(() => {
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
      className="relative flex items-center justify-center w-full min-h-[500px] md:min-h-[650px]"
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
  className="relative"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -8, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    scale: { duration: 0.8 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>
  {/* Soft Shadow */}
  <div className="absolute inset-0 rounded-full bg-black/20 blur-3xl scale-90" />

  {/* Profile Image */}
  <div
    className="
      relative
      w-80 h-80
      md:w-[430px] md:h-[430px]
      rounded-full
      overflow-hidden
      shadow-2xl
    "
  >
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2024%2C%202026%2C%2009_03_10%20PM-uWZJmnfM5Dd8vhVkbzXOPz6gzHcaxn.png"
      alt="Aniket Kuntare"
      className="w-full h-full object-cover"
      draggable={false}
    />

    {/* Static Shine */}
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