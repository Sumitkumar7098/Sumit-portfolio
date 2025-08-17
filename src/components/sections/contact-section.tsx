"use client"
import { useState, useEffect } from "react"
import { useActionState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, User, MessageSquare } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SimpleFade from "@/components/animations/simple-fade"
import { submitContactForm } from "@/actions/contact-form"
import type { ContactFormState } from "@/actions/contact-form"

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isPending ? (
        <span>Sending...</span>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          <span>Send Message</span>
        </>
      )}
    </button>
  )
}

export default function ContactSection() {
  const [formState, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, {})
  const [isPending, setIsPending] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const contactData = [
    {
      type: "Email",
      value: "sumitkumar10102004@gmail.com",
      icon: <Mail className="h-5 w-5 text-green-500" />,
      link: "mailto:sumitkumar10102004@gmail.com",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/sumit7098",
      icon: <User className="h-5 w-5 text-green-500" />,
      link: "https://www.linkedin.com/in/sumit7098/",
    },
  ]

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true)
    try {
      await formAction(formData)
    } finally {
      setIsPending(false)
    }
  }

  if (!isClient) {
    return (
      <section
        id="contact"
        className="py-20 px-6 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.03),transparent_80%)]"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Contact" subtitle="Let's get in touch" align="center" />
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-2xl font-light text-zinc-300">Get in touch</h3>
              <SimpleFade className="mb-8">
                <p className="text-zinc-400">
                  I'm currently <span className="text-green-500 font-medium">actively looking for roles</span> in
                  <span className="text-green-500 font-medium"> UI/UX </span> and/or
                  <span className="text-green-500 font-medium"> Python Development</span> fields. My inbox is always
                  open. Whether you have a job opportunity, a question, or just want to say hi, I'll try my best to get
                  back to you!
                </p>
              </SimpleFade>

              <div className="space-y-4">
                {contactData.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-green-500/20 hover:bg-zinc-900 hover:scale-[1.02]"
                  >
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-zinc-500">{contact.type}</h4>
                      <p className="text-zinc-300">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <div>{/* Placeholder for form */}</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.03),transparent_80%)]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" subtitle="Let's get in touch" align="center" />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-light text-zinc-300">Get in touch</h3>
            <SimpleFade className="mb-8">
              <p className="text-zinc-400">
                I'm currently <span className="text-green-500 font-medium">actively looking for roles</span> in
                <span className="text-green-500 font-medium"> UI/UX</span> and/or
                <span className="text-green-500 font-medium"> Python Development</span> fields. My inbox is always
                open. Whether you have a job opportunity, a question, or just want to say hi, I'll try my best to get
                back to you!
              </p>
            </SimpleFade>

            <div className="space-y-4">
              {contactData.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-green-500/20 hover:bg-zinc-900 hover:scale-[1.02]"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-zinc-500">{contact.type}</h4>
                    <p className="text-zinc-300">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form
              action={handleSubmit}
              className="space-y-6 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm"
            >
              {formState?.error && (
                <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-500">
                  {formState.error}
                </div>
              )}

              {formState?.success && (
                <div className="p-3 rounded-md bg-green-500/10 border border-green-500/20 text-green-500">
                  {formState.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                  Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-4 w-4 text-zinc-500" />
                  </div>
                  <Input
                    id="name"
                    name="name"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    className={`border-zinc-800 bg-zinc-900 pl-10 text-zinc-300 placeholder:text-zinc-600 focus-visible:ring-green-500/20 ${
                      focusedField === "name" ? "border-green-500/50" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                  Email
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-4 w-4 text-zinc-500" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your email"
                    className={`border-zinc-800 bg-zinc-900 pl-10 text-zinc-300 placeholder:text-zinc-600 focus-visible:ring-green-500/20 ${
                      focusedField === "email" ? "border-green-500/50" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
                  Message
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-3">
                    <MessageSquare className="h-4 w-4 text-zinc-500" />
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your message"
                    className={`min-h-[120px] border-zinc-800 bg-zinc-900 pl-10 text-zinc-300 placeholder:text-zinc-600 focus-visible:ring-green-500/20 ${
                      focusedField === "message" ? "border-green-500/50" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <SubmitButton isPending={isPending} />
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-md text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-sm text-zinc-500"
        >
          Designed & Built by Sumit Kumar
          <span className="block mt-1">© 2025 All Rights Reserved</span>
        </motion.p>
      </div>
    </section>
  )
}