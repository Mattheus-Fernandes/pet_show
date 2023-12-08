import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
      <header className="header">
        <span className="titlePage">PetShow</span>
        <nav className="navBar">
          <ul>
            <li>Pets Cadastrados</li>
            <li>Cadastrar Pet</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar