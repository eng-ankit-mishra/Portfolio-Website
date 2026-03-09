import codeCollabImg from "../../assets/codeCollab.webp";
import portfoilioImg from "../../assets/personalWeb.webp";
import inventoryImg from "../../assets/inventory.png"

import { portfolioFeatures } from "./CardFeatures";
import { codeEditorFeatures } from "./CardFeatures";
import { portfolioTechItems } from "./CardTechStack";
import { codeEditorTechItems } from "./CardTechStack";
import { inventoryManagementTechItems } from "./CardTechStack";
import { inventoryManagementFeatures } from "./CardFeatures";

import { Code2, ExternalLink } from "lucide-react";

export default function Cards() {
  const cardItems = [
    {
      id: 1,
      src: codeCollabImg,
      label: "Collaborative Code Editor",
      desc: "A real-time code editor built for seamless collaboration and live coding with teams.",
      features: codeEditorFeatures,
      tech: codeEditorTechItems,
      live: "https://codevspace.netlify.app",
      code: "https://github.com/dev-ankit-mishra/collab-code-editor",
    },
    {
      id: 2,
      src: inventoryImg,
      label: "Inventory Management",
      desc: "RBAC-enabled inventory system with real-time analytics and CI/CD.",
      features: inventoryManagementFeatures,
      tech: inventoryManagementTechItems,
      live: "http://13.201.45.24",
      code: "https://github.com/eng-ankit-mishra/inventory-management-system",
    },
    {
      id: 3,
      src: portfoilioImg,
      label: "Portfolio Website",
      desc: "A responsive portfolio site to highlight my work, skills, and contact—all in one place.",
      features: portfolioFeatures,
      tech: portfolioTechItems,
      live: "https://ankitmishra.pro",
      code: "https://github.com/dev-ankit-mishra/Portfolio-Website",
    },
  ];

  const cards = cardItems.map((card) => {
    return (
      <div
        key={card.id}
        className={`
    relative group w-[22rem] lg:w-[25rem] border rounded-2xl p-5 transition-all duration-300
    hover:scale-[1.02] hover:ring-2 hover:ring-indigo-400 hover:shadow-2xl
    shadow-md
    bg-gradient-to-br from-[#f3e8ff] to-[#ede9fe] 
    dark:from-slate-900 dark:to-gray-800 dark:border-white/10
    text-gray-800 dark:text-gray-100
  `}
      >
        <img
          loading="lazy"
          width="1024"
          height="1024"
          src={card.src}
          alt={card.label + " website image"}
          className="w-full h-26 lg:h-36 object-cover rounded-t-2xl"
        />

        <div className="absolute inset-0 z-0 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition duration-200" />

        <div className="relative z-10 space-y-2 mt-4">
          <h1 className="text-xl lg:text-2xl font-semibold">{card.label}</h1>
          <p className="tracking-wide leading-relaxed text-sm lg:text-base text-gray-600 dark:text-gray-300">
            {card.desc}
          </p>

          <ul className="leading-relaxed text-sm lg:text-base tracking-wide text-gray-500 dark:text-gray-400 list-disc list-inside">
            {card.features.map((item, index) => (
              <li className="py-1" key={index}>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-3">
            {card.tech.map((item, index) => (
              <span
                key={index}
                className={`${item.bgClass} text-white tracking-wide py-1 px-3 text-[0.625rem] lg:text-sm rounded-2xl`}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href={card.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
    bg-indigo-500 hover:bg-indigo-600 
    text-white 
    text-sm lg:text-base 
    px-4 py-2 
    rounded-lg 
    shadow-md 
    transition-all 
    duration-200 
    flex items-center gap-2
    dark:bg-indigo-600 dark:hover:bg-indigo-700
  "
            >
              <ExternalLink size={16} />
              Live
            </a>

            <a
              href={card.code}
              target="_blank"
              rel="noopener noreferrer"
              className="
    border border-indigo-400 
    text-indigo-600 
    hover:text-white 
    hover:bg-indigo-500 
    text-sm lg:text-base 
    px-4 py-2 
    rounded-lg 
    transition-all 
    duration-200 
    flex items-center gap-2
    dark:text-indigo-400 
    dark:border-indigo-500 
    dark:hover:bg-indigo-600/20 
    dark:hover:text-white
  "
            >
              <Code2 size={16} />
              Code
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <>{cards}</>;
}
