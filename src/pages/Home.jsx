import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Strategy from '../components/Strategy'
import Values from '../components/Values'
import Solutions from '../components/Solutions'
import Industries from '../components/Industries'
import Products from '../components/Products'
import APSDeepDive from '../components/APSDeepDive'
import CeODeepDive from '../components/CeODeepDive'
import Service from '../components/Service'
import News from '../components/News'
import Footer from '../components/Footer'
import FloatingContact from '../components/FloatingContact'

export default function Home() {
  return (
    <>
      <div className="tech-bg"></div>
      <div className="app">
        <Navbar />
        <Hero />
        <Strategy />
        <Values />
        <Solutions />
        <Industries />
        <Products />
        <APSDeepDive />
        <CeODeepDive />
        <Service />
        <News />
        <Footer />
        <FloatingContact />
      </div>
    </>
  )
}
