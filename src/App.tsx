import "./App.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { Navbar } from "./components/navbar";
import  Hero  from "./components/hero";
import Cocktails from "./components/cocktails";
import About from "./components/about";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
  </main>
}

export default App;
