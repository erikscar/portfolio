import { useState } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stacks from "./components/Stacks";
import TaskTwistCard from "./components/Projects/TaskTwistCard"
import WeatherCard from "./components/Projects/WeatherCard";
import SpaceXCloneCard from "./components/Projects/SpaceXCloneCard";

export default function App() {
  const [techFilter, setTechFilter] = useState('all')
  console.log(techFilter)
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
            <button className="search-tech-btn checked" onClick={() => setTechFilter("all")}>All</button>
            <button className="search-tech-btn">React.JS</button>
            <button className="search-tech-btn">Javascript</button>
            <button className="search-tech-btn">Typescript</button>
            <button className="search-tech-btn">Node.JS</button>
            <button className="search-tech-btn">MongoDB</button>
            <button className="search-tech-btn">PostgreSQL</button>
            <button className="search-tech-btn">Bootstrap</button>
            <button className="search-tech-btn">SASS</button>
          </nav>
          {techFilter === "all" &&
          <div>
            <TaskTwistCard/>
            <WeatherCard/>
            <SpaceXCloneCard/>
          </div>
          
             }
          {/* <ProjectCards /> */}
        </div>

        <Stacks />
        <Footer />
      </div>
    </>
  );
}
