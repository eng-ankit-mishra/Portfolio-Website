import coreJavaImg from "../assets/coreJavaImg.webp";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CoreJava from "../assets/CoreJava.pdf";
import frontend from "../assets/Front-End.webp";
import dsaImg from "../assets/dsaImg.webp";
import dsa from "../assets/dsa.pdf";
import restApi from "../assets/restApi.pdf";
import restApiImg from "../assets/restApiImg.webp";
import sql from "../assets/sql.pdf";
import sqlImg from "../assets/sqlImg.webp";
import react from "../assets/react.webp";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function AchievementsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 640);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const milestones = [
    {
      title: (
        <span>
          <CountUp enableScrollSpy end={400} duration={5} />+
        </span>
      ),
      subtitle: "LeetCode Problems Solved",
      color: "text-yellow-400",
      icon: (
        <TbBrandLeetcode className="text-yellow-400 text-2xl xl:text-3xl mb-2" />
      ),
    },
    {
      title: (
        <span>
          <CountUp enableScrollSpy end={1200} duration={5} />+
        </span>
      ),
      subtitle: "GitHub Contributions (2025)",
      color: "text-green-400",
      icon: <FaGithub className="text-green-400 text-2xl xl:text-3xl mb-2" />,
    },
  ];

  const certificates = [
    {
      title: "Front-End Developer",
      issuer: "Scrimba",
      date: "July 2025",
      link: frontend,
      src: frontend,
      description: "Built responsive UIs using HTML, CSS, and React.",
    },
    {
      title: "DSA",
      issuer: "PW-Skills",
      date: "July 2025",
      link: dsa,
      src: dsaImg,
      description: "Solved problems using core data structures and algorithms.",
    },
    {
      title: "SQL Basics",
      issuer: "HackerRank",
      date: "July 2025",
      link: sql,
      src: sqlImg,
      description: "Wrote basics SQL queries and analytical functions.",
    },
    {
      title: "Core Java",
      issuer: "Internshala",
      date: "May 2023",
      link: CoreJava,
      src: coreJavaImg,
      description: "Learned OOP, collections, and Java fundamentals.",
    },
    {
      title: "React",
      issuer: "Scrimba",
      date: "Apri 2025",
      link: react,
      src: react,
      description: "Built UI components using props and state.",
    },
    {
      title: "Rest API Intemediate",
      issuer: "HackerRank",
      date: "Aug 2025",
      link: restApi,
      src: restApiImg,
      description: "Passed the HackerRank skill certification test.",
    },
  ];

  const renderCard = (cert, idx) => {
    return (
      <div
        key={idx}
        className={`
        relative group w-[18rem] xl:w-sm flex items-center justify-between gap-x-6 
        border rounded-lg p-5 shadow-md overflow-hidden transition-all duration-200
        bg-gradient-to-br bg-[#f7f7f7]
        dark:from-zinc-900 dark:via-neutral-900 dark:to-black 
        hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-cyan-400/30
      `}
      >
        <div className="w-full h-full z-0 absolute bg-white/5 inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="w-2/3">
          <h3 className="text-base xl:text-xl text-cyan-900 dark:text-cyan-400 font-semibold mb-2">
            {cert.title}
          </h3>
          <p className="text-xs xl:text-sm text-gray-700 dark:text-gray-400 mb-2">
            {cert.issuer}
            <span className="bg-cyan-500 text-black text-[0.625rem] xl:text-xs px-2 py-0.5 rounded-full ml-2">
              {cert.date}
            </span>
          </p>
          <p className="text-xs xl:text-sm text-gray-800 dark:text-gray-300 mb-3">
            {cert.description}
          </p>
        </div>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferer"
          aria-label="Certificate Page"
        >
          <img
            src={cert.src}
            width="1193"
            height="870"
            loading="lazy"
            alt={cert.title + " Certificate"}
            title="click to view"
            className="w-16 xl:w-20 h-auto mt-2 rounded cursor-pointer object-cover brightness-95 hover:scale-105 shadow-md transition-all duration-75"
          />
        </a>
      </div>
    );
  };

  return (
    <section
      id="Achievements"
      className="
    lg:px-6 md:px-12 py-16 sm:py-10
    bg-gradient-to-br from-[#e2e8f0] to-[#f1f5f9] 
    dark:from-[#1f1f1f] dark:via-[#2a2a2a] dark:to-[#1f1f1f]
    text-gray-800 dark:text-white
  "
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Achievements & Certifications
      </h2>
      <div className="w-18 h-1 bg-blue-500 hover:w-32 transition-all duration-200 rounded-2xl mx-auto  mb-10" />

      {/* Milestones */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 mt-10 sm:mt=0">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className={`
    w-[13rem] xl:w-[15rem] rounded-xl shadow-md p-6 text-center 
    transition-all duration-200 border hover:scale-105 hover:shadow-xl
           bg-gradient-to-br bg-[#f1f1f1]

    dark:from-zinc-900 dark:to-black 
    border-cyan-400/20 hover:border-cyan-400
  `}
          >
            <div className="text-2xl xl:text-3xl mb-2">{m.icon}</div>
            <h3 className={`text-xl xl:text-2xl font-bold ${m.color}`}>
              {m.title}
            </h3>
            <p className="mt-1 text-xs xl:text-sm text-gray-700 dark:text-gray-300 font-medium">
              {m.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Certificates */}

      <main className="mx-auto sm:py-0 py-4 ">
        {isMobile ? (
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="mySwiper w-[20rem] mx-auto"
          >
            {certificates.map((cert, idx) => (
              <SwiperSlide
                key={idx}
                className="flex justify-center items-center h-auto" // Ensures card is centered
              >
                <div className=" flex items-center justify-center pt-6 pb-12">
                  {renderCard(cert, idx)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-center sm:gap-x-4 md:gap-x-2  gap-y-10 px-4 ">
            {certificates.map((cert, idx) => renderCard(cert, idx))}
          </div>
        )}
      </main>
    </section>
  );
}
