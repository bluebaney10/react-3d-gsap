import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const BenefitSection = () => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create(".benefit-section .desc1 h1", {
        type: "chars",
      });

      gsap.from(titleSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".benefit-section",
          start: "top 30%",
        },
      });
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "2% top",
        end: `+=${2200}px`,
        scrub: true,
        pin: true,
      },
    });

    tl1
      .to(".benefit-section .desc1", {
        x: `-${1000}px`,
        ease: "power1.inOut",
      })
      .to(".circle", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      })
      .from(".benefit-section .desc2", {
        x: `${100}%`,
        ease: "power1.inOut",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container">
        <div className="absolute md:abs-center top-[20%] w-full whitespace-nowrap desc1 p-1">
          <h1>it all starts with a</h1>
        </div>
        <div className="circle fixed-center w-full h-full bg-black z-1"></div>

        <div className="absolute md:abs-y-center top-[20%] w-full whitespace-nowrap desc2 z-2">
          <h1 className="text-white">my drink</h1>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
