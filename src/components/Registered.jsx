import ShowPets from './ShowPets'
import { useState, useEffect } from 'react';
import "./Registered.css"

const url = " http://localhost:3000/pets"

const Registerd = () => {

  const [pets, setPets] = useState([])

  useEffect(() => {

    async function fetchAPI(){
      const res = await fetch(url)
      const data = await res.json()

      setPets(data)
    }

    fetchAPI()
  }, [])

  return (
    <div className='content'>
      <main>
        <h1>Pets Cadastrados</h1>
        <div className='areaCards'>
        {pets.map((pet) => (
          <ShowPets 
            id={pet.id}
            name={pet.name}
            lastName={pet.lastName}
            email={pet.email}
            cpf={pet.cpf}
            adress={pet.adress}
            neighborhood={pet.neighborhood}
            city={pet.city}
            phoneNumber={pet.phoneNumber}
            namePet={pet.namePet}
            race={pet.race}
            description={pet.description}
          />
        ))}
        </div>
        </main>
    </div>
  )
}

export default Registerd