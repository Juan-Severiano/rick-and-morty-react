export default () => {
    return (
        <footer class="footer d-flex justify-content-between flex-column">
      <div class="top container d-flex justify-content-center align-items-center text-white flex-column">
        <div class="info d-flex text-white align-items-center justify-content-center flex-column">
          <h4>The Rick and Morty Characters</h4>
          <p>Esse site foi feito com o uso de tecnologias como Express.js JavaScript e EJS, consumindo a API de rick
            and morty feita pelo <a href="https://github.com/afuh" target="_blank">Axel Fuhrmann</a></p>
          <div class="tecnologies">
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-express-original"></i>
          </div>
        </div>
        <div class="social-media d-flex">
          <a href="https://github.com/Juan-Severiano/rick-and-morty" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.instagram.com/_juan.sev_/" target="_blank"><i class="bi bi-instagram"></i></a>
        </div>
        <h4>Este projeto só foi concluido pela <a href="https://rickandmortyapi.com/" target="_blank">The Rick and Morty
            API</a></h4>
    
      </div>
      <div class="bottom d-flex justify-content-center align-items-center text-white">
        <p>&copy; Todos os direitos reservados à <a href="https://www.adultswim.com/" target="_blank">Adult Swin</a></p>
      </div>
    </footer>
    )
}