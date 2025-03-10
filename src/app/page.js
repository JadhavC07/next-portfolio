"use client";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, []);

  return (
    <>
      <header className="flex justify-center py-12 bg-white dark:bg-gray-950">
        <div className="text-center p-20">
          <h1 className="text-5xl font-bold text-lime-500">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "I'm a Web Developer",
                1000,
                "I'm a Front-End Developer",
                1000,
                "I'm a Back-End Developer",
                1000,
                "I'm a Full Stack Developer",
                500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-4xl font-bold mb-4 text-lime-500">
            <TypeAnimation
              sequence={["ALL", 500, "IN", 500, "ONE", 500]}
              repeat={Infinity}
            />
          </h2>
          <p className="text-2xl mb-4 text-lime-500 opacity-95">
            &quot;Designing the future, one line of code at a time. Your
            full-stack maestro of innovation and elegance.&quot;
          </p>

          <figure className="w-48 h-58 mx-auto rounded-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              width={210}
              height={210}
              src="/Images/my-prop.svg"
              alt="Chandan Jadhav Full Stack Developer Profile Picture"
              loading="lazy"
            />
          </figure>
        </div>
      </header>

      <main className="dark:bg-gray-950">
        <div className="container mx-auto text-center">
          <div className="inline-block relative" style={{ maxWidth: "860px" }}>
            <Image
              src="/Images/my-pc.svg"
              alt="Chandan Jadhav Full Stack Developer Work Setup"
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
        </div>
      </main>

      <section
        className="text-black text-center py-16"
        style={{ backgroundColor: "rgb(58, 255, 9)" }}
      >
        <div className="container mx-auto">
          <article className="flex justify-center">
            <div className="w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hi, I’m Chandan. Nice to meet you.
              </h2>
              <p className="text-xl md:text-xl font-medium">
                With 6 months of internship experience and now serving as a
                junior software developer...
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
