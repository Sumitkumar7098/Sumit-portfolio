"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SimpleFadeProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export default function SimpleFade({ children, className = "", delay = 0, duration = 0.5 }: SimpleFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
