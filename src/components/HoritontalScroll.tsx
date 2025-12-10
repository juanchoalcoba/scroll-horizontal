import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

function HorizontalScrollShowcase(): React.ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelsRef.current) return;

    const panels = gsap.utils.toArray<HTMLDivElement>(".panel");

    panels.forEach((panel) => {
      const title = panel.querySelector<HTMLHeadingElement>(".project-title");
      const category =
        panel.querySelector<HTMLParagraphElement>(".project-category");
      const icon = panel.querySelector<HTMLDivElement>(".project-icon");
      const number = panel.querySelector<HTMLDivElement>(".project-number");

      gsap.set([title, category, icon], {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
      });
      gsap.set(number, { opacity: 0.05, x: 0 });
    });

    // Animación horizontal
    const horizontalAnimation = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${panelsRef.current?.offsetWidth || 0}`,
        id: "horizontal",
      },
    });

    panels.forEach((panel) => {
      const title = panel.querySelector<HTMLHeadingElement>(".project-title");
      const category =
        panel.querySelector<HTMLParagraphElement>(".project-category");
      const icon = panel.querySelector<HTMLDivElement>(".project-icon");

      if (title && category) {
        gsap.fromTo(
          [title, category],
          {
            opacity: 0.3,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: panel,
              start: "left center",
              end: "center center",
              containerAnimation: horizontalAnimation,
              scrub: true,
            },
          }
        );
      }

      if (icon) {
        gsap.fromTo(
          icon,
          {
            scale: 0.5,
            opacity: 0.5,
          },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: panel,
              start: "left center",
              end: "center center",
              containerAnimation: horizontalAnimation,
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-7xl md:text-9xl font-black mb-6 bg-linear-to-r from-purple-900 via-red9400 to-cyan-200 bg-clip-text text-transparent">
            SCROLL
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Experience the journey →
          </p>
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 mx-auto text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      
      <div ref={containerRef} className="relative">
        <div ref={panelsRef} className="flex h-screen w-fit">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="panel w-screen h-screen flex items-center justify-center relative shrink-0"
            >
      
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-20`}
              ></div>

      
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                ></div>
              </div>

      
              <div className="relative z-10 text-center px-8">
                <div className="project-number absolute top-0 left-0 text-[20rem] font-black opacity-5">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-icon text-9xl mb-8 filter drop-shadow-2xl flex items-center justify-center">
                  {typeof project.icon === "string" ? (
                    project.icon
                  ) : (
                    <project.icon className="w-24 h-24 project-title  font-black mb-6 text-gray-200" />
                  )}
                </div>

                <h2 className="project-title text-7xl md:text-9xl font-black mb-6 bg-linear-to-r from-purple-700 via-red-300 to-cyan-200 bg-clip-text text-transparent">
                  {project.title}
                </h2>

                <p className="project-category text-2xl md:text-3xl text-gray-400 uppercase tracking-widest">
                  {project.category}
                </p>

      
                <div className="mt-12 flex justify-center gap-4">
                  <div
                    className={`w-20 h-1 bg-linear-to-r ${project.color}`}
                  ></div>
                  <div
                    className={`w-20 h-1 bg-linear-to-r ${project.color} opacity-50`}
                  ></div>
                  <div
                    className={`w-20 h-1 bg-linear-to-r ${project.color} opacity-25`}
                  ></div>
                </div>
              </div>

      
              <div
                className={`absolute bottom-8 right-8 w-32 h-32 bg-linear-to-br ${project.color} rounded-full blur-3xl opacity-30`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-black via-purple-950 to-black">
        <div className="text-center z-10 px-4">
          <h2 className="text-6xl md:text-8xl font-black mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Let's create something amazing together
          </p>
          <button className="px-12 py-6 bg-linear-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 shadow-2xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default HorizontalScrollShowcase