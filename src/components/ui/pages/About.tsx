import { motion } from "framer-motion"

// Personal highlights
const highlights = [
  "Creative Software Engineer",
  "UI / UX Designer with strong frontend skills",
  "Passionate about animation & micro-interactions",
  "Team leader with problem-solving mindset",
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#0B0B0F] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 right-1/4 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        
{/* Left: Photo with animated border */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative w-full max-w-sm md:max-w-md"
>
  {/* Animated Border */}
  <motion.div
    className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500 blur-sm opacity-70"
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      backgroundSize: "200% 200%",
    }}
  />

  {/* Photo */}
  <div className="relative rounded-xl overflow-hidden bg-black">
    <img
      src="https://i.ibb.co.com/7xmbNfSH/Whats-App-Image-2026-01-22-at-4-39-54-PM.jpg"
      alt="Atikul Islam Ashik"
      className="w-full h-auto object-cover"
    />
  </div>
</motion.div>



        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Name */}
          <h3 className="text-xl sm:text-2xl font-semibold mt-2">
            Atikul Islam Ashik
          </h3>

          {/* Role */}
          <p className="text-sm sm:text-base text-gray-400 mt-1 mb-5">
            Software Engineer • UI / UX Designer
          </p>

          {/* Description + CV */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-8">
            <p className="text-gray-400 max-w-xl">
              I’m a software engineer and UI/UX designer focused on building
              scalable, visually refined, and animated web applications.
              I specialize in React, TypeScript, Tailwind CSS, and Framer Motion,
              with strong attention to user experience and performance.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"   
              target="_blank"
              className="
                mt-4 sm:mt-0
                inline-block
                bg-gradient-to-r from-purple-500 to-cyan-400
                px-6 py-3 text-base rounded-xl
                shadow-[0_0_40px_rgba(139,92,246,0.4)]
                hover:shadow-[0_0_70px_rgba(139,92,246,0.7)]
                transition-all
                text-center
              "
            >
              Download CV
            </motion.a>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="
                  p-4
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-xl
                  shadow-[0_0_30px_rgba(139,92,246,0.3)]
                  hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]
                  transition-all
                  text-center
                "
              >
                <span className="text-sm sm:text-base text-gray-200">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
