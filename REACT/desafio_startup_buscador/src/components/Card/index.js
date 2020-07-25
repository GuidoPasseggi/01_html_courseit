import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { name, desc, img } = this.props;
    console.log(this.props.name);
    return (
      <Link to={`/productos/${name.toLowerCase()}`}>
        <div className="cardContainer">
          <div className="imgContainer">
            <img src={img} />
          </div>
          <div className="dataContainer">
            <h3>{name}</h3>
            <h4>{desc}</h4>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
