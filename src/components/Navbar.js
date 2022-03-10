import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex align-items-center">
  
        <h1 className="logo me-auto"><a href="index.html">R2 Produções</a></h1>
  
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#buyNFT">Comprar NFT</a></li>
            <li><a className="nav-link scrollto" href="#myNFT">Meus NFT</a></li>
            <li><a className="nav-link  scrollto" href="#event">Evento</a></li>
            <li className="ml-5">
              {
                this.props.account ?
                <small id="account" className='text-white'>{this.props.account}</small> :
                <button onClick={this.props.startWeb3} className="getstarted text-white btn">Conectar Carteira</button>
              }  
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}
  
      </div>
    </header>
    );
  }
}

export default Navbar;