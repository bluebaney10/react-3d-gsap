import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create(".hero-section .title", {
        type: "chars",
      });

      const tl = gsap.timeline({
        delay: 1,
      });

      tl.to(".hero-section .texts", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      })
        .from(titleSplit.chars, {
          yPercent: 380,
          stagger: 0.02,
          ease: "power2.out",
        })
        .to(".hero-section .desc", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        });
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="c-container">
        <div className="flex h-full lg:items-center items-start p-1">
          <div className="texts opacity-0 overflow-hidden w-[70%]">
            <h1 className="title">
              Feel <br />
              Better
            </h1>
            <p className="desc">
              we have used plants for thousands of years in our search for
              better wellness— sofi is charting the future of plant-based
              remedies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
