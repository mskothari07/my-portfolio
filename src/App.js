import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Hom";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocilLinks from "./components/SocilLinks";

export default function App() {
  return (
    <div>
          <NavBar/>
          <Home/>
          <About />
          <Portfolio/>
          <Contact/>
          <SocilLinks />
    </div>

  )
}