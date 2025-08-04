import Scene from "./components/Scene";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import HeroSection from "./sections/HeroSection";
import { useGSAP } from "@gsap/react";
import MessageSection from "./sections/MessageSection";
import BenefitSection from "./sections/BenefitSection";
import ProductSection from "./sections/ProductSection";
import AdvantageSection from "./sections/AdvantageSection";
import ProductOverview from "./components/ProductOverview";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Scene />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <BenefitSection />
          <AdvantageSection />
          <ProductSection />
        </div>
      </div>
      <ProductOverview />
    </main>
  );
}

export default App;
