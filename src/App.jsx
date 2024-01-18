import "./App.css";
import Badges from "./components/Badges";
import Header from "./components/Header";
import ProjectCards from "./components/ProjectCards";

export default function App() {
  return (
    <div className="main-container">
        <div className="hero"></div>
        <Header />
        <div className="main-wrapper">
          <div>
            <h1 className="main-name">ERIK</h1>
            <h1 className="main-name">SCARCELA</h1>
            <h2 className="role-name">FULL STACK DEVELOPER</h2>
          </div>
          <div>
            <img src="/code.png" alt="code-png" className="code-img" />
          </div>
        </div>
        <div className="description-wrapper">
          <p className="hey">HEY,</p>
          <p className="description">
            I'm a Full-stack developer dedicated to creating remarkable and
            engaging digital solutions. My portfolio reflects my passion for
            transforming creative concepts into functional reality, highlighting
            my ability to work on all layers of a project.
          </p>
        </div>

      <h1 className="section-title right">
        <i class="bi bi-person"></i>ABOUT ME
      </h1>

      <div className="profile-img-wrapper">
        <img src="/profile.png" alt="profile-img" className="profile-img" />

        <div className="aboutme-description-wrapper">
          <h3 className="aboutme-title">Who am I?</h3>
          <h2 className="aboutme-subtitle">
            I'm Erik Scarcela Araujo, a Full Stack Developer
          </h2>
          <p className="aboutme-description">
            Passionate about the fusion of design and functionality, I actively
            seek challenges to refine my skills and contribute to innovative
            digital solutions. My journey started with a deep dive into
            programming languages, and I'm eager to apply this knowledge to
            real-world projects. In my portfolio, you'll discover not only
            technical prowess but also a commitment to crafting meaningful user
            experiences. Open to new collaborations, learnings, and
            opportunities that expand my professional horizons.{" "}
          </p>

          <div className="personal-info-container">
            <div className="personal-info">
              <p>
                Name: <span className="is-grey">Erik Scarcela</span>
              </p>
              <p>
                Age: <span className="is-grey">20</span>
              </p>
            </div>

            <div className="personal-info">
              <p>
                From: <span className="is-grey">Santo André, SP</span>
              </p>
              <p>
                Email: <span className="is-grey">erikscarcela@gmail.com</span>
              </p>
            </div>
          </div>

          <button className="cv-button">
            <a href="" download="Erik Scarcela - CV">
              Download CV
            </a>
          </button>
        </div>
      </div>

      <h1 className="section-title">
        PROJECTS <i class="bi bi-code-slash"></i>
      </h1>

      <nav className="portifolio-nav-bar">
        <button className="search-tech-btn">All</button>
        <button className="search-tech-btn">React.JS</button>
        <button className="search-tech-btn">Javascript</button>
        <button className="search-tech-btn">Typescript</button>
        <button className="search-tech-btn">Node.JS</button>
        <button className="search-tech-btn">MongoDB</button>
        <button className="search-tech-btn">PostgreSQL</button>
        <button className="search-tech-btn">Bootstrap</button>
        <button className="search-tech-btn">SASS</button>
      </nav>

        <ProjectCards/>
      <h1 className="section-title right">
        <i class="bi bi-memory"></i>TECHNOLOGIES
      </h1>
      <Badges />

      <footer>
        <div className="footer-wrapper">
          <h2>Contact Me</h2>
          <div className="footer-infos">
            <i class="bi bi-telephone-x"></i>
            <p>+55 (11) 9 4008-0990</p>
          </div>
          <div className="footer-infos">
            <i class="bi bi-envelope-at"></i>erikscarcela@gmail.com
          </div>
        </div>

        <div className="footer-wrapper">
          <h2>Quick Links</h2>
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Portifolio</a>
          <a href="">Skills</a>
        </div>

        <div className="footer-wrapper">
          <h2>Erik Scarcela Araujo</h2>

          <div className="footer-info">
            <i class="bi bi-github socials-btn"></i>
            <a href="https://github.com/erikscar" className="socials-btn">
              {" "}
              GitHub
            </a>
          </div>

          <div className="footer-info">
            <i class="bi bi-linkedin socials-btn"></i>
            <a
              href="https://www.linkedin.com/in/erik-scarcela/"
              className="socials-btn"
            >
              {" "}
              Linkedin{" "}
            </a>
          </div>
        </div>
      </footer>
      <p className="copy">&copy; Created by Erik Scarcela Araujo</p>
    </div>
  );
}
