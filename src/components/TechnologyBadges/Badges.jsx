import "./index.css"
import Technology from "./Technology";

export default function Badges() {
  return (
    <div className="badges-container">
      <Technology imgPath="/badges/react.png" imgAlt="react-badge" techName="React.JS" />
      <Technology imgPath="/badges/js.png" imgAlt="js-badge" techName="Javascript" />
      <Technology imgPath="/badges/ts.png" imgAlt="ts-badge" techName="Typescript" />
      <Technology imgPath="/badges/node.png" imgAlt="node-badge" techName="Node.JS" />
      <Technology imgPath="/badges/mongodb.png" imgAlt="mongodb-badge" techName="MongoDB" />
      <Technology imgPath="/badges/postgre.png" imgAlt="postgre-badge" techName="PostgreSQL" />
      <Technology imgPath="/badges/bootstrap.png" imgAlt="bootstrap-badge" techName="Bootstrap" />
      <Technology imgPath="/badges/sass.png" imgAlt="sass-badge" techName="SASS" />
    </div>
  )
}