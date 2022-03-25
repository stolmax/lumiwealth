const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
 deployer.deploy(ERC721PresetMinterPauserAutoId,
   "Hello NFT",
   "HENFT",
"https://my-json-server.typicode.com/stolmax/lumiwealth"
 )};
