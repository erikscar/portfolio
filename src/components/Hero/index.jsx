import "./index.css"
import Header from "../Header";

export default function Hero() {
  return (
    <div className="hero">

      <img src="/hero.jpg" alt="" className="hero-background" />
      <Header />
      <div className="hero-foreground">
        <div className="hero-foreground-wrapper">
          <div>
            <h1 className="main-name">ERIK</h1>
            <h1 className="main-name">SCARCELA</h1>
            <h2 className="role-name">DESENVOLVEDOR FULLSTACK</h2>
          </div>
          <div>
            <img src="/code.png" alt="code-png" className="code-img" />
          </div>
        </div>

        <div className="icons-wrapper">
          <button className="common-btn is-large">
            <a href="https://www.linkedin.com/in/erik-scarcela/" target="_blank"><i class="bi bi-linkedin"></i>Linkedin</a>
          </button>
          <button className="common-btn is-large">
            <a href="https://github.com/erikscar" target="_blank"><i class="bi bi-github"></i>GitHub</a>
          </button>
        </div>
      </div>
    </div>
  )
}