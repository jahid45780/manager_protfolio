import { motion } from "framer-motion"

export function MagneticButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-white"
    >
      {children}
    </motion.button>
  )
}
