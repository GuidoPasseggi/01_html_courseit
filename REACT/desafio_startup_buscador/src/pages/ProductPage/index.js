import React from "react";
import Footer from "../../components/Footer";
import startups from "../../data/startups.json";
import "./style.scss";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      name: "",
      desc: ""
    };
  }

  componentDidMount() {
    //match.params funciona gracias a la libreria "REACT ROUTER DOM"
    // ver tamb. index.js que esta suelto en carpeta SRC
    const filtered = startups.filter((startup) => {
      // console.log(2, startup.id, this.props.match.params.productId);
      return startup.id == this.props.match.params.productId;
    });

    //nota: FILTER siempre devuelve un ARRAY
    this.setState({
      name: filtered[0].name,
      img: filtered[0].logo,
      desc: filtered[0].desc
    });
  }

  render() {
    // console.log(this.props.match.params.productId);
    // console.log(Startups);
    const { img, name, desc } = this.state;

    return (
      <React.Fragment>
        <div className="div-wrapper-card">
          <div className="div-card-container">
            <div className="div-up"></div>

            <div className="div-img-container">
              <img className="img-courseit" src={img} />
            </div>

            <h3 className="h3-title">Mi nombre es {name}</h3>
            <p className="p-description-title">Descripción:</p>
            <p className="p-description-content">{desc}</p>
            <p>Mi id es: {this.props.match.params.productId}</p>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductPage;
