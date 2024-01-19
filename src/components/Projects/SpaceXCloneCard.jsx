export default function SpaceXCloneCard() {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <img src="/spacex-clone.png" alt="" className="project-img" />

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
            <img src="/html-badge.png" alt="html" className="p-badges" />
            <img src="/sass-badge.png" alt="css" className="p-badges" />
            <img src="/js-badge.png" alt="js" className="p-badges" />
            <img src="/bootstrap-badge.png" alt="api" className="p-badges" />
          </div>
          <a
            href="https://github.com/erikscar/spaceX-page-clone"
            target="_blank"
            className="github-btn"
          >
            See in GitHub
          </a>
          <a
            href="https://vercel.com/erikscars-projects/spacex-page-clone"
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
