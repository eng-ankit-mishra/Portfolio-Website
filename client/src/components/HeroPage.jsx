import resume from "../assets/resume.pdf";
import NavBar from "./NavBar";
import { Typewriter } from "react-simple-typewriter";
import { ExternalLink } from "lucide-react";
import heroImg from "../assets/ankitmishraimg.webp";

export default function HeroPage() {
  return (
    <section id="Home" className=" w-full h-screen font-Inter ">
      <NavBar />

      <main className="w-full h-screen flex flex-col-reverse items-center  md:flex-row  md:justify-between  pt-32 pb-10 md:pb-0 md:pt-0 md:pr-20 md:gap-4  text-neutral-200 bg-gradient-to-br dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] from-[#f8fafc] to-[#e2e8f0]">
        {/* Left Section: Name and Title */}
        <div className="px-4 h-full  flex flex-col gap-y-4 justify-center items-center ">
          <h1 className="text-center tracking-wide text-2xl lg:text-3xl mt-14 font-bold text-gray-800 dark:text-white">
            Hi I'm Ankit Mishra
          </h1>

          <h2 className="text-center tracking-wide text-lg lg:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            <Typewriter
              words={["Software Engineer", "Full-Stack Developer"]}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={80}
              loop
            />
          </h2>

          <p className="lg:px-20 md:px-8 px-4 text-center text-sm lg:text-[1.08rem] tracking-wide leading-relaxed font-normal mb-6 mt-1 text-gray-600 dark:text-gray-300">
  I develop secure, scalable applications with Java (Spring Boot) backend and React frontend — focused on clean architecture, REST APIs, and production-grade systems.
</p>

          <div className="w-12 h-1 bg-blue-500 rounded-full mb-2"></div>
          <a
            className="lg:py-[0.75rem] lg:px-10  px-6 py-2 flex justify-center items-center sm:text-sm md:text-base gap-2 lg:text-lg font-medium
    border border-cyan-500 text-cyan-600 dark:text-cyan-400 
    hover:bg-cyan-500/10 hover:shadow-md hover:shadow-cyan-500/30
    transition-all hover:scale-105 duration-150 rounded-lg mt-4 lg:mt-6 xl:mt-8 cursor-pointer"
            href={resume}
            target="_blank"
          >
            Download Resume
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Right Section: Profile Image */}
        <div className=" md:w-1/2 flex flex-col justify-center items-center relative">
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(0,255,255,0.4)] animate-pulse-slow transition-all">
            <img
              loading="lazy"
              src={heroImg}
              width="240"
              height="240"
              alt="profile picture a man sitting on chair and writing code"
              className="w-40 h-40 md:w-45 md:h-45 lg:w-60 lg:h-60 rounded-full shadow-xl shadow-cyan-500/30 object-cover transition duration-300 hover:scale-105 "
            />
          </div>
        </div>
      </main>
    </section>
  );
}
