"use client"
import { motion, useMotionValue, useSpring, } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  // Magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 400, damping: 50 })
  const springY = useSpring(mouseY, { stiffness: 400, damping: 50 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 10)
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 10)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setSending(true)

    emailjs
      .sendForm(
        "service_ouxt1pa",
        "template_2nhrafg",
        formRef.current,
        "a6gcr5WV7ZS2C3Ype"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!")
          setSending(false)
          formRef.current?.reset()
        },
        (err) => {
          setSuccess("Failed to send message. Try again.")
          console.error(err)
          setSending(false)
        }
      )
  }

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0B0B0F] text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Fill out the form below or send me an email directly.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6"
      >
        {["Name", "Email", "Message"].map((label, i) => (
          <motion.div
            key={i}
            style={{
              x: springX,
              y: springY,
            }}
            className="relative"
          >
            {label !== "Message" ? (
              <input
                type={label === "Email" ? "email" : "text"}
                name={label.toLowerCase()}
                placeholder={label}
                required
                className="
                  w-full px-5 py-4 rounded-xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  text-white placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                  transition-all
                "
              />
            ) : (
              <textarea
                name="message"
                placeholder={label}
                required
                rows={5}
                className="
                  w-full px-5 py-4 rounded-xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  text-white placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                  transition-all
                  resize-none
                "
              />
            )}
          </motion.div>
        ))}

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Button
            type="submit"
            disabled={sending}
            className="
              bg-gradient-to-r from-purple-500 to-cyan-400
              px-8 py-4 text-lg rounded-xl
              shadow-[0_0_40px_rgba(139,92,246,0.4)]
              hover:shadow-[0_0_70px_rgba(139,92,246,0.7)]
              transition-all
            "
          >
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>

        {/* Success Message */}
        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-400 mt-4"
          >
            {success}
          </motion.p>
        )}
      </motion.form>
    </section>
  )
}
