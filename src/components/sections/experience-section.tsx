"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

export default function ExperienceSection() {
  const [selectedJob, setSelectedJob] = useState(0)

  const experienceData = [
    {
      position: "Project Intern",
      company: "Indian Institute of Technology Guwahati",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Guwahati_Logo.svg/1200px-IIT_Guwahati_Logo.svg.png",
      location: "Guwahati, India",
      period: "July 2024 - December 2024",
      responsibilities: [
        "Designed and developed a face recognition system using Python and C, optimized for RTL processing.",
        "Contributed to the development of the project titled, 'Design and Development of AI/ML Co-Processor and Post Quantum Cryptography Co-Processor' funded by Ministry of Electronics and IT, Govt of India.",
        "Researched efficient face recognition models and their optimizations for compiler-level processing.",
      ],
      skills: ["Python", "C/C++", "Computer Vision", "Face Recognition", "RTL Processing"],
    },
    {
      position: "Summer Intern",
      company: "National Informatics Centre",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKdPQCr7CFR0SPO3ktpSOwmQz0Svbeyfk7g&s",
      location: "Guwahati, India",
      period: "June 2024 - July 2024",
      responsibilities: [
        "Gained experience in WAN and IT infrastructure for government services through the NKN Industrial Internship Program.",
        "Developed knowledge of network hardware, software, and security, applying simulation tools for performance analysis and optimization.",
      ],
      skills: ["Network Infrastructure", "IT Security", "Simulation Tools", "Performance Analysis"],
    },
    {
      position: "SDE Intern",
      company: "SpArts Technologies",
      logo: "https://assets.softr-files.com/applications/7c9443d6-15a9-495f-a44d-a0d3dceddeea/assets/5d87a207-dfb1-4e4e-88b4-4fb4e474e1d4.png",
      location: "Remote | Bangalore, India",
      period: "April 2024 - June 2024",
      responsibilities: [
        "Developed a Smart AI-based Attendance System API using FastAPI, Face Recognition, and GCP, achieving 95% accuracy and integrating with Strapi CMS and self-learning capabilities.",
        "Built a client-side guided video recording system for Pose Comparison in Martial Arts using ReactJS and MediapipeJS, incorporating body landmark analysis and visual metrics.",
      ],
      skills: ["FastAPI", "Face Recognition", "GCP", "ReactJS", "MediapipeJS", "Strapi CMS"],
    },
    {
      position: "Summer Intern",
      company: "Indian Institute of Technology Guwahati",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Guwahati_Logo.svg/1200px-IIT_Guwahati_Logo.svg.png",
      location: "Guwahati, India",
      period: "May 2023 - July 2023",
      responsibilities: [
        "Researched 'Underwater Image Segmentation' under Dr. Arijit Sur, focusing on models and datasets for autonomous robotic exploration.",
        "Implemented TensorFlow models to segment images into multiple categories for enhanced analysis.",
      ],
      skills: ["TensorFlow", "Image Segmentation", "Computer Vision", "Python", "Research"],
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
            className="lg:col-span-4"
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
