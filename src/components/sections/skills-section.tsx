"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Database, Globe } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import SimpleFade from "@/components/animations/simple-fade"

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-5 w-5 text-green-500" />,
      skills: [
        { name: "Python", logo: "https://static.cdnlogo.com/logos/p/3/python.svg" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
        { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
        { name: "Java", logo: "https://static.cdnlogo.com/logos/j/86/java.svg" },
      ],
    },
    {
      name: "Frameworks & Libraries",
      icon: <Globe className="h-5 w-5 text-green-500" />,
      skills: [
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" },
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
        { name: "Django", logo: "https://static.cdnlogo.com/logos/d/3/django.svg" },
        { name: "FastAPI", logo: "https://cdnlogo.com/logos/f/59/fastapi.svg" },
        { name: "Next.js", logo: "https://cdnlogo.com/logos/n/80/next-js.svg" },
      ],
    },
    {
      name: "UI/UX Design",
      icon: <Cpu className="h-5 w-5 text-green-500" />,
      skills: [
        { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png" },
        { name: "Adobe XD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_XD_logo.svg/1200px-Adobe_XD_logo.svg.png" },
        { name: "Sketch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png" },
        { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/OpenCV_Logo_with_text.png" },
        { name: "NLTK", logo: "https://miro.medium.com/v2/resize:fit:1358/1*YM2HXc7f4v02pZBEO8h-qw.png" },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-6 relative bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.03),transparent_80%)]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-white">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SimpleFade key={skillIndex} delay={skillIndex * 0.05}>
                    <div className="flex items-center bg-zinc-800/30 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-300">
                      <div className="w-6 h-6 mr-2 rounded-md bg-white p-1 flex items-center justify-center">
                        <img
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-zinc-300 text-sm">{skill.name}</span>
                    </div>
                  </SimpleFade>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
