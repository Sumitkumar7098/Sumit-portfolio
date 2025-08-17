"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, ChevronRight } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

export default function ExperienceSection() {
  const [selectedJob, setSelectedJob] = useState(0)

  const experienceData = [
    {
      position: "Design Intern",
      company: "Flexoryx",
      logo: "https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vZmxleG9yeXgtb3JpZ2luYWwuanBn.webp",
      location: "Noida, India",
      period: "July 2025",
      responsibilities: [
        "Designed and developed a face recognition system using Python and C, optimized for RTL processing.",
        "Contributed to the development of the project titled, 'Design and Development of AI/ML Co-Processor and Post Quantum Cryptography Co-Processor' funded by Ministry of Electronics and IT, Govt of India.",
        "Researched efficient face recognition models and their optimizations for compiler-level processing.",
      ],
      skills: ["UI", "UX", "Prototyping", "Face Recognition", "Wireframing"],
    },
    {
      position: "Python Intern",
      company: "Proace-Infotech",
      logo: "data:image/png;base64,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",
      location: "Patiala, India",
      period: "June 2025 - July 2025",
      responsibilities: [
        "Gained experience in WAN and IT infrastructure for government services through the NKN Industrial Internship Program.",
        "Developed knowledge of network hardware, software, and security, applying simulation tools for performance analysis and optimization.",
      ],
      skills: ["Python", "C/C++", "Simulation Tools", "Performance Analysis"],
    },
    {
      position: "UI/UX Designer",
      company: "SMC",
      logo: "https://smcontainer.com/wp-content/uploads/2022/06/logo.png",
      location: "Bhavnagar, India",
      period: "April 2025 - June 2025",
      responsibilities: [
        "Developed a Smart AI-based Attendance System API using FastAPI, Face Recognition, and GCP, achieving 95% accuracy and integrating with Strapi CMS and self-learning capabilities.",
        "Built a client-side guided video recording system for Pose Comparison in Martial Arts using ReactJS and MediapipeJS, incorporating body landmark analysis and visual metrics.",
      ],
      skills: ["Product Design", "Prototyping", "User Research", "UI", "UX", "Strapi CMS"],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.03),transparent_80%)]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 relative"
          >
            <div className="flex flex-row overflow-x-auto scrollbar-hide lg:flex-col">
              {experienceData.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedJob(index)}
                  className={`group relative whitespace-nowrap border-l-2 px-5 py-4 text-left transition-all duration-300 hover:bg-zinc-900/30 hover:text-green-500 lg:whitespace-normal ${
                    selectedJob === index
                      ? "border-l-green-500 bg-zinc-900/30 text-green-500"
                      : "border-l-zinc-800 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-white border border-zinc-800 flex items-center justify-center overflow-hidden">
                      <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{job.position}</div>
                      <div className="text-xs text-zinc-500">{job.company}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 lg:hidden">
              <ChevronRight className="h-6 w-6 animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
              <div className="mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white border border-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={experienceData[selectedJob].logo || "/placeholder.svg"}
                      alt={experienceData[selectedJob].company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-zinc-200">
                      {experienceData[selectedJob].position} <span className="text-green-500">@</span>{" "}
                      {experienceData[selectedJob].company}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-zinc-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{experienceData[selectedJob].period}</span>
                      </div>

                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{experienceData[selectedJob].location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-wider text-zinc-500">Responsibilities</h4>
                <ul className="space-y-3">
                  {experienceData[selectedJob].responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex"
                    >
                      <span className="mr-2 text-green-500">▹</span>
                      <span className="text-zinc-400">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-3">Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {experienceData[selectedJob].skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}