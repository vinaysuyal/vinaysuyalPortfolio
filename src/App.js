import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";

const projects = [
  {
    id: 6,
    title: "Quiz Application",
    description:
      "Developed a responsive quiz application that seamlessly retrieves questions, allows users to submit their answers, and includes an automated timer. Once the timer expires, the test is automatically submitted. After completion, users can conveniently view their results.",
    link: "https://quizapp-woad.vercel.app/",
    technologiesUsed: ["React js", "Javascript", "HTML", "CSS"],
  },
  {
    id: 1,
    title: "Food Order Application",
    description:
      "Designed and developed a Food Ordering Application featuring essential e-commerce functionality. The application has a visually appealing user interface and responsive design to support use on various devices, including smartphones, tablets, and desktop computers.",
    link: "https://food-order-app-sand-six.vercel.app/",
    technologiesUsed: ["React js", "Javascript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Sudoku Solution Visualiser",
    description:
      " Developed an interactive tool to demonstrate the efficiency of backtracking algorithms in solving Sudoku puzzles. Users can observe the step-by-step process and adjust the speed for detailed examination or quick overview. A project showcasing algorithm implementation and problem-solving skills.",
    link: "https://sudoku-solver-inky.vercel.app/",
    technologiesUsed: [
      "React js",
      "Javascript",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    id: 3,
    title: "Game of Thrones Family Tree Visualiser",
    description:
      "The project allows users to explore family trees of various Game of Thrones (GOT) houses. Users can select a house from a dropdown, and the corresponding family tree is displayed in an intuitive manner. The admin role has an additional feature to refresh the database with the latest character information fetched from an external API. This full-stack application showcases expertise in web development, database management, and API integration.",
    link: "https://github.com/vinaysuyal/gotFamilyTree",
    technologiesUsed: [
      "React js",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      " A user-friendly expense tracking application allowing easy entry of expenses with dates, and providing visual representations of spending patterns within specified date ranges. Efficiently manage finances and gain valuable insights for better budgeting.",
    link: "https://expense-tracker-one-nu.vercel.app/",
    technologiesUsed: ["React js", "Javascript", "Material UI", "HTML"],
  },
  {
    id: 7,
    title: "Auto Complete Search Box",
    description:
      "I've crafted a versatile autocomplete box designed for seamless integration into various applications, including search engines and online shopping websites. In search engines, it intuitively predicts and displays relevant search queries as users type, optimizing search efficiency. On e-commerce platforms, it enhances the shopping experience by suggesting products, categories, and filters, streamlining the search process and boosting sales.",
    link: "https://quizapp-woad.vercel.app/",
    technologiesUsed: ["React js", "Javascript", "HTML", "CSS"],
  },

  // Add more projects as needed
];

const ResumeModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <iframe
            title="Resume"
            src="/Resume.html"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
          <button className="close-button" onClick={onClose}>
            X Close Resume
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Vinay Suyal</h1>
          <p>Software Developer, Hitachi Vantara</p>
          <p>
            Highly skilled Software Developer with a strong background in
            problem solving and programming. Proven track record of successfully
            designing and implementing software solutions. Adept at
            communicating effectively with team members and stakeholders to
            ensure project success. Seeking a challenging software development
            role where one can utilize their skills and expertise to contribute
            to the success of the organization.
          </p>
        </header>
        <h1>Projects</h1>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="skills-list">
                  {project?.technologiesUsed?.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
              <div>
                <hr />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="close-button" onClick={openModal}>
          My Resume
        </button>
        {isModalOpen && <ResumeModal onClose={closeModal} />}
      </div>
      <div id="modal-root"></div>
    </div>
  );
};

export default App;
