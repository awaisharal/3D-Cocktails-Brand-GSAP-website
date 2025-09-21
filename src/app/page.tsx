import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
}
