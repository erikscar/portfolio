export default function Technologies ({ imgPath, imgAlt, techName}) {
    return (
        <div className="technologies">
        <img src={imgPath} alt={imgAlt} className = "badge" />
        <p>{techName}</p>
      </div>
    )
}