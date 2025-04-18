import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  px-0 lg:px-8 py-0 lg:fixed lg:bg-white lg:w-full lg:border-b lg:shadow">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-[50px]">JR</h1>
      </div>
      <div className="m-8 flex items-center justify-end gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/jaco-raven-miras-13b6aa201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-[#0A66C2]" />
        </a>
        <a
          href="https://github.com/Jaco-Miras"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/Jaxxx_2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/jakoreben/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-[#CF2972]" />
        </a>
        <a
          href="https://www.facebook.com/jraven.miras"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-[#0866FF]" />
        </a>
      </div>
    </nav>
  );
};
