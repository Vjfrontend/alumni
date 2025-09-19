export const metadata = {
  title: 'Alumni',
  description: ''
}


import Hero from '@/components/hero'
import About from '@/components/about'
import Focus from '@/components/focus'
import Impact from '@/components/impact'
import Testimonail from '@/components/testimonials-carousel'
import Sponsors from "@/components/sponsors"
import Clients from '@/components/clients'
export default function Home() {
  return (
    <>
      <Hero/>
      <Focus/>
      <About/>
      <Impact/>
      <Testimonail/>
      <Clients/>
      <Sponsors />
           
      
    </>
  )
}
