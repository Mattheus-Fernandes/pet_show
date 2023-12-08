import "./Form.css"

const Form = () => {
  return (
    <div className="areaRegister">
        <h1>Área de Cadastro</h1>
      <form>
        <div className="sideLeft">
          <label>
            Responsavél do pet:
            <input type="text" name="name" placeholder="Informe o nome"/>
          </label>
          <label>
            Sobrenome:
            <input type="text" name="lastName" placeholder="informe o sobrenome"/>
          </label>
          <label >
            Email:
            <input type="email" name="email" placeholder="email@email.com"/>
          </label>
          <label >
            CPF:
            <input type="text" name="cpf" placeholder="XXX.XXX.XXX-XX"/>
          </label>
          <label >
            Endereço:
            <input type="text" name="adress" placeholder="Informe o endereço"/>
          </label>
          <label >
            Bairro:
            <input type="text" name="neighborhood" placeholder="Informe o bairro"/>
          </label>
        </div>
        <div className="sideRight">
          <label >
            Cidade:
            <input type="text" name="city" placeholder="Informe a cidade" />
          </label>
          <label >
            Celular:
            <input type="text" name="phoneNumber" placeholder="(XX)XXXXX-XXXX"/>
          </label>
          <label >
            Nome do pet:
            <input type="text" name="namePet" placeholder="Informe o nome do pet"/>
          </label>
          <label >
            Raça:
            <input type="text" name="race" placeholder="Informe a raça do pet"/>
          </label>
          <label >
            Observações:
            <textarea name="description" id="" rows="1" placeholder="Informe algo se houver"></textarea>
          </label>
          <button>Salvar</button>
          </div>
      </form>
    </div>
  )
}

export default Form