import "./App.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { Navbar } from "./components/navbar";
import  Hero  from "./components/hero";
import Cocktails from "./components/cocktails";
import About from "./components/about";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>
  </main>
}

export default App;
