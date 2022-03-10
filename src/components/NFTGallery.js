import React, { Component } from 'react';

class NFTGallery extends Component {

  render() {
    return (
      <section id="myNFT" className='section-bg'>
        <div className="container" data-aos="fade-up" >

          <div className="section-title">
            <h2>Meus NFT</h2>
          </div>

          <div className="d-flex justify-content-center container mt-2">
            <div className="row">
                { this.props.accountSNFTs.map((accountSNFT, key) => {
                  return(
                    <div className="col-md-3 mt-2" key={key}>
                      <img className='img-thumbnail'
                          alt={`this is your sNFT #${key}`}
                          src={accountSNFT}
                      />
                    </div>
                  )
                })}
              </div>
          </div>

        </div>
      </section>

    );
  }
}

export default NFTGallery;


