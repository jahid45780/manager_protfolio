import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const skills = [
  // Frontend / Engineering
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "shadcn/ui", level: "Advanced" },
  { name: "Framer Motion", level: "Intermediate" },

  // UI / UX & Design
  { name: "UI Design", level: "Advanced" },
  { name: "UX Research", level: "Intermediate" },
  { name: "Wireframing", level: "Advanced" },
  { name: "Prototyping", level: "Advanced" },
  { name: "Design Systems", level: "Intermediate" },
  { name: "Figma", level: "Advanced" },

  // AI / Automation
  { name: "AI Integration", level: "Intermediate" },
  { name: "Prompt Engineering", level: "Advanced" },

  // Leadership & Management
  { name: "Team Leadership", level: "Advanced" },
  { name: "Project Management", level: "Advanced" },
  { name: "Agile / Scrum", level: "Intermediate" },
  { name: "Client Communication", level: "Advanced" },
]


export default function Skills() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="relative py-24 bg-[#0B0B0F] overflow-hidden">
      
      {/* background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Technologies and tools I use to build immersive digital experiences.
        </p>
      </motion.div>

      {/* Pills */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 px-4 max-w-5xl mx-auto">
        {skills.map((skill, i) => {
          const isActive = active === skill.name

          return (
            <motion.button
              key={skill.name}
              onClick={() =>
                setActive(isActive ? null : skill.name)
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.12 }}
              className={`
                relative
                px-5 py-3 sm:px-6 sm:py-3
                rounded-full
                text-sm sm:text-base
                border border-white/10
                backdrop-blur-xl bg-white/5
                text-white
                transition-all
                ${
                  isActive
                    ? "shadow-[0_0_40px_rgba(139,92,246,0.6)]"
                    : "hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                }
              `}
            >
              <span className="relative z-10">{skill.name}</span>

              {/* Active glow */}
              {isActive && (
                <motion.span
                  layoutId="skillGlow"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-400/30"
                />
              )}

              {/* Expanded info */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-xs text-gray-300"
                  >
                    {skill.level}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
