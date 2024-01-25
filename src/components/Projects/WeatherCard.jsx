export default function WeatherCard() {
  return (
    <div className="project-card">
      <p className="project-title">Weather Card</p>
      <img src="/projects-img/weathercard.png" alt="" className="project-img" />

      <div>
        <p className="project-description">
          Com o WeatherCard, você pode visualizar dados meteorológicos essenciais ao inserir o nome da cidade desejada. Acesse informações precisas provenientes do consumo da Open Weather API de maneira simples e eficiente.
        </p>

        <div className="project-badges">
          <img src="/badges/html.png" alt="html" className="p-badges" />
          <img src="/badges/css.png" alt="css" className="p-badges" />
          <img src="/badges/js.png" alt="js" className="p-badges" />
          <img src="/badges/api.png" alt="api" className="p-badges" />

        </div>
        <div className="btn-group">
          <button className="common-btn">
            <a href="https://github.com/erikscar/weather-card-app" target="_blank" className="anchor-hover">
              <i class="bi bi-github"></i>GitHub
            </a>
          </button>
          <button className="common-btn">
            <a href="https://weather-card-app-silk.vercel.app/" target="_blank" className="anchor-hover">
              <i class="bi bi-box-arrow-up-right"> Site</i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
