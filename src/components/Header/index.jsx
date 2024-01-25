import "./index.css"

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <a href="#">INÍCIO</a>
        <a href="#aboutme">SOBRE</a>
        <a href="#projects">PROJETOS</a>
        <a href="#technologies">HABILIDADES</a>
        <a href="#contact">CONTATO</a>
      </nav>
    </header>
  )
}