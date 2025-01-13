import { PROJECTS } from "../constants";
import { TbWorldWww } from "react-icons/tb";
const Projects = () => {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-gray-900">{project.description}</p>

              <div className="mb-8 flex flex-wrap">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 w-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <TbWorldWww className="w-7 h-7 text-gray-800" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
