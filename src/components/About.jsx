import aboutImg from "../assets/images/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={aboutImg}
              alt="aboutImg"
              className="rounded-2xl w-full h-72 lg:w-96 lg:h-96"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
