import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";

const projects = [
  {
    id: 1,
    title: "Food Order Application",
    description:
      "Designed and developed a Food Ordering Application featuring essential e-commerce functionality. The application has a visually appealing user interface and responsive design to support use on various devices, including smartphones, tablets, and desktop computers.",
    link: "https://food-order-app-sand-six.vercel.app/",
  },
  {
    id: 2,
    title: "Sudoku Solution Visualiser",
    description:
      " Developed an interactive tool to demonstrate the efficiency of backtracking algorithms in solving Sudoku puzzles. Users can observe the step-by-step process and adjust the speed for detailed examination or quick overview. A project showcasing algorithm implementation and problem-solving skills.",
    link: "https://sudoku-solver-inky.vercel.app/",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      " A user-friendly expense tracking application allowing easy entry of expenses with dates, and providing visual representations of spending patterns within specified date ranges. Efficiently manage finances and gain valuable insights for better budgeting.",
    link: "https://expense-tracker-one-nu.vercel.app/",
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
        <h1>My Projects</h1>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
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
