pragma solidity ^0.5.16;
// pragma solidity ^0.7.6;


//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC721/ERC721.sol";
import "./ERC721Full.sol";

contract NFTicket is ERC721Full{
  
  constructor() ERC721Full('NFTicket', 'NFTicket') public {}


  function mint(address _to, string memory _tokenURI) public payable returns(bool){
    uint _tokenID = totalSupply() + 1;
    _mint(_to, _tokenID);
    _setTokenURI(_tokenID, _tokenURI);

    address payable companyAccount = 0x2C3ae4cA96Fe5f85dBf8015F976222b6dbF3127a;

    companyAccount.transfer(msg.value);

    return true;
  }

}
