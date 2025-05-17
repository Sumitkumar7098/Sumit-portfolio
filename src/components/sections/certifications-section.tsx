"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "DeepLearning.AI TensorFlow Developer",
      issuer: "DeepLearning.AI",
      logo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125559383%2F317212851579%2F1%2Foriginal.20210208-232017?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2246%2C2246&s=40aa0fb13fe40ce86241ae7b8fc8caea",
      date: "August 2023",
      description:
        "Mastered building and training neural networks using TensorFlow, implementing computer vision and NLP models, and optimizing ML workflows.",
      link: "https://drive.google.com/file/d/1WwQyWF5MngMdZXHxHZefmYfRE2FldYE8/view?usp=sharing",
      skills: ["TensorFlow", "Neural Networks", "Computer Vision", "NLP"],
    },
    {
      title: "Google Data Analytics",
      issuer: "Google",
      logo: "https://static.cdnlogo.com/logos/g/35/google-icon.svg",
      date: "May 2023",
      description:
        "Developed expertise in data preparation, analysis, and visualization using industry-standard tools and methodologies.",
      link: "https://drive.google.com/file/d/1WJSrA_uTgcIdC7syNuhJgsBzzltcujNc/view?usp=sharing",
      skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
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
