export default function SpaceXCloneCard() {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <img src="/calcjs.png" alt="" className="project-img" />

        <div className="project-description">
          <p className="project-title">Calc JS</p>
          <p>
            A web calculator project that allows users to perform basic mathematical operations such as addition, subtraction, multiplication and division. The calculator was developed exclusively with web technologies: HTML, CSS and JavaScript, without the need for external libraries or frameworks.
          </p>

          <div className="project-badges">
            <img src="/html-badge.png" alt="html" className="p-badges" />
            <img src="/css-badge.png" alt="css" className="p-badges" />
            <img src="/js-badge.png" alt="js" className="p-badges" />
          </div>
          <a
            href="https://github.com/erikscar/calculator-js"
            target="_blank"
            className="github-btn"
          >
            See in GitHub
          </a>
          <a
            href="https://calculator-js-rose.vercel.app/"
            target="_blank"
            className="github-btn"
          >
            View Site
          </a>
        </div>
      </div>
    </div>
  );
}
