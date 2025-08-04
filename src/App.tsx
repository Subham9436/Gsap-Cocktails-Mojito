import "./App.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return <div className="text-3xl text-indigo-300 flex-center h-[100vh]">GSAP YAY!!!</div>;
}

export default App;
