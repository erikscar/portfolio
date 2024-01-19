import "./App.css";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsNav from "./components/ProjectsNav";
import Stacks from "./components/Stacks";


export default function App() {


  return (
    <>
      <Hero />
      <div className="main-container">
        <Aboutme />
        <ProjectsNav />
        <Stacks />
        <Footer />
      </div >
    </>
  );
}
