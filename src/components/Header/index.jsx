import "./index.css"

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <a href="#">HOME</a>
        <a href="#aboutme">ABOUT ME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#technologies">TECHNOLOGIES</a>
        <a href="#contact">CONTACT </a>
        <div>
          <a href="https://www.linkedin.com/in/erik-scarcela/" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/erikscar" target="_blank"><i class="bi bi-github"></i></a>
        </div>
      </nav>
    </header>
  )
}