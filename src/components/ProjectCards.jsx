export default function ProjectCards () {
    return (
        <div className="project-card">
        <img src="/tasktwist.png" alt="" className="project-img" />
        <div className="project-description">
        <p className="project-title">TaskTwist</p>
          <p>
            TaskTwist, a task registration system that will use CRUD operations
            making use of Node.JS/Express.JS and MongoDB for the Back-End and EJS
            with CSS for the Front-End
          </p>
          <div className="project-badges">
              <img src="/mongodb-badge.png" alt="" className="p-badges" />
              <img src="/node-badge.png" alt="" className="p-badges" />
              <img src="/js-badge.png" alt="" className="p-badges" />
              <img src="/ejs-badge.png" alt="" className="p-badges" />
              <img src="/express-badge.png" alt="" className="p-badges" />
          </div>
          <button className="github-btn">
          <a href="">See in GitHub</a>
            </button>
        </div>
      </div>
    )
}