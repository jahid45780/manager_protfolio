import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/ui/pages/Navbar"
import PageTransition from "./components/ui/pages/PageTransition"
import Hero from "./components/ui/pages/Hero"
import Skills from "./components/ui/pages/Skills"
import Projects from "./components/ui/pages/Projects"
import Experience from "./components/ui/pages/Experience"
import Contact from "./components/ui/pages/Contact"
import About from "./components/ui/pages/About"
import Footer from "./components/ui/pages/Footer"


function App() {
  const location = useLocation() // ✅ Now safe

  return (
    <main className="bg-[#0B0B0F] text-white min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Hero/>
                <Skills />
                <About/>
                <Projects />
                <Experience/>
                <Contact/>
                <Footer/>
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <div className="p-10 text-center text-2xl">
                  Contact Page Content
                </div>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  )
}

export default App
