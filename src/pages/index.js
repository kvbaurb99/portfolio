import About from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Line from '@/components/utils/Line.jsx'
import LineBottom from '@/components/utils/LineBottom'
import LineUnderProjects from '@/components/utils/LineUnderProjects'


export default function Home() {
  return (
    <main className='h-full w-full overflow-x-hidden'>
      <Hero />
      <Skills />
      <Line />
      <About />
      <LineBottom />
      <Projects />
      <LineUnderProjects />
      <Footer />
    </main>
  )
}
