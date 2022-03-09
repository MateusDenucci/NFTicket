const NFTicket = artifacts.require("NFTicket");

module.exports = function(deployer) {
  deployer.deploy(NFTicket);
};