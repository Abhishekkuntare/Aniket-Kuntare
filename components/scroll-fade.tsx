'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrollFadeProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export function ScrollFade({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { y: 50 }
      case 'down':
        return { y: -50 }
      case 'left':
        return { x: 50 }
      case 'right':
        return { x: -50 }
      default:
        return { y: 50 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialState() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialState() }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
