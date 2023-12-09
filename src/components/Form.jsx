import "./Form.css"
import { useState } from "react"


const url = " http://localhost:3000/pets"

const Form = () => {
  
  const [pets, setPets] = useState([])

  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [cpf, setCpf] = useState()
  const [adress, setAdress] = useState()
  const [neighborhood, setNeihborhood] = useState()
  const [city, setCity] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [namePet, setNamePet] = useState()
  const [race, setRace] = useState()
  const [description, setDescription] = useState()



  const handleSubmit = async (e) => {
    e.preventDefault()

    const pet = {
      name, lastName, email, cpf, adress, neighborhood, city, phoneNumber, namePet, race, description
    }

   await fetch(url, {
      method: "POST",
      headers:{ "Content-type": "application/json"},
      body: JSON.stringify(pet)
    })

    

  }


  return (
    <div className="areaRegister">
  
      <h1>Área de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="sideLeft">
          <label>
            Responsavél do pet:
            <input type="text" name="name" placeholder="Informe o nome" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Sobrenome:
            <input type="text" name="lastName" placeholder="informe o sobrenome" onChange={(e) => setLastName(e.target.value)}/>
          </label>
          <label >
            Email:
            <input type="email" name="email" placeholder="email@email.com" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label >
            CPF:
            <input type="text" name="cpf" placeholder="XXX.XXX.XXX-XX" onChange={(e) => setCpf(e.target.value)}/>
          </label>
          <label >
            Endereço:
            <input type="text" name="adress" placeholder="Informe o endereço" onChange={(e) => setAdress(e.target.value)}/>
          </label>
          <label >
            Bairro:
            <input type="text" name="neighborhood" placeholder="Informe o bairro" onChange={(e) => setNeihborhood(e.target.value)}/>
          </label>
        </div>
        <div className="sideRight">
          <label >
            Cidade:
            <input type="text" name="city" placeholder="Informe a cidade" onChange={(e) => setCity(e.target.value)}/>
          </label>
          <label >
            Celular:
            <input type="text" name="phoneNumber" placeholder="(XX)XXXXX-XXXX" onChange={(e) => setPhoneNumber(e.target.value)}/>
          </label>
          <label >
            Nome do pet:
            <input type="text" name="namePet" placeholder="Informe o nome do pet" onChange={(e) => setNamePet(e.target.value)}/>
          </label>
          <label >
            Raça:
            <input type="text" name="race" placeholder="Informe a raça do pet" onChange={(e) => setRace(e.target.value)}/>
          </label>
          <label >
            Observações:
            <textarea name="description" rows="1" placeholder="Informe algo se houver" onChange={(e) => setDescription(e.target.value)}></textarea>
          </label>
          <button>Salvar</button>
          </div>
      </form>
    </div>
  )
}

export default Form