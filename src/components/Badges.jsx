import Technology from "./Technology";

export default function Badges() {
  return (
    <div className="badges-container">
      <Technology imgPath="/react-badge.png" imgAlt="react-badge" techName="React.JS" />
      <Technology imgPath="/js-badge.png" imgAlt="js-badge" techName="Javascript" />
      <Technology imgPath="/ts-badge.png" imgAlt="ts-badge" techName="Typescript" />
      <Technology imgPath="/node-badge.png" imgAlt="node-badge" techName="Node.JS" />
      <Technology imgPath="/mongodb-badge.png" imgAlt="mongodb-badge" techName="MongoDB" />
      <Technology imgPath="/postgre-badge.png" imgAlt="postgre-badge" techName="PostgreSQL" />
      <Technology imgPath="/bootstrap-badge.png" imgAlt="bootstrap-badge" techName="Bootstrap" />
      <Technology imgPath="/sass-badge.png" imgAlt="sass-badge" techName="SASS" />
    </div>
  )
}