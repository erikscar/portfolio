import "./index.css"

export default function Technology({ imgPath, imgAlt, techName }) {
  return (
    <div className="technologies" >
      <img src={imgPath} alt={imgAlt} className="badge" />
      <p>{techName}</p>
    </div>
  )
}