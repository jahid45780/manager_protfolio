import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Creative Portfolio",
    description: "Animated developer portfolio with smooth interactions.",
    image: "https://i.ibb.co.com/9kCTdxpp/Screenshot-1.png",
    video: "https://i.ibb.co.com/9kCTdxpp/Screenshot-1.png",
    tech: ["React", "TS", "Tailwind"],
  },
  {
    title: "E-Commerce UI",
    description: "Modern shop UI with micro-animations.",
    image: "https://i.ibb.co.com/mrkWbcjV/9924823-4323818.jpg",
    video: "https://i.ibb.co.com/YTWw9wvm/5195396-2697040.jpg",
    tech: ["Next.js", "Stripe", "UI/UX"],
  },
  {
    title: "Dashboard App",
    description: "Analytics dashboard with motion design.",
    image: "https://i.ibb.co.com/YTWw9wvm/5195396-2697040.jpg",
    video: "https://i.ibb.co.com/YTWw9wvm/5195396-2697040.jpg",
    tech: ["React", "Charts", "Motion"],
  },
]

export default function Projects() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 bg-[#0B0B0F] overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A selection of projects showcasing animation, design, and performance.
        </p>
      </motion.div>

      {/* Featured Projects Grid */}
      <div className="grid gap-8 px-4 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="
              rounded-2xl
              overflow-hidden
              backdrop-blur-xl bg-white/5
              border border-white/10
              hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
              transition-all
            "
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            {/* Project Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Button
                className="mt-5 bg-gradient-to-r from-purple-500 to-cyan-400"
                onClick={() => setActive(i)}
              >
                View Project
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full rounded-2xl overflow-hidden bg-[#0B0B0F] border border-white/10"
            >
              <video
                src={projects[active].video}
                autoPlay
                loop
                muted
                controls
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{projects[active].title}</h3>
                <p className="mt-3 text-gray-400">{projects[active].description}</p>

                <Button
                  className="mt-6 bg-gradient-to-r from-purple-500 to-cyan-400"
                  onClick={() => setActive(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
