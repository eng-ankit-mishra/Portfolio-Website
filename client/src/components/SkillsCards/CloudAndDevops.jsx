import ToolTip from "../ToolTip";
import {
  SiNetlify,
  SiVercel,
  SiDocker,
  SiRender,
  SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const cloudAndDevopsItems = [
  {
    id: 1,
    icon: (
      <SiNetlify className="text-xl sm:text-2xl xl:text-3xl text-cyan-600" />
    ),
    label: "Netlify",
    tooltip: "Deploy static websites easily",
  },
  {
  id: 2,
  icon: (
    <FaAws className="text-xl sm:text-2xl xl:text-3xl text-orange-500 dark:text-orange-400" />
  ),
  label: "AWS",
  tooltip: "Cloud computing platform",
},
  {
    id: 3,
    icon: (
      <SiDocker className="text-xl sm:text-2xl xl:text-3xl text-blue-400" />
    ),
    label: "Docker",
    tooltip: "Containerization for consistent app environments",
  },
  {
    id: 4,
    icon: (
      <SiRender className="text-xl sm:text-2xl xl:text-3xl text-neutral-800 dark:text-gray-100" />
    ),
    label: "Render",
    tooltip: "Cloud platform for hosting web services and static sites",
  },
  {
    id: 5,
    icon: (
      <SiGithubactions className="text-xl sm:text-2xl xl:text-3xl text-gray-950 dark:text-gray-300" />
    ),
    label: "Actions",
    tooltip: "CI/CD workflows for automating GitHub project tasks",
  },
];

export const cloudAndDevops = cloudAndDevopsItems.map((item) => {
  return (
    <div key={item.id}>
      {/* single skill */}
      <ToolTip text={item.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {item.icon}
          <span className="xl:text-sm sm:text-xs text-[0.625rem]  tracking-wide  mt-1">
            {item.label}
          </span>
        </div>
      </ToolTip>
    </div>
  );
});
