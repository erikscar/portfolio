export default function SpaceXCloneCard() {
  return (
    <div className="project-card">
      <img src="/projects-img/spacex-clone.png" alt="" className="project-img" />

      <div className="project-description">
        <p className="project-title">SpaceX Clone</p>
        <p>
          This project is a web development initiative that aims to create a
          clone of the official SpaceX website using modern technologies such
          as Bootstrap and Sass. SpaceX is known for its innovative interface
          and engaging content, and this project aims to replicate these
          aspects in an educational and practical way.
        </p>

        <div className="project-badges">
          <img src="/badges/html.png" alt="html" className="p-badges" />
          <img src="/badges/sass.png" alt="css" className="p-badges" />
          <img src="/badges/js.png" alt="js" className="p-badges" />
          <img src="/badges/bootstrap.png" alt="api" className="p-badges" />
        </div>
        <div className="btn-group">
          <a
            href="https://github.com/erikscar/spaceX-page-clone"
            target="_blank"
            className="common-btn"
          >
            See in GitHub
          </a>
          <a
            href="https://vercel.com/erikscars-projects/spacex-page-clone"
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
