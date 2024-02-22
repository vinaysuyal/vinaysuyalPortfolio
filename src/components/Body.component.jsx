import gymLogo from "../assets/gymLogo.png";
import swimLogo from "../assets/swimLogo.png";
import bookLogo from "../assets/book.png";
function BodyComponent() {
  const experience = [
    {
      position: "Software Developer",
      organization: "Hitachi Vantara",
      location: "Hyderabad",
      start: "June 2021",
      end: "Present",
      description_list: [
        "Expertly coded and implemented software changes based on precise design specifications, resulting in seamless functionality and user experience.",
        "Developed multiple POCs for various features demonstrating the feasibility and potential impact of each feature on the company's product roadmap.",
        "Demonstrated strong problem-solving skills by accurately identifying, diagnosing, and fixing website issues including bugs, typographical errors and formatting issues.",
        "Collaborated with clients to understand business requirements, ensuring the development of solutions that meet their needs.",
        "Assisted with the onboarding and training of new team members, effectively communicating project processes and protocols to facilitate their integration into the team.",
      ],
    },
    {
      position: "Intern",
      organization: "Hitachi Vantara",
      location: "Hyderabad",
      start: "Feb 2021",
      end: "May 2021",
      description_list: [
        "Successfully implemented backend REST API's and honed my expertise in microservices patterns and practices.",
        "Applied my knowledge of Docker to design and develop an Interns Management Tool that streamlined the company's intern management process by transitioning from excel sheets to a web application.",
      ],
    },
    {
      position: "Technical Intern",
      organization: "Tech IndusOne Services",
      location: "Mohali",
      start: "May 2020",
      end: "June 2020",
      description_list: [
        "Architected and developed a JIRA-like Project Management Solution using Django as part of the team that built the company's Employee Management system. The solution streamlined the assignment, movement, and submission of projects within the organization.",
      ],
    },
  ];

  const projects = [
    {
      id: 9,
      title: "One Dash",
      description: `Collaborated on a team to develop a project management app for a client with 200 subsidiaries, resulting in a 40% productivity increase. We added real-time data visualization, streamlined processes, and implemented comprehensive project record-keeping. This improved transparency, accountability, and decision-making. The app's ongoing support and maintenance ensure optimal performance, leading to sustained productivity gains and successful project outcomes.`,
      link: "",
      missingLinkReason: "Project Owned by Hitachi Vantara",
      technologiesUsed: [
        "React js",
        "Redux",
        "Javascript",
        "HTML",
        "CSS",
        "Material UI",
        "SASS",
        "Highcharts",
      ],
    },
    {
      id: 8,
      title: "KGIT UFS+",
      description: `Collaborated on a complex freight forwarding app for Kintetsu World Express, yielding a 90% performance boost compared to the previous desktop app. Applied React JS and Redux expertise to implement critical features, enhancing the application's functionality.`,
      link: "",
      missingLinkReason: "Project Owned by Hitachi Vantara",
      technologiesUsed: [
        "React js",
        "Redux",
        "Javascript",
        "HTML",
        "CSS",
        "Kendo UI",
        "SASS",
      ],
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
      id: 10,
      title: "Diff Checker",
      description:
        "DiffChecker is a React application designed to compare differences between two blocks of text. Users can input an original text and a modified version, then choose between character-level or line-level view to analyze the variations. The application highlights added, removed, and common segments between the texts, providing a clear visualization of the changes made.",
      link: "https://diff-checker-umber.vercel.app/",
      technologiesUsed: [
        "React js",
        "Javascript",
        "Data Structures",
        "Algorithms",
      ],
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
      id: 6,
      title: "Quiz Application",
      description:
        "Developed a responsive quiz application that seamlessly retrieves questions, allows users to submit their answers, and includes an automated timer. Once the timer expires, the test is automatically submitted. After completion, users can conveniently view their results.",
      link: "https://quizapp-woad.vercel.app/",
      technologiesUsed: ["React js", "Javascript", "HTML", "CSS"],
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
    // {
    //   id: 4,
    //   title: "Expense Tracker",
    //   description:
    //     " A user-friendly expense tracking application allowing easy entry of expenses with dates, and providing visual representations of spending patterns within specified date ranges. Efficiently manage finances and gain valuable insights for better budgeting.",
    //   link: "https://expense-tracker-one-nu.vercel.app/",
    //   technologiesUsed: ["React js", "Javascript", "Material UI", "HTML"],
    // },
    // {
    //   id: 7,
    //   title: "Auto Complete Search Box",
    //   description:
    //     "I've crafted a versatile autocomplete box designed for seamless integration into various applications, including search engines and online shopping websites. In search engines, it intuitively predicts and displays relevant search queries as users type, optimizing search efficiency. On e-commerce platforms, it enhances the shopping experience by suggesting products, categories, and filters, streamlining the search process and boosting sales.",
    //   link: "https://auto-complete-eight.vercel.app/",
    //   technologiesUsed: ["React js", "Javascript", "HTML", "CSS"],
    // },

    // Add more projects as needed
  ];
  return (
    <div className="main">
      <div
        id="skills"
        className="skills section__card section__card--left_title"
      >
        <h3 className="sectionTitle sectionTitle--left_title">Skills</h3>
        <div class="skills-list">
          <span>React JS</span>
          <span>JavaScript</span>
          <span>Restful Web Services</span>
          <span>Data Structures</span>
          <span>Algorithms</span>
          <span>Redux</span>
          <span>HTML & CSS</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Hibernate</span>
          <span>Spring Security</span>
          <span>Redis</span>
          <span>Kafka</span>
          <span>Git</span>
        </div>
      </div>

      <div
        id="experience"
        className="experience section__card section__card--left_title"
      >
        <h3 className="sectionTitle sectionTitle--left_title">Experience</h3>
        <div className="experience__list">
          {experience.map((exp) => (
            <div key={exp.id} className="expereince">
              <h3>{`${exp.position}, ${exp.organization}, ${exp.location} `}</h3>
              <p>{`${exp.start} - ${exp.end}`}</p>
              <ul>
                {exp?.description_list?.map((description) => (
                  <li>{description}</li>
                ))}
              </ul>
              <div></div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="projects"
        className="projects section__card section__card--left_title"
      >
        <h3 className="sectionTitle sectionTitle--left_title">My Projects</h3>
        <div className="projects__list">
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
                  className={!project.link ? "disable-link" : null}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {!project.link ? project.missingLinkReason : "View Project"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="hobbies"
        className="hobbies section__card section__card--left_title"
      >
        <h3 className="sectionTitle sectionTitle--left_title">Hobbies</h3>
        <div className="hobbies__list">
          <div className="hobbies__icon-container">
            <img src={swimLogo} />
            <span>Swimming</span>
          </div>
          <div className="hobbies__icon-container">
            <img src={gymLogo} />
            <span>Working Out</span>
          </div>
          <div className="hobbies__icon-container">
            <img src={bookLogo} />
            <span>Reading books</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
