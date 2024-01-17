import Technologies from "./Technologies";

export default function Badges () {
    return (
        <div className="badges-container">
        <Technologies imgPath="/react-badge.png" imgAlt="react-badge" techName="React.JS"/>
        <Technologies imgPath="/js-badge.png" imgAlt="js-badge" techName="Javascript"/>
        <Technologies imgPath="/ts-badge.png" imgAlt="ts-badge" techName="Typescript"/>
        <Technologies imgPath="/node-badge.png" imgAlt="node-badge" techName="Node.JS"/>
        <Technologies imgPath="/mongodb-badge.png" imgAlt="mongodb-badge" techName="MongoDB"/>
        <Technologies imgPath="/postgre-badge.png" imgAlt="postgre-badge" techName="PostgreSQL"/>
        <Technologies imgPath="/bootstrap-badge.png" imgAlt="bootstrap-badge" techName="Bootstrap"/>
        <Technologies imgPath="/sass-badge.png" imgAlt="sass-badge" techName="SASS"/>
      </div>
    )
}