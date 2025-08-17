"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex flex-col items-center">
          <div className="text-3xl font-light tracking-wider text-green-500">SUMIT</div>
          <div className="mt-1 text-sm tracking-widest text-zinc-500">UI/UX DESIGNER / PYTHON DEVELOPER</div>
        </div>

        <div className="relative h-[1px] w-56 bg-zinc-800">
          <motion.div
            className="absolute top-0 left-0 h-full bg-green-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="mt-4 text-sm text-zinc-500">{Math.round(progress)}%</div>
      </motion.div>
    </motion.div>
  )
}
