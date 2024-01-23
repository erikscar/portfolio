export default function TaskTwistCard() {
  return (
    <div className="project-card">
      <img src="/projects-img/tasktwist.png" alt="" className="project-img" />

      <div className="project-description">
        <p className="project-title">TaskTwist</p>
        <p>TaskTwist, a task registration system that will use CRUD operations making use of Node.JS/Express.JS and MongoDB for the Back-End and EJS with CSS for the Front-End.</p>

        <div className="project-badges">
          <img src="/badges/mongodb.png" alt="mongodb" className="p-badges" />
          <img src="/badges/node.png" alt="nodejs" className="p-badges" />
          <img src="/badges/js.png" alt="js" className="p-badges" />
          <img src="/badges/ejs.png" alt="ejs" className="p-badges" />
          <img src="/badges/express.png" alt="express" className="p-badges" />
          <img src="/badges/css.png" alt="css" className="p-badges" />
        </div>
        <div className="btn-group"><a href="https://github.com/erikscar/TaskTwist" target="_blank" className="common-btn">See in GitHub</a></div>
      </div>
    </div>
  )
}