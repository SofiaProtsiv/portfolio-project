import barbershop from "../images/barbershop.png";
import discovery from "../images/discovery.png";
import filmoteka from "../images/filmoteka.png";
import icecream from "../images/icecream.png";
import petspaw from "../images/petspaw.png";
import slimmom from "../images/slimmom.png";
import webstudio from "../images/webstudio.png";
export const PORTFOLIOS = [
  {
    id: "discovery-project",
    url: "https://discovery-project.netlify.app/",
    preview: discovery,
    title: "Discovery",
    description:
      "Discovery Project is a project that will introduce you to places for recreation and travel. Used the Unsplash API to get pictures.",
  },
  {
    id: "icecream-project",
    url: "https://kurbatovas.github.io/project5/",
    preview: icecream,
    title: "Ice Cream Shop",
    description:
      "Using Parcel, SCSS, JS, HTML5. Worked on the following sections: gallery, content. Ice Cream company site. Responsible layout.",
  },
  {
    id: "slimmom-project",
    url: "https://g3-slimmom.netlify.app/",
    preview: slimmom,
    title: "Slim Mom",
    description:
      "Using React, Redux, Node.js, Express, HTML/CSS, AJAX. Worked in the backend to create endpoints for the received information for the day. You can register and login to your account. You can add, delete, change the products you ate during the day. Calculate the daily rate of calories and monitor the result.",
  },
  {
    id: "filmoteka-project",
    url: "https://kurbatovas.github.io/project6/",
    preview: filmoteka,
    title: "Filmoteka",
    description:
      "Using pure JS, npm-packages and SCSS, HTML5, REST API, AJAX. Worked on creating requests to the server, worked with local storage, created a dynamic markup and whole gallery, worked on a genre and year filter. Project about searching movies, and adding favorite movies to a client personal library.",
  },
  {
    id: "barbershop-project",
    url: "https://sofiaprotsiv.github.io/barbershop-project/",
    preview: barbershop,
    title: "Barbershop",
    description:
      "Barbershop landing page. Responsible layout. Using Parcel, SCSS, JS, HTML5.",
  },
  {
    id: "petspaw-project",
    url: "https://petspaw-project.netlify.app/",
    preview: petspaw,
    title: "Pets Paw",
    description: "Using pure JS, npm-packages and SCSS, HTML5, REST API, AJAX.",
  },
  {
    id: "webstudio-project",
    url: "https://sofiaprotsiv.github.io/goit-markup-hw-08/",
    preview: webstudio,
    title: "Web Studio",
    description: "Using Parcel, SCSS, JS, HTML5. Responsible layout.",
  },
];

export const SERVICES = [
  {
    id: "project-manager",
    svg_id: "kanban",
    service: "Project manager",
    responsibilities: [
      "Ensure Stakeholder Satisfaction",
      "Delegating work effectively",
      "Conducting regular meetings",
      "Managing documentation and reports",
      "Coming up with a Plan B",
      "Keeping the team close-knit",
    ],
  },
  {
    id: "frontend-developer",
    svg_id: "tag",
    service: "Full Stack Developer",
    responsibilities: [
      "Web Development",
      "Writing clean, functional code on the front- and back-end",
      "Testing and fixing bugs or other coding issues",
      "Design client-side and server-side architecture",
      "Create security and data protection settings",
      "Build features and applications with a mobile responsive design",
      "Write technical documentation",
    ],
  },
];
