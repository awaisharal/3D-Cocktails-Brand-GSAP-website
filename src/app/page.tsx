import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";
import Art from "@/components/Art";
import Menu from "@/components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      {/* <div className="h-[100vh]"></div> */}
    </main>
  );
}
