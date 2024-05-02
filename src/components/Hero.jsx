import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/profilePic.png";

const Hero = () => {
  return (
    <div className="borber-b pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:mt-40">
            <h1 className="pb-16 text-4xl font-medium tracking-tight lg:mt-16 lg:text-6xl">
              Jaco Raven Miras
            </h1>
            <span className="bg-gradient-to-r from-blue-500 via-slate-500 to-red-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Frontend Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-normal tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 md:p-8 lg:mt-40">
          <div className="flex justify-center bg-gradient-to-b from-gray-400 to-gray-600 rounded">
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
