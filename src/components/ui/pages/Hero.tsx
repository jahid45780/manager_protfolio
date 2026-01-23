import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const animatedText = "DIGITAL EXPERIENCE"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center bg-[#0B0B0F] overflow-hidden px-4 sm:px-6"
    >
      {/* Gradient Background */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10
          w-full max-w-3xl
          backdrop-blur-xl bg-white/5
          border border-white/10
          rounded-3xl
          p-8 sm:p-10
          text-center
          shadow-[0_0_40px_rgba(139,92,246,0.4)]
        "
      >
        {/* Profile Photo */}
        {/* <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            mx-auto mb-5
            w-24 h-24 sm:w-28 sm:h-28
            rounded-full overflow-hidden
            border border-white/20
            shadow-[0_0_30px_rgba(139,92,246,0.5)]
          "
        >
          <img
            src="https://i.ibb.co.com/7xmbNfSH/Whats-App-Image-2026-01-22-at-4-39-54-PM.jpg"   
            alt="Atikul Islam Ashik"
            className="w-full h-full object-cover"
          />
        </motion.div> */}

        {/* Intro */}
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Hello, I’m
        </p>

        {/* Name */}
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Atikul Islam Ashik
          </span>
        </h1>

        {/* Roles */}
        <p className="mt-3 text-sm sm:text-base text-gray-300">
          Software Engineer • UI / UX Designer
        </p>

        {/* Animated Text */}
        <div className="mt-6">
          {animatedText.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i }}
              className="
                inline-block
                text-xl sm:text-2xl md:text-3xl
                font-bold
                bg-gradient-to-r from-purple-500 to-cyan-400
                bg-clip-text text-transparent
              "
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto">
         I’m a software engineer who loves building fast, animated, and immersive web experiences—where clean code, performance, and great UX come together☘
        </p>

        {/* Buttons */}
        <div id="#project" className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="
                px-8 py-6 text-lg rounded-xl
                bg-gradient-to-r from-purple-500 to-cyan-400
                shadow-[0_0_40px_rgba(139,92,246,0.4)]
                hover:shadow-[0_0_70px_rgba(139,92,246,0.7)]
                transition-all
              "
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
             asChild
              variant="outline"
              className="
                px-8 py-6 text-lg rounded-xl
                border-white/20 text-white
                hover:bg-white/10
              "
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
