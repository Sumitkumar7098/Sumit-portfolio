"use client"

import { motion } from "framer-motion"
import SimpleFade from "@/components/animations/simple-fade"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export default function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <SimpleFade>
        <h2 className="text-2xl font-extralight uppercase tracking-[0.2em] text-zinc-300 sm:text-3xl">{title}</h2>
      </SimpleFade>

      {subtitle && (
        <SimpleFade delay={0.1}>
          <p className="mt-3 text-sm text-zinc-400">{subtitle}</p>
        </SimpleFade>
      )}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-5 h-[1px] bg-green-500 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  )
}
