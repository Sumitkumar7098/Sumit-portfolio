"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/layout/navbar"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import EducationSection from "@/components/sections/education-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import CertificationsSection from "@/components/sections/certifications-section"
import ContactSection from "@/components/sections/contact-section"
import LoadingScreen from "@/components/animations/loading-screen"
import BackToTop from "@/components/ui/back-to-top"
import ScrollProgress from "@/components/ui/scroll-progress"
import BackgroundElements from "@/components/ui/background-elements"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-200 selection:bg-green-500/30 selection:text-white">
      <BackgroundElements />
      <AnimatePresence mode="wait">{isLoading && <LoadingScreen />}</AnimatePresence>
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <BackToTop />
    </main>
  )
}
