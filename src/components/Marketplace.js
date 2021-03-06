import React, { Component } from 'react';
import './Marketplace.css';
import { Carousel } from 'react-bootstrap';
// import photo from '../photo.png';


class Marketplace extends Component {

  render() {
    return (
        <section id="buyNFT">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="images/10.png"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src="images/2.png"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="images/1.png"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                        <h3>Faça parte desse clube exclusivo e tenha várias vantagens.</h3>
                        <p className="fst-italic">
                            Custo de 0,01 ETH + Gas Fee. Não sabe o que essas palavras significam ou como comprar? <a href="https://r2.com.vc/">Clique aqui e aprenda</a>
                        </p>
                        <div className="d-flex justify-content-center">
                            <button type="button" onClick={this.props.mintNFT} className="text-uppercase mt-5 btn btn-success">
                                Comprar NFT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Marketplace;

