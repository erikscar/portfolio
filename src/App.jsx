import "./App.css"
import Badges from "./components/Badges"
import Header from "./components/Header"

export default function App() {
  return (
    <div className="main-container">
      <Header />

      <p>Hello Everyone!</p>
      <h1>I'm Erik Scarcela</h1>
      <p className="">Full-stack developer dedicated to creating remarkable and engaging digital solutions. My portfolio reflects my passion for transforming creative concepts into functional reality, highlighting my ability to work on all layers of a project.</p>


      <h1 className="section-title">PORTIFOLIO</h1>

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

      <h1 className="section-title">TECHNOLOGIES</h1>
      <Badges />

      <footer>
        <div className="footer-wrapper">
          <h5>Contact Me</h5>
          <div className="footer-infos">
            <i class="bi bi-telephone-x"></i>
            <p >+55 (11) 9 4008-0990</p>

          </div>
          <p className="footer-infos"><i class="bi bi-envelope-at"></i>erikscarcela@gmail.com</p>
        </div>

        <div className="footer-wrapper">
          <h5>Quick Links</h5>
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Portifolio</a>
          <a href="">Skills</a>
        </div>

        <div className="footer-wrapper">
          <h2>Erik Scarcela Araujo</h2>
          <div className="footer-info">
            <i class="bi bi-github"></i>
            <a href="https://github.com/erikscar"> GitHub</a>
          </div>
          <a href="https://www.linkedin.com/in/erik-scarcela/"><i class="bi bi-linkedin"></i> LinkedIn  </a>
        </div>
      </footer>
      <p className="copy">&copy; Created by Erik Scarcela Araujo</p>

    </div>

  )
}