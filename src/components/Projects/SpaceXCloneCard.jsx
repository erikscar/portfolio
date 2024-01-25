export default function SpaceXCloneCard() {
  return (
    <div className="project-card">
      <p className="project-title">SpaceX Clone</p>
      <img src="/projects-img/spacex-clone.png" alt="" className="project-img" />

      <div>
        <p className="project-description">
          Página web que reproduz o design e layout distintivo do site da SpaceX, com a replicação das estilizações e elementos visuais.
        </p>

        <div className="project-badges">
          <img src="/badges/html.png" alt="html" className="p-badges" />
          <img src="/badges/sass.png" alt="css" className="p-badges" />
          <img src="/badges/js.png" alt="js" className="p-badges" />
          <img src="/badges/bootstrap.png" alt="api" className="p-badges" />
        </div>
        <div className="btn-group">
          <button className="common-btn">
            <a
              href="https://github.com/erikscar/spaceX-page-clone"
              target="_blank"
              className="anchor-hover"
            >
              <i class="bi bi-github"></i>GitHub
            </a>
          </button>
          <button className="common-btn">
            <a
              href="https://vercel.com/erikscars-projects/spacex-page-clone"
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
