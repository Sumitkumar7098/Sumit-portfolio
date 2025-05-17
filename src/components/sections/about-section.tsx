"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/ui/section-heading"
import SimpleFade from "@/components/animations/simple-fade"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About me" subtitle="My background and interests" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 rounded-lg border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-md"
          >
            <SimpleFade>
              <p className="text-zinc-300 mb-4">
                I'm a final-year B.Tech student specializing in AI/ML and Backend Development. With a passion for
                building scalable systems and exploring cutting-edge technologies, I strive to create solutions that
                make a meaningful impact.
              </p>
              <br/>
              <p className="text-zinc-400">
                My journey in technology began with a curiosity about how intelligent systems are developed and how
                efficient systems work behind the scenes. This led me to focus on Machine Learning specifically in
                Computer Vision, and in backend development, where I have designed robust architectures and
                implementing efficient algorithms. Alongside this, my fascination with system design has
                driven me to explore efficient systems. My interest in different tech has led me to work on various
                systems, leading to my versatile ability to work and learn effectively.
                <br/>
                I also possess strong problem solving skills and have gained extensive experience in solving
                competitive programming questions on platforms such as LeetCode, HackerRank, and other such
                websites.
                <br/>
              </p>
            </SimpleFade>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 space-y-6"
          >
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">Areas of Interest</h3>
              <ul className="space-y-2">
                {["Machine Learning", "Computer Vision", "Backend Development", "Cloud Computing", "System Design"].map(
                  (interest, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-green-500">▹</span>
                      <span className="text-zinc-400">{interest}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">Personal Traits</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solver",
                  "Quick Learner",
                  "Team Player",
                  "Detail-Oriented",
                  "Adaptable",
                  "Creative Thinker",
                ].map((trait, index) => (
                  <span key={index} className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
