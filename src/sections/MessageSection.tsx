import gsap, { SplitText } from "gsap/all";
import { useEffect } from "react";

const MessageSection = () => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      const messageSplit = SplitText.create(".message", {
        type: "words",
      });

      gsap.to(messageSplit.words, {
        color: "#ffffff",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: ".message-section",
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="message-section">
      <div className="c-container">
        <div className="flex lg:items-center h-full overflow-hidden">
          <h2 className="message lg:w-[60%] w-full p-1">
            Rev up your rebel spirit and feed the adventure of life with SPYLT,
            where you’re one chug away from epic nostalgia and fearless fun.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
