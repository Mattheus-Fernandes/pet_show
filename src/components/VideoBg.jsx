import "./VideoBg.css"

const VideoBg = () => {
  return (
    <div className="videoBg">
      <div>
        <div className="overlay"></div>
        <video src="bg_video.mp4" autoPlay loop muted></video>
        <div className="textContent">
          <h1 className="phrase">Mergulhe em nossa seleção cuidadosamente selecionada de produtos para animais de estimação. Das marcas mais confiáveis ​​às opções exclusivas, aqui você encontra tudo o que precisa para mimar seu companheiro peludo.</h1>
          <p className="message">Cada produto da nossa loja foi selecionado pensando no bem-estar do seu animal de estimação. Temos o compromisso de oferecer apenas produtos da mais alta qualidade para garantir a saúde e a felicidade de seus amigos peludos.</p>
          <h2 className="ballonText">Cadastre o seu pet, e o traga para nós cuidarmos</h2>
        </div>
      </div>
    </div>
  )
}

export default VideoBg