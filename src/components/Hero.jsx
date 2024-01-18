import Header from "./Header";

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
      </div>
    </div>
  )
}