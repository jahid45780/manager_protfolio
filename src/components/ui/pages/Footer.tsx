import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/yourprofile",
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourprofile",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:ashik.bdcalling024@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="relative bg-[#0B0B0F] text-white py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Ashik.dev
          </span>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-white text-2xl transition-colors hover:text-purple-400"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 text-sm text-center mt-8"
      >
        © {new Date().getFullYear()} Ashik. All rights reserved.
      </motion.p>
    </footer>
  )
}
