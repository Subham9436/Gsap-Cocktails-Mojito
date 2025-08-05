import "./App.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return <main>
    <Navbar/>
    <Hero/>
    <div className="h-dvh bg-black">HIII</div>
  </main>
}

export default App;
