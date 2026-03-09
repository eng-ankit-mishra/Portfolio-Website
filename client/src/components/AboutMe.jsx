import {
  FaGraduationCap,
  FaBook,
  FaBrain,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
export const aboutMe = [
  {
    icon: <FaGraduationCap className="text-blue-500 md:text-xl" />,
    label: "Education & Technical Foundation:",
    desc: (
      <>
        Final-year{" "}
        <span className="font-semibold">
          MCA (Master of Computer Applications)
        </span>{" "}
        student with a strong foundation in{" "}
        <span className="font-semibold">Data Structures and Algorithms.</span>
      </>
    ),
  },
  {
    icon: <FaBook className="text-indigo-500 md:text-xl" />,
    label: "Academic Excellence:",
    desc: (
      <>
        <span className="font-semibold">Consistently excellent</span> — scored{" "}
        <span className="font-semibold">93%</span> in Intermediate,{" "}
        <span className="font-semibold">8.6 CGPA</span> in graduation and {" "}
        <span className="font-semibold">8.65 CGPA</span> in master’s.
      </>
    ),
  },

  {
    icon: <FaBrain className="text-purple-500 md:text-xl" />,
    label: "Problem Solving:",
    desc: (
      <>
        Solved <span className="font-semibold">400+</span> problems on{" "}
        <span className="italic">LeetCode</span>, demonstrating{" "}
        <span className="italic">consistency</span> and{" "}
        <span className="italic">strong problem-solving skills</span>.
      </>
    ),
  },
  {
    icon: <FaLaptopCode className="text-teal-500 md:text-xl" />,
    label: "Web Development Experience:",
    desc: (
      <>
        Built <span className="font-semibold">responsive</span> and{" "}
        <span className="font-semibold">accessible</span> web applications using{" "}
        <span className="italic">React</span> and{" "}
        <span className="italic">Tailwind CSS</span>, with robust backend
        services using <span className="italic">SpringBoot</span> and{" "}
        <span className="italic">Node.js</span>.
      </>
    ),
  },
  {
    icon: <FaTools className="text-yellow-500 md:text-xl" />,
    label: "Open Source & Community:",
    desc: (
      <>
        Made <span className="font-semibold">1200+</span> GitHub contributions
        in <span className="font-semibold">2025</span> with active participation
        in <span className="italic">open-source projects.</span>
      </>
    ),
  },
];
