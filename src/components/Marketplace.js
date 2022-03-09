import React, { Component } from 'react';
import './Marketplace.css';
import { Carousel } from 'react-bootstrap';
// import photo from '../photo.png';


class Marketplace extends Component {

  render() {
    return (
        <div class="container mt-5">
            <div class="row align-items-center">
                <div class="col-lg-6 order-1 order-lg-0">
                    <div class="text-container d-flex flex-column">
                        <h1 class="order-1 order-lg-0">NFT Surreal</h1>
                        <p class="p-lg order-2 order-lg-1" >Além do seu ingresso, NFTs surreais garantem benefíficos exclusivos.</p>
                        <button type="button" onClick={this.props.mintNFT} class="text-uppercase order-0 order-lg-2 mt-5 btn btn-success">
                            Comprar NFT
                        </button>
                    </div>
                </div>
                <div class="col-lg-6 h-100 order-0 order-lg-1">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://gateway.pinata.cloud/ipfs/QmULbt2g6DRGwhtY1ntwE9wdw7f7dteZfkxefUrhom3aid/10.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                            className="d-block w-100"
                            src="https://gateway.pinata.cloud/ipfs/QmULbt2g6DRGwhtY1ntwE9wdw7f7dteZfkxefUrhom3aid/5.png"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://gateway.pinata.cloud/ipfs/QmULbt2g6DRGwhtY1ntwE9wdw7f7dteZfkxefUrhom3aid/2.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
  }
}

export default Marketplace;

