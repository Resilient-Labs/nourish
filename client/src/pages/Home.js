import About from "../components/About"
import Footer from "../components/Footer"
import Fridge from "../components/Fridge"
import GetInvolved from "../components/GetInvolved"
import Hero from "../components/Hero"
import Initiatives from "../components/Initiatives"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Fridge />
      <About />
      <Initiatives />
      <GetInvolved />
      <Footer />
    </div>
  )
}
