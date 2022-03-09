import React, { Component } from 'react';
import './Marketplace.css';

class Marketplace extends Component {

  render() {
    return (
        <div className='container'>
            <h2 className='mt-5'>Escolha seu ingresso: </h2>
            <br></br>
            <div class=" my-1 row no-gutters">
                <div class="col-md-4">
                    <div class="card bg-body mr-md-1 mr-lg-3 h-100 shadow-sm border rounded-0 p-1">
                        <img src="https://gateway.pinata.cloud/ipfs/QmX7JNk6tQaRZeCq1w4L7TiM9gL4P4tN16TqimM2UsCDKP" className="card-img-top mt-5 mb-4 makerketplace_item" />
                        <div class="card-body">
                            <h2 class="h5 card-title text-center h4 text-en font-weight-bold">Gold Pass</h2>
                            <p class="card-text text-center my-4 text-session">Direito a todos os dias open bar</p>
                        </div>
                        <div class="pb-5">
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-success text-white" onClick={this.props.mintNFT}>Mintar agora</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-body mr-md-1 mr-lg-3 h-100 shadow-sm border rounded-0 p-1">
                        <img src="https://gateway.pinata.cloud/ipfs/QmNm24sHPNU2tztD21t4mSQz73VMNHGr19Mp9XuFHKsyK1" className="card-img-top mt-5 mb-4 makerketplace_item" />
                        <div class="card-body">
                            <h2 class="h5 card-title text-center h4 text-en font-weight-bold">Black Pass</h2>
                            <p class="card-text text-center my-4 text-session">Direito a todos os dias</p>
                        </div>
                        <div class="pb-5">
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-success text-white">Mintar agora</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-body mr-md-1 mr-lg-3 h-100 shadow-sm border rounded-0 p-1">
                        <img src="https://gateway.pinata.cloud/ipfs/Qmbkfu1p5nV1eKC4eqYQCq3Zd9VwWx91PPeJQjPNDn3vAs" className="card-img-top mt-5 mb-4 makerketplace_item" />
                        <div class="card-body">
                            <h2 class="h5 card-title text-center h4 text-en font-weight-bold">White Pass</h2>
                            <p class="card-text text-center my-4 text-session">Direito a almoço</p>
                        </div>
                        <div class="pb-5">
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-success text-white">Mintar agora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Marketplace;
