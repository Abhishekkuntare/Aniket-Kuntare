import { Hero } from '@/components/hero'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
