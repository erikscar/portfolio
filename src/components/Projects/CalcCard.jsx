export default function SpaceXCloneCard() {
  return (
    <div className="project-card">
      <p className="project-title">Calc JS</p>
      <img src="/projects-img/calcjs.png" alt="" className="project-img" />

      <div>
        <p className="project-description">
          Uma calculadora web que permite que os usuários realizem uma variedade de operações matemáticas de forma simples e intuitiva.
        </p>

        <div className="project-badges">
          <img src="/badges/html.png" alt="html" className="p-badges" />
          <img src="/badges/css.png" alt="css" className="p-badges" />
          <img src="/badges/js.png" alt="js" className="p-badges" />
        </div>
        <div className="btn-group">
          <button className="common-btn">
            <a
              href="https://github.com/erikscar/calculator-js"
              target="_blank"
              className="anchor-hover"
            >
              <i class="bi bi-github"></i>GitHub
            </a>
          </button>
          <button className="common-btn">
            <a
              href="https://calculator-js-rose.vercel.app/"
              target="_blank"
              className="anchor-hover"
            >
              <i class="bi bi-box-arrow-up-right"> Site</i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
