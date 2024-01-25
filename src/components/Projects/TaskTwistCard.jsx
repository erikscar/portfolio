export default function TaskTwistCard() {
  return (
    <div className="project-card">
      <p className="project-title">TaskTwist</p>
      <img src="/projects-img/tasktwist.png" alt="" className="project-img" />

      <div>
        <p className="project-description">
          TaskTwist é um sistema intuitivo que capacita os usuários a visualizarem, registrarem, atualizarem e removerem checklists e tarefas com facilidade. Simplifique sua gestão de afazeres com a praticidade do TaskTwist.
        </p>

        <div className="project-badges">
          <img src="/badges/mongodb.png" alt="mongodb" className="p-badges" />
          <img src="/badges/node.png" alt="nodejs" className="p-badges" />
          <img src="/badges/js.png" alt="js" className="p-badges" />
          <img src="/badges/ejs.png" alt="ejs" className="p-badges" />
          <img src="/badges/express.png" alt="express" className="p-badges" />
          <img src="/badges/css.png" alt="css" className="p-badges" />
        </div>
        <div className="btn-group">
          <button className="common-btn">
            <a href="https://github.com/erikscar/TaskTwist" target="_blank" className="anchor-hover"><i class="bi bi-github"></i>GitHub</a>
          </button>
        </div>
      </div>
    </div>
  )
}