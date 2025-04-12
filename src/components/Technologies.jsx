import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl p-4" title="HTML5">
          <FaHtml5 className="text-[#DD4B25] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="CSS3">
          <FaCss3Alt className="text-[#146EB0] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="Javascript">
          <IoLogoJavascript className="text-[#F2DA26] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="NextJS">
          <RiNextjsFill className="text-[#000000] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="ReactJS">
          <RiReactjsFill className="text-[#5ED3F3] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="Angular">
          <RiAngularjsFill className="text-red-600 text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="Redux">
          <SiRedux className="text-[#7248B6] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="NodeJS">
          <FaNodeJs className="text-[#6CC24A] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="Bootstrap">
          <FaBootstrap className="text-[#7211F6] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="Tailwindcss">
          <RiTailwindCssFill className="text-[#15B8C5] text-6xl" />
        </div>
        <div className="rounded-2xl p-4" title="shadcn/ui">
          <SiShadcnui className="text-gray-800 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
