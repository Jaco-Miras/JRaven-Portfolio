import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-gray-900">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-gray-900">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-gray-900">{experience.description}</p>
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
