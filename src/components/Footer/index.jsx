import "./index.css"

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer-wrapper">
          <h2 className="footer-title">Contato</h2>
          <div className="footer-infos">
            <i class="bi bi-telephone-x"></i>+55 (11) 9 4008-0990
          </div>
          <div className="footer-infos">
            <i class="bi bi-envelope-at"></i>erikscarcela@gmail.com
          </div>
        </div>
        <div className="footer-wrapper">
          <h2 className="footer-title">Links</h2>
          <a href="#">Início</a>
          <a href="#aboutme">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#technologies">Tecnologias</a>
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
      <p className="copy is-grey">&copy; Criado por Erik Scarela Araujo</p>
    </>
  )
}