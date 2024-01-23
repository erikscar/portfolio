import "./index.css"

export default function Aboutme() {
  return (

    <section id="aboutme">
      <h1 className="section-title right">
        <i class="bi bi-person"></i>ABOUT ME
      </h1>

      <div className="aboutme-wrapper">

        <img src="/profile.png" alt="profile-img" className="profile-img" />

        <div className="aboutme-description-wrapper">
          <h3 className="aboutme-title">Who am I?</h3>
          <h2 className="aboutme-subtitle">
            I'm Erik Scarcela Araujo, a Full Stack Developer
          </h2>
          <p className="aboutme-description">
            Passionate about the fusion of design and functionality, I actively
            seek challenges to refine my skills and contribute to innovative
            digital solutions. My journey started with a deep dive into
            programming languages, and I'm eager to apply this knowledge to
            real-world projects. In my portfolio, you'll discover not only
            technical prowess but also a commitment to crafting meaningful user
            experiences. Open to new collaborations, learnings, and
            opportunities that expand my professional horizons.
          </p>

          <div className="personal-info-container">
            <div className="personal-info">
              <p>
                Name: <span className="is-grey">Erik Scarcela</span>
              </p>
              <p>
                Age: <span className="is-grey">20</span>
              </p>
            </div>

            <div className="personal-info">
              <p>
                From: <span className="is-grey">Santo André, SP</span>
              </p>
              <p>
                Email: <span className="is-grey">erikscarcela@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="btn-align"><a href="/cv/Erik Scarcela Araujo - CV.docx" download="Erik Scarcela - CV" className="common-btn">Download CV</a></div>
        </div>
      </div>
    </section>
  )
}