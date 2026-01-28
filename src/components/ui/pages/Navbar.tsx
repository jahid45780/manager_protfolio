import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/toggle/ModeToggle"

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 80) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <>
      {/* Navbar */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" },
        }}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="
          fixed top-3 left-1/2 -translate-x-1/2 z-50
          w-[92%] sm:w-[90%] max-w-6xl
          backdrop-blur-xl bg-white/5
          border border-white/10
          rounded-2xl
          px-4 sm:px-6 py-3 sm:py-4
          shadow-[0_0_40px_rgba(139,92,246,0.3)]
        "
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-lg sm:text-xl font-bold tracking-wide"
          >
          <span
  className="text-3xl  bg-gradient-to-r from-purple-500 to-cyan-400 
  bg-clip-text text-transparent"
  style={{
    textShadow: `
      1px 1px 0 #6b21a8,
      2px 2px 0 #5b21b6,
      3px 3px 0 #4c1d95,
      4px 4px 10px rgba(0,0,0,0.6)
    `
  }}
>
  Ashik.dev
</span>

          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {links.map((item) => (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  className="
                    cursor-pointer
                    hover:text-white transition
                    after:absolute after:-bottom-1 after:left-0
                    after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            <ModeToggle />
            <Button
              className="
                rounded-xl px-5 py-2 text-sm
                bg-gradient-to-r from-purple-500 to-cyan-400
                shadow-[0_0_30px_rgba(139,92,246,0.4)]
                hover:shadow-[0_0_50px_rgba(139,92,246,0.7)]
                transition-all
              "
            >
              <a href="#contact"> Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              fixed top-20 left-1/2 -translate-x-1/2 z-40
              w-[92%]
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl
              p-6
              shadow-[0_0_40px_rgba(139,92,246,0.3)]
              md:hidden
            "
          >
            <ul className="flex flex-col gap-5 text-gray-300 text-base">
              {links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              className="
                mt-6 w-full py-5 text-base rounded-xl
                bg-gradient-to-r from-purple-500 to-cyan-400
                shadow-[0_0_30px_rgba(139,92,246,0.4)]
              "
            >
              Hire Me
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
