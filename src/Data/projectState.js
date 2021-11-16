//Windsor Lodge
import wlFull1 from "../Images/Projects/WindsorLodge/wlFull1.png";
import wlDesign from "../Images/Projects/WindsorLodge/wlDesign.png";
import wlGroup1 from "../Images/Projects/WindsorLodge/wlGroup1.png";
import wlFont1 from "../Images/Projects/WindsorLodge/wlFontPoppins.png";
import wlFont2 from "../Images/Projects/WindsorLodge/wlFontInter.png";
import wlFont3 from "../Images/Projects/WindsorLodge/wlFontTenorSans.png";
import wlWhite from "../Images/Projects/WindsorLodge/wlWhite.svg";
import wlDark from "../Images/Projects/WindsorLodge/wlDark.svg";
import wlSec from "../Images/Projects/WindsorLodge/wlSec.svg";
import wlLight from "../Images/Projects/WindsorLodge/wlLight.svg";

// EMDB
import emdbFull from "../Images/Projects/EMDB/emdb-full.png";
import emdbDesign from "../Images/Projects/EMDB/emdbDesign.png";
import emdbGroup from "../Images/Projects/EMDB/emdbGroup.png";
import embdFont1 from "../Images/Projects/EMDB/emdbFontAble.png";
import emdbWhite from "../Images/Projects/EMDB/emdbWhite.png";
import emdbLightGrey from "../Images/Projects/EMDB/emdbLightGrey.png";
import emdbMedGrey from "../Images/Projects/EMDB/emdbMedGrey.png";
import emdbDarkGrey from "../Images/Projects/EMDB/emdbDarkGrey.png";

//WindsorMeetup
import meetupFull from "../Images/Projects/WindsorMeetup/meetupFull.png";
import meetupDesign from "../Images/Projects/WindsorMeetup/meetupDesign.png";
import meetupGroup from "../Images/Projects/WindsorMeetup/meetupGroup.png";
import meetupFont1 from "../Images/Projects/WindsorMeetup/meetupFontLato.png";
import meetupFont2 from "../Images/Projects/WindsorMeetup/meetupFontOpenSans.png";
import meetupLight from "../Images/Projects/WindsorMeetup/meetupLight.png";
import meetupMed from "../Images/Projects/WindsorMeetup/meetupMed.png";
import meetupDark from "../Images/Projects/WindsorMeetup/meetupDark.png";
import meetupAccent from "../Images/Projects/WindsorMeetup/meetupAccent.png";

//FoodApp
import foodAppFull from "../Images/Projects/FoodApp/foodAppFull.png";
import foodAppDesign from "../Images/Projects/FoodApp/foodAppDesign.png";
import foodAppGroup from "../Images/Projects/FoodApp/foodAppGroup.png";
import foodAppFont1 from "../Images/Projects/FoodApp/foodAppFontNotoSans.png";
import foodAppMed from "../Images/Projects/FoodApp/foodAppMed.png";
import foodAppDark from "../Images/Projects/FoodApp/foodAppDark.png";
import foodAppAccent from "../Images/Projects/FoodApp/foodAppAccent.png";

