export const metadata = {
  title: 'OOCF',
  description: 'Page description',
}
import { Analytics } from "@vercel/analytics/react"

import Hero from '@/components/hero'
import About from '@/components/about'
import Focus from '@/components/focus'
import Impact from '@/components/impact'
import Testimonail from '@/components/testimonials-carousel'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Focus/>
      <Impact/>
      <Testimonail/>
      <Contact/>
           
      
    </>
  )
}
