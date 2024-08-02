import project1 from "../assets/images/projects/government website.png";
import project2 from "../assets/images/projects/hris.png";
import project3 from "../assets/images/projects/driff.jpg";
import project4 from "../assets/images/projects/dorshs.png";
import project5 from "../assets/images/projects/peso system.png";
import project6 from "../assets/images/projects/website administrator.png";

export const HERO_CONTENT = `Dynamic and experienced ReactJS Developer with a proven
track record of delivering high-quality web applications. With
3 years of hands-on experience, adept at leveraging ReactJS
and associated technologies to build scalable and intuitive
user interfaces.`;

export const ABOUT_TEXT = `Hi there! I'm Jaco Raven Miras, a frontend developer with a strong love for using React.js to create dynamic and captivating user interfaces. With a solid background in HTML, CSS, and JavaScript, I create dynamic websites and web apps with an emphasis on clear, simple design, and flawless user experiences. My interest lies in transforming concepts into captivating and motivating interactive experiences, whether it's through pixel-perfect layout creation, speed optimization, or API integration. When I'm not coding, I like to experiment with new libraries, learn about the newest frontend trends, and broaden my skill set to stay up to date with web development.
`;

export const EXPERIENCES = [
  {
    year: "March 2023 - July 2024",
    role: "Frontend Developer",
    company: "KRZ Systems Incorporated",
    description: `Developed a web HRIS application, Government websites and Systems that connected to the website like (Website Administrator Panel, etc.) . Using Redux, Authentication, React JS, Tailwind Css, ReactJS fetch`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJS",
      "Redux",
      "TailwindCSS",
    ],
  },
  {
    year: "August 2022 - December 2022",
    role: "Junior React JS Developer",
    company: "MakeInteractive Davao Co. Ltd",
    description: `Developed an online collaboration web application (Driff) which allows the users to communicate internally with other employees and externally with the company clients`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJS",
      "Redux",
      "Styled-Components",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Government Website",
    image: project1,
    description:
      "A responsive website which allows the users view on their mobile phone, tablets, etc.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
    link: "https://macodavaodeoro.com/",
  },
  {
    title: "Peso System",
    image: project5,
    description:
      "A fully functioned system that managing the applications of the companies, this system can be reflects to the website.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Authentication",
      "TailwindCSS",
    ],
    link: "https://macodavaodeoro.com/#/peso-corner/peso-sys/login",
  },
  {
    title: "Website Administrator panel",
    image: project6,
    description:
      "This panel allows the admin control the content of the website.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Authentication",
      "TailwindCSS",
    ],
    link: "https://macodavaodeoro.com/#/admin/login",
  },
  {
    title: "HRIS Web Application",
    image: project2,
    description:
      "An application for managing the applications on applicants and also has a functional job applications on job applicant on certain a job opening.",
    technologies: ["HTML", "CSS", "React", "Redux", "TailwindCSS"],
    link: "http://97.74.95.183:44365/#/login",
  },
  {
    title: "Driff",
    image: project3,
    description:
      "A fully functioned web application that allows the users to communicate with other employees internally and externally with the company clients",
    technologies: ["HTML", "CSS", "React", "Redux", "Styled-Components"],
    link: "https://driff.io/",
  },

  {
    title: "Dorshs Web Application",
    image: project4,
    description:
      "A fully functional school web portal that allows the admins/ teachers manipulating the grades of the students and viewing for the users",
    technologies: ["HTML", "CSS", "React", "Redux", "Firebase"],
    link: "https://dorshs-website.web.app/",
  },
];

export const CONTACT = {
  address: "#532-A Greenhills St. DDF Village, Mandug, Davao City ",
  phoneNo: "+63 948 3879 921 ",
  email: "miras.jaco@gmail.com",
};
