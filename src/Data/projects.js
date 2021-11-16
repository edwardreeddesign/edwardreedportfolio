//Images
//Windsor Lodge
import wlFull from "../Images/Projects/WindsorLodge/wlFull1.png";

//EMDB
import emdb from "../Images/Projects/EMDB/emdb-full.png";

//Food app
import foodApp from "../Images/Projects/FoodApp/foodAppFull.png";

//Windsor Meetup
import meetupApp from "../Images/Projects/WindsorMeetup/meetupFull.png";

export const baseProjects = () => {
  return [
    {
      key: 1,
      title: "Windsor Lodge 403",
      number: "01",
      cta: "View Project",
      description: "Website designed and created for a local Freemason Lodge.",
      tech: "HTML, CSS, Full-Stack",
      img: wlFull,
      url: "/projects/windsor-lodge",
    },

    {
      key: 2,
      title: "EMDB",
      number: "02",
      cta: "View Project",
      description: "A Front End design for a Movie Database.",
      tech: "ReactJs, Styled-Components, Router, Custom Hooks, API",
      img: emdb,
      url: "/projects/emdb",
    },

    {
      key: 3,
      title: "Food App",
      number: "03",
      cta: "View Project",
      description: "A small design for a Food App.",
      tech: "ReactJs, Context, Styled-Components, Firebase Database, API",
      img: foodApp,
      url: "/projects/food-app",
    },

    {
      key: 4,
      title: "Windsor Meetup",
      number: "04",
      cta: "View Project",
      description: "A NextJs project.",
      tech: "NextJs, MongoDb",
      img: meetupApp,
      url: "/projects/windsor-meetup",
    },
  ];
};
