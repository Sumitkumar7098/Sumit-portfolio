"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavbarProps {
  activeSection: string
}

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Contact", href: "#contact", id: "contact" },
]

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled ? "border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-thin tracking-wider"
          >
            <a href="#hero" className="group flex items-center text-lg lowercase">
              <span className="text-green-500">S</span>umit
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="ml-1 text-xs font-light text-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                /&gt;
              </motion.span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "group relative text-sm uppercase tracking-widest transition-colors duration-300",
                      activeSection === item.id ? "text-green-500" : "text-zinc-400 hover:text-zinc-100",
                    )}
                  >
                    {item.name}
                    <motion.span
                      initial={{ scaleX: activeSection === item.id ? 1 : 0 }}
                      animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                      className={cn(
                        "absolute -bottom-1 left-0 h-[1px] w-full origin-left bg-green-500 transition-transform duration-300 group-hover:scale-x-100",
                        activeSection !== item.id && "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-zinc-800/30 bg-zinc-950/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="px-6 py-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "block text-sm uppercase tracking-widest",
                      activeSection === item.id ? "text-green-500" : "text-zinc-400",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
