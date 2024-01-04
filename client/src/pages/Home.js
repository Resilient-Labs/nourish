import About1 from '../components/About1'
import About2 from '../components/About2'
import Footer from '../components/Footer'
import Fridge from '../components/Fridge'
import GetInvolved from '../components/GetInvolved'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Quote from '../components/Quote'

export default function Home() {
  return (
    <div>
      {/* < Navbar /> */}
      < Hero />
      < Fridge />
      < About1 />
      < About2 />
      < GetInvolved />
      < Quote />
      < Footer />
    </div>
  )
}
