"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageUrl = "/portfolio.jpg"

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950/90 z-0" />

      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-[0.03] z-0" />

      <div className="absolute bottom-32 left-[20%] w-24 h-24 rounded-full bg-green-500/5 blur-xl z-0" />
      <motion.div
        className="absolute top-1/3 left-[10%] w-32 h-32 rounded-full border border-zinc-800/30 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(34, 197, 94, 0.03), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-green-500 font-light tracking-widest text-sm"
              >
                WELCOME TO MY PORTFOLIO
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white"
              >
                Hello, I'm <span className="text-green-500 font-normal">Parthiv</span>
                <span className="text-white">.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-zinc-400 text-lg max-w-xl">
                  Backend Developer & AI/ML Engineer specializing in scalable systems and innovative solutions.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <span>View My Work</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>

              <a
                href="https://drive.google.com/file/d/1b7Y8A1n72NtCIFqZuPr8CvSJSwkDMRZh/view?usp=sharing"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-300 transition-colors"
              >
                <FileText className="mr-2 h-4 w-4" />
                <span>Resume</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-6"
            >
              <div className="h-px w-12 bg-zinc-800"></div>
              <a
                href="https://github.com/pparthiv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-green-500 hover:border-green-500/30 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/parthiv-purkayastha/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-green-500 hover:border-green-500/30 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:parthiv.iitg@gmail.com"
                className="p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-green-500 hover:border-green-500/30 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <div className="relative mx-auto">
                <div className="relative rounded-full overflow-hidden border-4 border-zinc-800/50 p-2 bg-zinc-900/50 backdrop-blur-sm max-w-md mx-auto">
                  <div className="rounded-full overflow-hidden aspect-square">
                    <Image
                      src={imageUrl}
                      alt="Parthiv Purkayastha"
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                      priority
                      unoptimized={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/40 via-transparent to-green-900/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 transform items-center gap-2 text-zinc-500 transition-colors hover:text-green-500"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-xs uppercase tracking-wider"
        >
          Scroll Down
        </motion.span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  )
}
