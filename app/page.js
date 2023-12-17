import Hero from "./_components/Hero"
import Marque from "./_components/Marque"
import Portfolio from "./_components/Portfolio"
import Skillsection from "./_components/Skillsection"
import Blog from "./_components/Blog"
import Testimon from "./_components/Testimon"
import Contact from "./_components/Contact"
import Services from "./_components/Services"

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Marque />
      <Services />
      <Portfolio />
      <Skillsection />
      <Blog />
      <Testimon />
      <Contact />
    </main>
  )
}