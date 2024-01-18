export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <h2>Contact Me</h2>
          <div className="footer-infos">
            <i class="bi bi-telephone-x"></i>
            <p>+55 (11) 9 4008-0990</p>
          </div>
          <div className="footer-infos">
            <i class="bi bi-envelope-at"></i>erikscarcela@gmail.com
          </div>
        </div>
        <div className="footer-wrapper">
          <h2>Quick Links</h2>
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Portifolio</a>
          <a href="">Skills</a>
        </div>
        <div className="footer-wrapper">
          <h2>Erik Scarcela Araujo</h2>
          <div className="footer-info">
            <i class="bi bi-github socials-btn"></i>
            <a href="https://github.com/erikscar" className="socials-btn">
              {" "}
              GitHub
            </a>
          </div>
          <div className="footer-info">
            <i class="bi bi-linkedin socials-btn"></i>
            <a
              href="https://www.linkedin.com/in/erik-scarcela/"
              className="socials-btn"
            >
              {" "}
              Linkedin{" "}
            </a>
          </div>
        </div>
      </footer>
      <p className="copy">&copy; Created by Erik Scarcela Araujo</p>
    </>
  )
}