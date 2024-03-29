import "./index.css"
import { useState } from "react";
import TaskTwistCard from "../Projects/TaskTwistCard";
import WeatherCard from "../Projects/WeatherCard";
import SpaceXCloneCard from "../Projects/SpaceXCloneCard";
import CalcCard from "../Projects/CalcCard";

export default function ProjectsNav() {
  const [activeTech, setActiveTech] = useState("all");

  const handleBtnClick = (tech) => {
    setActiveTech(tech === activeTech ? "all" : tech);
  };

  const getBtnClass = (tech) => {
    return `common-btn${activeTech === tech ? " checked" : ""}`;
  };

  return (
    <section id="projects">
      <h1 className="section-title">
        PROJETOS <i class="bi bi-code-slash"></i>
      </h1>
      <nav className="projects-nav-bar">
        <button className={getBtnClass("all")} onClick={() => handleBtnClick("all")}>Todos</button>
        <button className={getBtnClass("react")} onClick={() => handleBtnClick("react")}>React.JS</button>
        <button className={getBtnClass("js")} onClick={() => handleBtnClick("js")}>Javascript</button>
        <button className={getBtnClass("ts")} onClick={() => handleBtnClick("ts")}>Typescript</button>
        <button className={getBtnClass("node")} onClick={() => handleBtnClick("node")}>Node.JS</button>
        <button className={getBtnClass("mongo")} onClick={() => handleBtnClick("mongo")}>MongoDB</button>
        <button className={getBtnClass("postgre")} onClick={() => handleBtnClick("postgre")}>PostgreSQL</button>
        <button className={getBtnClass("bootstrap")} onClick={() => handleBtnClick("bootstrap")}>Bootstrap</button>
        <button className={getBtnClass("sass")} onClick={() => handleBtnClick("sass")}>SASS</button>
      </nav>
      <div className="projects-container">
        {activeTech === "all" && (
          <>
            <TaskTwistCard />
            <WeatherCard />
            <SpaceXCloneCard />
            <CalcCard />
          </>
        )}

        {activeTech === "react" && <></>}

        {activeTech === "js" && (
          <>
            <WeatherCard />
            <SpaceXCloneCard />
            <CalcCard />
            <TaskTwistCard />
          </>
        )}

        {activeTech === "ts" && <></>}

        {activeTech === "node" && <TaskTwistCard />}

        {activeTech === "mongo" && <TaskTwistCard />}

        {activeTech === "postgre" && <></>}

        {activeTech === "bootstrap" && <SpaceXCloneCard />}

        {activeTech === "sass" && <SpaceXCloneCard />}
      </div>

    </section>

  );
}
