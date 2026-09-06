import { IoLogoJavascript, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import {
  RiTailwindCssFill,
  RiHtml5Fill,
  RiNpmjsFill,
  RiNextjsFill,
  RiBootstrapFill,
} from "react-icons/ri";
import { ImGit } from "react-icons/im";

const skills = [
  {
    name: "HTML5",
    icon: <RiHtml5Fill className="text-orange-500 dark:text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <IoLogoCss3 className="text-blue-500 dark:text-blue-600" />,
  },
  {
    name: "JAVASCRIPT",
    icon: <IoLogoJavascript className="text-yellow-400 dark:text-yellow-500" />,
  },
  { name: "GIT", icon: <ImGit className="text-red-500 dark:text-red-600" /> },
  {
    name: "NPM",
    icon: <RiNpmjsFill className="text-red-500 dark:text-red-600" />,
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapFill className="text-purple-700 dark:text-purple-600" />,
  },
  {
    name: "React.JS",
    icon: <IoLogoReact className="text-blue-500 dark:text-blue-400" />,
  },
  {
    name: "Next.JS",
    icon: <RiNextjsFill className="text-black dark:text-white" />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-cyan-500 dark:text-cyan-500" />,
  },
];

export default skills;
