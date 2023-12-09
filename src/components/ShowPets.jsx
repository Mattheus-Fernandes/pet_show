import "./ShowPets.css"

const ShowPets = ({id, name, lastName, email, cpf, adress, neighborhood, city, phoneNumber, namePet, race, description}) => {

  return (
      <div className="areaPetsSaved">
        <main>
          <nav>
            <ul key={id}>
              <li>
                <p className="info">Nome do responsável:</p>
                <p className="data">{name}</p>
              </li>
              <li >
                <p className="info">Sobrenome:</p>
                <p className="data">{lastName}</p>
              </li>
              <li >
                <p className="info">E-mail:</p>
                <p className="data">{email}</p>
              </li>
              <li >
                <p className="info">CPF:</p>
                <p className="data">{cpf}</p>
              </li>
              <li >
                <p className="info">Endereço:</p>
                <p className="data">{adress}</p>
              </li>
              <li >
                <p className="info">Bairro:</p>
                <p className="data">{neighborhood}</p>
              </li>
              <li >
                <p className="info">Cidade:</p>
                <p className="data">{city}</p>  
              </li>
              <li >
                <p className="info">Celular:</p>
                <p className="data">{phoneNumber}</p>
              </li>
              <li >
                <p className="info">Nome do pet:</p>
                <p className="data">{namePet}</p>
              </li>
              <li >
                <p className="info">Raça:</p>
                <p className="data">{race}</p>
              </li>
              <li >
                <p className="info">Observações:</p>
                <p className="data">{description}</p>
              </li>
            </ul>
          </nav>
        </main>
      </div>
  )
}

export default ShowPets