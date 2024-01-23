import "./index.css"

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer-wrapper">
          <h2 className="footer-title">Contact Me</h2>
          <div className="footer-infos">
            <i class="bi bi-telephone-x"></i>+55 (11) 9 4008-0990
          </div>
          <div className="footer-infos">
            <i class="bi bi-envelope-at"></i>erikscarcela@gmail.com
          </div>
        </div>
        <div className="footer-wrapper">
          <h2 className="footer-title">Quick Links</h2>
          <a href="#">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
        </div>
        <div className="footer-wrapper">
          <h2 className="footer-title">Erik Scarcela Araujo</h2>

          <div className="footer-info">
            <i class="bi bi-github socials-btn"></i>
            <a href="https://github.com/erikscar">GitHub</a>
          </div>

          <div className="footer-info">
            <i class="bi bi-linkedin socials-btn"></i>
            <a href="https://www.linkedin.com/in/erik-scarcela/">Linkedin</a>
          </div>
        </div>
      </footer>
      <p className="copy is-grey">&copy; Created by Erik Scarela Araujo</p>
    </>
  )
}