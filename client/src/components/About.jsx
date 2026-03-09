import aboutImg from "../assets/aboutImg.webp";
import { aboutMe } from "./AboutMe";

export default function About() {
  return (
    <section
      id="About"
      className="w-full h-fit xl:h-screen bg-white text-gray-800 dark:bg-gradient-to-br dark:from-[#0c0c0c] dark:via-[#121212] dark:to-[#1a1a1a] dark:text-gray-300 flex flex-col px-4 pb-10 xl:pb-0 transition-colors duration-300"
    >
      <header>
        <h1 className="text-2xl md:text-3xl font-bold text-center py-4 mt-4 text-black dark:text-white">
          About Me
        </h1>
      </header>
      <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mb-1" />
      <main className="flex-1 flex flex-col xl:flex-row gap-6">
        {/* Image */}
        <div className="w-full h-full xl:flex justify-center items-center hidden">
          <img
            loading="lazy"
            src={aboutImg}
            width="1024"
            height="1024"
            alt="Image of a person coding "
            className="h-110 w-120 rounded-2xl object-cover mb-4 shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="text-sm md:text-base md:pt-10 pt-5 md:px-4">
          <p className="pl-2 tracking-wide leading-relaxed text-gray-800 dark:text-white">
            I’m <span className="font-semibold">Ankit Mishra</span>, a{" "}
            <span className="font-semibold">full-stack developer</span> with
            strong <span className="font-semibold">DSA skills</span> who{" "}
            <span className="font-semibold">architects</span> and{" "}
            <span className="font-semibold">
              delivers clean, user-centric apps
            </span>
            . I <span className="font-semibold">develop</span> using{" "}
            <span className="italic">React</span>,{" "}
            <span className="italic">SpringBoot</span>, and{" "}
            <span className="italic">real-time APIs</span>, and I'm actively{" "}
            <span className="font-semibold">exploring AI integration</span> and{" "}
            <span className="font-semibold">designing scalable systems</span>.
          </p>

          <div className="relative md:mt-10 mt-6 pr-4">
            <div className="absolute top-0 left-8 w-0.5 bg-gray-300 dark:bg-gray-600 h-full" />
            <ul className="space-y-6 md:space-y-6 ml-10 sm:text-xs md:text-base">
              {aboutMe.map((item, index) => (
                <li className="relative" key={index}>
                  <div className="absolute -left-5.5 md:-left-6 top-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-105 transition">
                    {item.icon}
                  </div>
                  <p className="tracking-wide leading-relaxed md:pl-8 pl-6 hover:text-black dark:hover:text-white transition duration-200">
                    <span className="font-semibold text-black dark:text-white">
                      {item.label}
                    </span>{" "}
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}
