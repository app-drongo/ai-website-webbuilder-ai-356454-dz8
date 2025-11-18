import Hero from '@/components/sections/home/Hero'
import Productshowcase from '@/components/sections/home/Productshowcase'
import Process from '@/components/sections/home/Process'
import Features from '@/components/sections/home/Features'
import Pricing from '@/components/sections/home/Pricing'
import Benefits from '@/components/sections/home/Benefits'
import Testimonials from '@/components/sections/home/Testimonials'
import Stats from '@/components/sections/home/Stats'
import Cta from '@/components/sections/home/Cta'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="product-showcase">
        <Productshowcase />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="cta">
        <Cta />
      </section>
    </>
  )
}