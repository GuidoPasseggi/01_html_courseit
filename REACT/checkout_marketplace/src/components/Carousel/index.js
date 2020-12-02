import React from "react";
import "./style.scss";
import Slider from "react-slick";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 4
    };
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Slider {...this.settings}>
            <div>
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div>
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div>
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div>
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div>
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div>
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div>
              <img src="https://picsum.photos/id/1084/536/354?grayscale" />
            </div>
          </Slider>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
