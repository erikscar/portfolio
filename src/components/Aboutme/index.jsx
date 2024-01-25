import "./index.css"

export default function Aboutme() {
  return (

    <section id="aboutme">
      <h1 className="section-title right">
        <i class="bi bi-person"></i>SOBRE MIM
      </h1>

      <div className="aboutme-wrapper">

        <img src="/profile.png" alt="profile-img" className="profile-img" />

        <div className="aboutme-description-wrapper">
          <h3 className="aboutme-title">Quem sou Eu?</h3>
          <h2 className="aboutme-subtitle">
            Erik Scarcela Araujo, Desenvolvedor Full Stack
          </h2>
          <div className="aboutme-description">
            <p>👨‍💻 Desenvolvedor de Interfaces/Aplicações/API</p>
            <p>🎓 Cursando Análise e Desenvolvimento de Sistemas</p>
            <p>💡 Interesse em Desenvolvimento Full Stack</p>
            <p>🔎 Buscando Oportunidades para Atuar como Desenvolvedor</p>
          </div>

          <div className="personal-info-container">
            <div className="personal-info">
              <p>
                Nome: <span className="is-grey">Erik Scarcela Araujo</span>
              </p>
              <p>
                Idade: <span className="is-grey">20</span>
              </p>
            </div>

            <div className="personal-info">
              <p>
                Local: <span className="is-grey">Santo André, SP</span>
              </p>
              <p>
                Email: <span className="is-grey">erikscarcela@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="btn-align">
            <button className="common-btn">
              <a href="/cv/Erik Scarcela Araujo - CV.docx" download="Erik Scarcela - CV" className="anchor-hover">Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}