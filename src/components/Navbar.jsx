import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-[50px]">JR</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="">
          <FaLinkedin />
        </a>

        <a href="">
          <FaGithub />
        </a>

        <a href="">
          <FaXTwitter />
        </a>

        <a href="">
          <FaInstagram />
        </a>

        <a href="">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};
