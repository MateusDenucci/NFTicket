import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import NFTicket from '../abis/NFTicket.json'
import Navbar from './Navbar'
import NFTGallery from './NFTGallery'
import Marketplace from './Marketplace'


const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {
  async startWeb3() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async componentWillMount() {
    this.startWeb3()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({'account': accounts[0]})

    const networkId = await web3.eth.net.getId()
    const networkData = NFTicket.networks[networkId]
    if(networkData){
      var nfTicket = new web3.eth.Contract(NFTicket.abi, networkData.address)
      
      this.setState({nfTicket})

      let accountBalance = await nfTicket.methods.balanceOf(this.state.account).call()
      for(let i = 0; i < accountBalance; i++){
        let id = await nfTicket.methods.tokenOfOwnerByIndex(accounts[0], i).call()
        let accountSNFT = await nfTicket.methods.tokenURI(id).call()
        console.log(accountSNFT);
        this.setState({'accountSNFTs': [...this.state.accountSNFTs, accountSNFT]})
      }

      this.setState({'loading': false})
    }else{
      alert('Wrong network')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      nfTicket: null,
      accountSNFTs: [],
      loading: true
    }

    this.startWeb3 = this.startWeb3.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} startWeb3={this.startWeb3}/>
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
          : <div className='container mx-auto'>
              <Marketplace/>
              <NFTGallery
                accountSNFTs={this.state.accountSNFTs}
              />
            </div>
        }
      </div>
    );
  }
}

export default App;