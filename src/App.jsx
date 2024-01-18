import "./App.css";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectCards from "./components/ProjectCards";
import Stacks from "./components/Stacks";

export default function App() {
  return (
    <>
      <Hero />

      <div className="teste">

        <Aboutme />

        <div className="projects-section">
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

          <ProjectCards />
          <ProjectCards />
        </div>

        <Stacks />
        <Footer />
      </div>
    </>
  );
}
