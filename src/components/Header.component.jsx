function Header() {
  return (
    <div className="header">
      <div className="header__flex">
        <div className="header__flex--left">
          <h1 className="name">Vinay Suyal</h1>
          <h2 className="title">Software Developer</h2>
          <span className="subtitle">
            A problem solver with a receptive mind, demonstrating learning agility and an ease of collaboration. Known for approachability and being conducive to teamwork, excelling in finding innovative solutions to challenges. Brings forth a strong track record of delivering impactful solutions, proficiency in creating responsive and user-friendly applications, and adept at tackling complex challenges. Passionate about crafting elegant and efficient software solutions to address a wide range of problems with innovation and finesse.
          </span>
        </div>
        <div className="header__flex--right nav">
          <ul className="nav__list">
            <li className="nav__list_item--header">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav__list_item--header">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav__list_item--header">
              <a href="#projects">My Projects</a>
            </li>

            <li className="nav__list_item--header">
              <a href="#hobbies">Hobbies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
