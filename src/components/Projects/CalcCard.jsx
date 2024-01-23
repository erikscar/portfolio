export default function SpaceXCloneCard() {
  return (
    <div className="project-card">
      <img src="/projects-img/calcjs.png" alt="" className="project-img" />

      <div className="project-description">
        <p className="project-title">Calc JS</p>
        <p>
          A web calculator project that allows users to perform basic mathematical operations such as addition, subtraction, multiplication and division. The calculator was developed exclusively with web technologies: HTML, CSS and JavaScript, without the need for external libraries or frameworks.
        </p>

        <div className="project-badges">
          <img src="/badges/html.png" alt="html" className="p-badges" />
          <img src="/badges/css.png" alt="css" className="p-badges" />
          <img src="/badges/js.png" alt="js" className="p-badges" />
        </div>
        <div className="btn-group">
          <a
            href="https://github.com/erikscar/calculator-js"
            target="_blank"
            className="common-btn"
          >
            See in GitHub
          </a>
          <a
            href="https://calculator-js-rose.vercel.app/"
            target="_blank"
            className="common-btn"
          >
            View Site
          </a>
        </div>
      </div>
    </div>
  );
}
