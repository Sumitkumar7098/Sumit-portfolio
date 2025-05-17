"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, ExternalLink, Github } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projectsData = [
    {
      title: "Segmentation of Retinal Fundus Images",
      description:
        "Developed a Hybrid Segmentation Model based on Image Transformers and CNNs for multi-class segmentation of Retinal Fundus Images.",
      achievements: [
        "Achieved a Mean IoU of 55.81%, F1-Score of 65.86%, and Avg. ROC-AUC of 0.99.",
        "Currently working on developing and implementing an improved novel architecture.",
      ],
      techStack: ["Python", "Machine Learning", "PyTorch", "OpenCV", "Linux OS"],
      link: null,
      repoLink: null,
      image: "/exudates.png?height=600&width=800",
    },
    {
      title: "Hestia",
      description:
        "Developed a community-based app to assist homeless individuals by tagging locations and generating alerts for volunteers or NGOs.",
      achievements: [
        "Engineered a Face Clustering pipeline for efficient detection and categorization, enhancing accuracy and speed.",
        "Managed ETL processes and cloud operations for the application.",
        "Designed and implemented the data architecture and deployment strategy.",
      ],
      techStack: ["TensorFlow", "Firebase", "GCP", "Flutter", "React", "Python"],
      link: null,
      repoLink: "https://github.com/Krishnabh-Das/HESTIA.git",
      image: "/hestia.png?height=600&width=800",
    },
    {
      title: "ViatorAI",
      description:
        "Developed an AI-powered travel assistant integrating real-time weather tracking, intelligent location recommendations, and travel insights.",
      achievements: [
        "Implemented interactive mapping with weather-adaptive itinerary planning and air quality monitoring.",
        "Integrated AI-driven suggestions using Google Gemini AI to enhance personalized user experiences.",
        "Utilized OpenWeatherMap API for real-time weather data and NewsAPI for local event updates.",
      ],
      techStack: ["Next.js", "TypeScript", "React 18", "GeminiAI"],
      link: "https://viator-ai.vercel.app/",
      repoLink: "https://github.com/pparthiv/ViatorAI",
      image: "/viator.png?height=600&width=800",
    },
    {
      title: "Personal Portfolio Website",
      description: "You are Here!",
      achievements: [
        "Designed and developed a modern portfolio website to showcase my projects, education, and skills, featuring a responsive UI and dynamic content."
      ],
      techStack: ["Next.js", "Supabase", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      link: "https://parthiv-portfolio-sandy.vercel.app/",
      repoLink: "https://github.com/pparthiv/parthiv-portfolio",
      image: "parthiv.png?height=600&width=800"
    }
  ]

  const achievementsData = [
    {
      title: "Winner of HackGCU'24",
      description: "Created a mobile application to assist the homeless community.",
      date: "January 2024",
    },
    {
      title: "Qualified GATE CS & DA 2025",
      description: "Achieved rank of 2540 in CS & 1769 in DA.",
      date: "2025",
    },
    {
      title: "Qualified GATE CS & DA 2024",
      description: "Achieved rank of 2699 in CS & 1291 in DS.",
      date: "2024",
    },
    {
      title: "Selected for GDSC India Regional Bootcamp 2024",
      description: "For Solutions Challenge 2024.",
      date: "2024",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="Some things I've built" />

        <div className="mt-10 space-y-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-1 gap-4 md:grid-cols-12"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="md:col-span-7 md:col-start-1 md:row-start-1 lg:col-span-6 lg:col-start-1">
                <div
                  className={`z-10 h-full rounded-lg border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-md transition-all duration-500 md:relative ${
                    hoveredProject === index ? "md:translate-x-4 md:translate-y-4" : ""
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                      <Code className="h-4 w-4 text-green-500" />
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200">{project.title}</h3>
                  </div>

                  <div className="my-4 rounded-md bg-zinc-950 p-4 text-zinc-300">
                    <p>{project.description}</p>
                  </div>

                  <ul className="mb-6 space-y-1 text-sm text-zinc-400">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-green-500">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-full border border-zinc-800 bg-zinc-800/50 px-2.5 py-0.5 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4 self-end">
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-green-500"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-green-500"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`rounded-lg border border-zinc-800 bg-zinc-900/30 transition-all duration-500 md:col-span-7 md:col-start-6 md:row-start-1 md:h-[400px] lg:col-span-7 lg:col-start-6 ${
                  hoveredProject === index ? "-md:translate-x-4 -md:translate-y-4" : ""
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-zinc-950">
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-green-950/20" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 text-lg font-light uppercase tracking-wider text-zinc-400"
          >
            Achievements
          </motion.h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 transition-colors duration-300 hover:border-green-500/20 hover:bg-zinc-900/50"
              >
                <div className="text-xs text-green-500">{achievement.date}</div>
                <h3 className="my-2 text-base font-medium text-zinc-300">{achievement.title}</h3>
                <p className="text-sm text-zinc-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
