import "./Navbar.css"



const Navbar = () => {

  const handleClickRegister = () => {
    const areaForm = document.querySelector(".areaRegister")

    if(areaForm){
      areaForm.scrollIntoView({behavior: "smooth"})
    }
  }

  const handleClickSaved = () => {
    const content = document.querySelector(".content")

    if(content){
      content.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <div>
      <header className="header">
        <span className="titlePage">PetShow</span>
        <nav className="navBar">
          <ul>
            <li onClick={handleClickRegister}>Cadastrar Pet</li>
            <li onClick={handleClickSaved}>Pets Cadastrados</li>
          </ul >
        </nav>
      </header>
    </div>
  )
}

export default Navbar