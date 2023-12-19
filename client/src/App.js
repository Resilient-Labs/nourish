import './App.css';
import Navbar from './components/Navbar.js'
import Fridge from './components/Fridge.js'
import About from './components/About.js'
import Initiatives from './components/Initiatives.js'
import GetInvolved from './components/GetInvolved.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Navbar />
        < Fridge />
        < About />
        < Initiatives />
        < GetInvolved />
        < Footer />
      </header>
    </div>
  );
}

export default App;
