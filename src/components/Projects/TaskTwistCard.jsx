export default function TaskTwistCard() {
    return (
      <div className="project-card-container">
  
        <div className="project-card">
          <img src="/tasktwist.png" alt="" className="project-img" />
  
          <div className="project-description">
            <p className="project-title">TaskTwist</p>
            <p>TaskTwist, a task registration system that will use CRUD operations making use of Node.JS/Express.JS and MongoDB for the Back-End and EJS with CSS for the Front-End</p>
  
            <div className="project-badges">
              <img src="/mongodb-badge.png"alt="mongodb" className="p-badges" />
              <img src="/node-badge.png" alt="nodejs" className="p-badges" />
              <img src="/js-badge.png" alt="js" className="p-badges" />
              <img src="/ejs-badge.png" alt="ejs" className="p-badges" />
              <img src="/express-badge.png" alt="express" className="p-badges" />
              <img src="/css-badge.png" alt="css" className="p-badges" />
            </div>
            <a href="https://github.com/erikscar/TaskTwist" target="_blank" className="github-btn">See in GitHub</a>
          </div>
        </div>
      </div>
    )
  }