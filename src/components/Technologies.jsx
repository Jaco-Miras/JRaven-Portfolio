import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl p-4">
          <FaHtml5 className="text-[#DD4B25] text-6xl" />
        </div>
        <div className="rounded-2xl p-4">
          <FaCss3Alt className="text-[#146EB0] text-6xl" />
        </div>
        <div className="rounded-2xl p-4">
          <IoLogoJavascript className="text-[#F2DA26] text-6xl" />
        </div>
        <div className="rounded-2xl p-4">
          <RiNextjsFill className="text-[#000000] text-6xl" />
        </div>
        <div className="rounded-2xl p-4">
          <RiReactjsFill className="text-[#5ED3F3] text-6xl" />
        </div>
        <div className="rounded-2xl p-4">
          <SiRedux className="text-[#7248B6] text-6xl" />
        </div>
        <div className="rounded-2xl p-4">
          <FaBootstrap className="text-[#7211F6] text-6xl" />
        </div>
        <div className="rounded-2xl p-4">
          <RiTailwindCssFill className="text-[#15B8C5] text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
