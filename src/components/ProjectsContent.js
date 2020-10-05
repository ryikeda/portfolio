import yosokuImg from "../images/yosoku-app.jpg";
import netcloneImg from "../images/netclone.jpg";
import hackerCloneImg from "../images/hack_or_snooze.jpg";
import jeopardyImg from "../images/jeopardy.jpg";
import backendNode from "../images/backend_node.jpg";

export default [
  {
    name: "yosoku-app",
    title: "Price Prediction",
    description:
      "This app uses machine learning models to predict real estate prices in Japan.",
    git: "https://github.com/ryikeda/yosoku",
    live: "https://yosoku-app-ry.herokuapp.com/",
    image: yosokuImg,
  },
  {
    name: "netclone",
    title: "Netflix Clone",
    description:
      "This page was created with react. The data comes from themoviedb.org API.",
    git: "https://github.com/ryikeda/netflix-clone",
    live: "https://ryikeda.github.io/netflix-clone/",
    image: netcloneImg,
  },
  {
    name: "jobly",
    title: "Express API",
    description: "This is the backend for a Job posting application",
    git: "https://github.com/ryikeda/Jobly",
    live: "",
    image: backendNode,
  },
  {
    name: "hackerClone",
    title: "Hacker News Clone",
    description:
      "The user can create and account or login to share links with other users.",
    git: "https://github.com/Springboard-Bootcamp-Assignments/hack_or_snooze",
    live: "https://springboard-bootcamp-assignments.github.io/hack_or_snooze/",
    image: hackerCloneImg,
  },
  {
    name: "jeopardy",
    title: "Jeopardy",
    description: "This app uses a external API to fetch data for the game.",
    git: "https://github.com/ryikeda/jeopardy/",
    live: "https://ryikeda.github.io/jeopardy/",
    image: jeopardyImg,
  },
];
