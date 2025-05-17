"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import SimpleFade from "@/components/animations/simple-fade"

export default function EducationSection() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Assam Engineering College",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/ab/Assam_Engineering_College_logo.png",
      period: "2021 - 2025",
      grade: "CGPA: 8.72/10",
      description:
        "Focused on core computer science fundamentals, data structures, algorithms, and software engineering principles. Participated in various technical competitions and hackathons.",
    },
    {
      degree: "Class 12 (CBSE)",
      institution: "Kendriya Vidyalaya IIT Guwahati",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/KVS_SVG_logo.svg/1200px-KVS_SVG_logo.svg.png",
      period: "2020",
      grade: "Percentage: 82.8%",
      description:
        "Specialized in Science with Computer Science. Participated in various inter-school competitions and maintained excellent academic standing.",
    },
  ]

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Education" subtitle="My academic journey and qualifications" />

        <div className="mt-16 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < educationData.length - 1 && (<>
                  <div className="absolute left-[40px] top-[85px] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 z-10"></div>
                  <div className="absolute left-[39px] top-[85px] bottom-[-40px] w-[2px] bg-zinc-800"></div>
                  <div className="absolute left-[40px] bottom-[-60px] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 z-10"></div>
                </>
              )}

              <div className="flex gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={item.institution}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm hover:border-green-500/20 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <h3 className="text-xl font-medium text-white">{item.degree}</h3>
                      <div className="flex items-center text-green-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-5 h-5 text-zinc-500 mr-2" />
                      <span className="text-zinc-400">{item.institution}</span>
                      <div className="ml-auto flex items-center">
                        <Award className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-green-500 font-medium">{item.grade}</span>
                      </div>
                    </div>

                    <SimpleFade>
                      <p className="text-zinc-400 text-sm">{item.description}</p>
                    </SimpleFade>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
