import { motion } from "framer-motion"

const experiences = [
  {
    year: "2024",
    role: "Full Stack Developer",
    company: "Betopia Group",
    description:
      "Worked on full-stack development projects, building robust web applications and optimizing user experience.",
  },
  {
    year: "2025",
    role: "Engineering Team Leader",
    company: "Betopia Group",
    description:
      "Led the engineering team, coordinated development workflows, and ensured timely delivery of projects.",
  },
  {
    year: "2026",
    role: "Manager",
    company: "Betopia Group",
    description:
      "Managed the tech department, overseeing multiple teams, strategic planning, and high-level project execution.",
  },
]

export default function Experience() {
  return (
    <section className="relative py-24 bg-[#0B0B0F] overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Timeline of my professional journey and key milestones.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical line */}
        <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/10"></div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex flex-col sm:flex-row items-start sm:items-center"
            >
              {/* Dot */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg"></div>

              {/* Content */}
              <div
                className={`mt-2 sm:mt-0 sm:max-w-[45%] ${
                  i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto sm:text-left"
                }`}
              >
                <span className="text-purple-400 font-semibold">{exp.year}</span>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold">{exp.role}</h3>
                <p className="text-gray-400 italic mt-1">{exp.company}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
