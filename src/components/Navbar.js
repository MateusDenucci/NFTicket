import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <header id="header" class="fixed-top header-scrolled">
      <div class="container d-flex align-items-center">
  
        <h1 class="logo me-auto"><a href="index.html">R2 Produções</a></h1>
  
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#buyNFT">Comprar NFT</a></li>
            <li><a class="nav-link scrollto" href="#myNFT">Meus NFT</a></li>
            <li><a class="nav-link  scrollto" href="#event">Evento</a></li>
            <li class="ml-5">
              {
                this.props.account ?
                <small id="account" className='text-white'>{this.props.account}</small> :
                <button onClick={this.props.startWeb3} className="btn btn-warning">Connect Wallet</button>
              }  
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}
  
      </div>
    </header>
    );
  }
}

export default Navbar;