import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'
import TechProfiles from '@/components/TechProfiles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Education />
      <TechProfiles />
      <Contact />
      <Footer />
    </main>
  )
}