import React, { Component } from 'react';
import './Marketplace.css';

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
                <img className='display_width' src="https://gateway.pinata.cloud/ipfs/QmNm24sHPNU2tztD21t4mSQz73VMNHGr19Mp9XuFHKsyK1"  />
                </div>
            </div>
        </div>
    );
  }
}

export default Marketplace;

