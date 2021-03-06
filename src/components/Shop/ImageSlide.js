import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const options = {
  items: 1,
  nav: true,
  dots: false,
  touchDrag: false,
  mouseDrag: true,
  autoplay: true,
  smartSpeed: 500,
  loop: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>",
  ],
};

class ImageSlide extends Component {
  state = { display: false };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="col-lg-5 col-md-12">
        {this.state.display ? (
          <OwlCarousel
            className="product-img-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="product-img">
              <a href="#">
                <img src="/images/shop-item1.jpg" alt="product-img" />
              </a>
            </div>

            <div className="product-img">
              <a href="#">
                <img src="/images/shop-item2.jpg" alt="product-img" />
              </a>
            </div>

            <div className="product-img">
              <a href="#">
                <img src="/images/shop-item3.jpg" alt="product-img" />
              </a>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ImageSlide;
