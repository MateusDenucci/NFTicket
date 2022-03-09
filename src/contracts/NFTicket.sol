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

    address payable companyAccount = 0x5024F0E2E991f76f74f905b650408a3d7b40B88D;

    address(companyAccount).transfer(msg.value);

    return true;
  }

}
