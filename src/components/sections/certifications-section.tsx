"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Udemy",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      date: "july 2026",
      description:
        "Learned the fundamentals of UI/UX design, including user research, wireframing, prototyping, and usability testing.",
      link: "https://drive.google.com/file/d/1noEZGN5nUQOBbQKVe6Wg1ee7nxtYF9i1/view",
      skills: ["Figma", "UX Design", "Research", "Wireframing", "Prototyping"],
    },
  ]

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Certifications" subtitle="Professional credentials and qualifications" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm hover:border-green-500/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg border border-zinc-800 bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src={cert.logo || "/placeholder.svg"} alt={cert.issuer} className="w-10 h-10 object-contain" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white group-hover:text-green-500 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-zinc-500 text-sm mt-1">
                    <Award className="w-4 h-4 mr-1 text-green-500" />
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1 text-sm rounded-md border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-green-500 transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
