export default function WeatherCard() {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <img src="/weathercard.png" alt="" className="project-img" />

        <div className="project-description">
          <p className="project-title">Weather Card</p>
          <p>
            Developed using modern web technologies, the site displays an
            intuitive card that shows crucial weather data based on the city
            entered by the user. The data is fetched from a weather API,
            providing accurate and up-to-date information to enhance the user
            experience.
          </p>

          <div className="project-badges">
            <img src="/html-badge.png" alt="html" className="p-badges" />
            <img src="/css-badge.png" alt="css" className="p-badges" />
            <img src="/js-badge.png" alt="js" className="p-badges" />
            <img src="/api-badge.png" alt="api" className="p-badges" />

          </div>
          <a href="https://github.com/erikscar/weather-card-app" target="_blank" className="github-btn">
            See in GitHub
          </a>
          <a href="https://weather-card-app-silk.vercel.app/" target="_blank" className="github-btn">
            View Site
          </a>
        </div>
      </div>
    </div>
  );
}