export const ProjectState = () => {
  return [
    {
      title: "Windsor Lodge 403",
      mainImg: wlFull1,
      groupImg: wlGroup1,
      design: wlDesign,
      subTitle: "Established 1884",
      role: "Front-end Developer, Full-Stack",
      tech: "HTML, CSS, JavaScript, PHP",
      creation: [
        { title: "A New Start." },
        {
          desc1:
            "As the Front-end Developer, I was responsible for the entire website, from the Design, following strict rules from the Grand Lodge and implementation of the Back-end.",
        },
        {
          desc2:
            "This was my first project I did after completing online courses, and it was well received by both the Grand Lodge and the Members of the Lodge.",
        },
      ],
      shortDescription:
        "Website designed and created for a local Freemason Lodge.",
      longDescription:
        "A local Freemasonry Lodge was in need of a website, and they had asked me a few years ago to design and create one. At that time I wasn't up to the task. This was my first project I did after learning online. It had strict rules and regulations I had to follow. After completing, it was well received from the members and the Grand Lodge of Ontario.",
      styles: [
        {
          colors: [
            { img: wlWhite, color: "#F7F9F7" },
            { img: wlDark, color: "#546255" },
            { img: wlSec, color: "#A0AFA0" },
            { img: wlLight, color: "#F0F8FF" },
          ],
        },

        {
          fonts: [{ img: wlFont1 }, { img: wlFont2 }, { img: wlFont3 }],
        },
      ],

      url: "/projects/windsor-lodge",
      visit: "https://windsorlodge403.com",
    },
    {
      title: "EMDB",
      mainImg: emdbFull,
      groupImg: emdbGroup,
      design: emdbDesign,
      url: "/projects/emdb",
      role: "Front-end Developer",
      tech: "ReactJs, Styled-Components, React-Router, Custom-Hooks, Rest-API",
      creation: [
        { title: "Fresh Design for Movie App." },
        {
          desc1:
            "A Movie lovers dream site, which allows users to search and view any movie they want.",
        },
        {
          desc2:
            "Using TMDB API and a custom design, the site is visually appealing and has an easy user interface. ",
        },
      ],
      styles: [
        {
          colors: [
            { img: emdbWhite, color: "#FFFFFF" },
            { img: emdbLightGrey, color: "#EEEEEE" },
            { img: emdbMedGrey, color: "#353535" },
            { img: emdbDarkGrey, color: "#1C1C1C" },
          ],
        },

        {
          fonts: [{ img: embdFont1 }],
        },
      ],
      shortDescription: "A Front End design for a Movie Database",
      longDescription:
        "A Front End design that works off The Movie Database API. It allows users to search for movies, view the new movies and lists them by rank.",
      visit: "https://emdbmovieapp.netlify.app/",
    },
    {
      title: "Windsor Meetups",
      mainImg: meetupFull,
      groupImg: meetupGroup,
      design: meetupDesign,
      role: "Front-end Designer, Back-end",
      tech: "NextJs, MongoDb",
      creation: [
        { title: "A NextJs Project." },
        {
          desc1:
            "Starter project I created with NextJs. It's a framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.",
        },
        {
          desc2:
            "I allows users to submit and view meetups created that are stored using Mongo.",
        },
      ],

      url: "/projects/windsor-meetup",
      styles: [
        {
          colors: [
            { img: meetupLight, color: "#FFE2ED" },
            { img: meetupMed, color: "#A50E48" },
            { img: meetupDark, color: "#77002E" },
            { img: meetupAccent, color: "#77002E" },
          ],
        },

        {
          fonts: [{ img: meetupFont1 }, { img: meetupFont2 }],
        },
      ],

      shortDescription: "A NextJs project",
      longDescription:
        "A small project using NextJs that allows users to set a Meetup with a description, address and image.",
      visit:
        "https://vercel.com/edwardreeddesign/nextjs-course-demo/GEue58VTksCFPAnTNsfsK2LdRwbW",
    },

    {
      title: "Food App",
      mainImg: foodAppFull,
      groupImg: foodAppGroup,
      design: foodAppDesign,
      url: "/projects/food-app",
      role: "Front-end Developer",
      tech: "ReactJs, Context-API, Styled-Components, Firebase-API",
      creation: [
        { title: "Food Order App." },
        {
          desc1:
            "Basic Food Ordering app that allows users to select items from a menu and add the to the cart for ordering.",
        },
        {
          desc2:
            "All menu items are stored using Firebase. Users can submit orders which will show up on the back-end. ",
        },
      ],
      styles: [
        {
          colors: [
            { img: emdbWhite, color: "#FFFFFF" },
            { img: foodAppMed, color: "#8A2B06" },
            { img: foodAppDark, color: "#3F3F3F" },
            { img: foodAppAccent, color: "#383838" },
          ],
        },

        {
          fonts: [{ img: foodAppFont1 }],
        },
      ],
      shortDescription: "Front End design for a Food App.",
      longDescription:
        "With the changing times, websites need the use for carts to order their products. This app allows users to add food to the cart, and submit orders.",
      visit: "https://emdbmovieapp.netlify.app/",
    },
  ];
};
