function Header() {
  return (
    <div className="header">
      <div className="header__flex">
        <div className="header__flex--left">
          <h1 className="name">Vinay Suyal</h1>
          <h2 className="title">Software Developer</h2>
          <span className="subtitle">
            Experienced software developer with a strong problem-solving mindset
            and a track record of delivering impactful solutions. Proficient in
            creating responsive and user-friendly applications while also having
            the ability to tackle complex backend challenges. Passionate about
            crafting elegant and efficient software solutions to address a wide
            range of problems.
          </span>
        </div>
        <div className="header__flex--right nav">
          <ul className="nav__list">
            <li className="nav__list_item--header">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav__list_item--header">
              <a href="#skills">Skills</a>
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
