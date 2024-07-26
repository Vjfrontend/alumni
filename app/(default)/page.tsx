export const metadata = {
  title: 'OOCF',
  description: 'Join us in restoring hope to underserved and underprivileged children'
}


import Hero from '@/components/hero'
import About from '@/components/about'
import Focus from '@/components/focus'
import Impact from '@/components/impact'
import Testimonail from '@/components/testimonials-carousel'
import Contact from '@/components/contact'
import Sponsors from "@/components/sponsors"
export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Focus/>
      <Impact/>
      <Testimonail/>
      <Sponsors />
      <Contact/>
           
      
    </>
  )
}
