import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import NFTicket from '../abis/NFTicket.json'
import Navbar from './Navbar'
import NFTGallery from './NFTGallery'
import Marketplace from './Marketplace'
import Hero from './Hero'
import Event from './Event'
import Footer from './Footer';

const baseIPFS = 'https://gateway.pinata.cloud/ipfs/QmULbt2g6DRGwhtY1ntwE9wdw7f7dteZfkxefUrhom3aid/'
const mintPrice = 10000000000000000

class App extends Component {
  async startWeb3() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async componentWillMount() {

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
    if(networkData || networkId === 4){
      let nfTicket = 0
      if(networkId === 4){
        nfTicket = new web3.eth.Contract(NFTicket.abi, '0x2d010e127ce8688fc3c827c5ba08664d96f32573')
      }else{
        nfTicket = new web3.eth.Contract(NFTicket.abi, networkData.address)
      }
      
      this.setState({nfTicket})

      let accountBalance = await nfTicket.methods.balanceOf(this.state.account).call()
      for(let i = 0; i < accountBalance; i++){
        let id = await nfTicket.methods.tokenOfOwnerByIndex(accounts[0], i).call()
        let accountSNFT = await nfTicket.methods.tokenURI(id).call()
        this.setState({'accountSNFTs': [...this.state.accountSNFTs, accountSNFT]})
      }

      let totalSuply = await nfTicket.methods.totalSupply().call()
      this.setState({totalSuply})

      this.setState({'loading': false})

    }else{
      alert('Wrong network')
    }
    console.log(window.web3);
    console.log(typeof(window.web3));
  }

  mintNFT = () => {
    if (this.state.account === ''){
        this.startWeb3()
        return false
    }

    let imageURI = baseIPFS + (parseInt(this.state.totalSuply) + 1) + '.png'
    this.state.nfTicket.methods.mint(
      this.state.account,
      imageURI
    ).send({ from: this.state.account, value: mintPrice}).on('transactionHash', (hash) => {
      this.setState({ loading: false })
      this.setState({'accountSNFTs': [...this.state.accountSNFTs, imageURI]})
    }).catch((e) => {
      if(e.code === 4001){
        alert('Transaction rejected')
      }else{
        console.log(e)
        alert('Something went wrong')
      }
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      totalSuply: 0,
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
        <Hero />
        <main id="main">
          <Marketplace mintNFT={this.mintNFT} />
          <NFTGallery
            accountSNFTs={this.state.accountSNFTs}
          />
          <Event />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;