import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import GoogleReviews from '@/components/GoogleReviews'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <GoogleReviews />
        <Location />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
