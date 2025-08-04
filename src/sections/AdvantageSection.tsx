import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AdvantageSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".advantage-section",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    tl.to(".advantage-section .texts", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .from(".advantage-section .title", {
        yPercent: 350,
        ease: "power2.out",
      })
      .from(".advantage-section .desc", {
        yPercent: 350,
        ease: "power2.out",
      });
  });

  return (
    <section className="advantage-section">
      <div className="c-container">
        <div className="flex h-full lg:items-center items-start p-1">
          <div className="texts overflow-hidden w-[60%] ml-auto opacity-0">
            <h2 className="title">Connected</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sint
              aliquam debitis dolorem veniam maiores cum possimus est maxime
              cupiditate!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
