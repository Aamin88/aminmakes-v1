import booktrackr from "../assets/images/bookstrackr.jpeg";
import periodic from "../assets/images/periodic.jpeg";
import litledger from "../assets/images/litledger.jpeg";

const projects = [
  {
    title: "Bookstrackr",
    description:
      "This project was developed to foster reading among peers. It provides a form where other users can easily add books recommendations for other user to discover. The project also featured AI generate summary of any books added as well as the key takeway using GEMINI AI. ",
    img: booktrackr,
    gitLink: "https://github.com/Aamin88/booktrackr",
    link: "https://bookstrackr.vercel.app/",
  },
  {
    title: "Periodic",
    description:
      "This project was developed to help student and chemistry enthusiats who want to learn the chemical elemnts. The project features the pronunciation of each chemical element which can be heart by click on the element.",
    img: periodic,
    link: "https://periodic-table-murex-three.vercel.app/",
    gitlink: "https://github.com/Aamin88/periodic-table",
  },
  {
    title: "Lit ledger",
    description:
      "This project was developed to help me keep records of books on my reading list. Developed using html, css and javascript, leveraging the browser's localstorage to persist the record whilst allowing CRUD functionality.",
    img: litledger,
    gitLink: "https://github.com/Aamin88/lit-ledger",
    link: "https://lit-ledger.vercel.app/",
  },
];

export default projects;
