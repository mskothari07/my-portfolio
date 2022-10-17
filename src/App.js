import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Hom";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocilLinks from "./components/SocilLinks";

export default function App() {
  return (
    <div>
          <NavBar/>
          <Home/>
          <About />
          <Skills/>
          <Portfolio/>
          <Contact/>
          <SocilLinks />
    </div>

  )
}