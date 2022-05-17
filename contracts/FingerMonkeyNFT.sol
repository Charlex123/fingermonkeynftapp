//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract FingerMonkeyNFT is ERC721, Ownable, ReentrancyGuard {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWalletAddress;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('FingerMonkeyNFT', 'FM') {
        mintPrice = 0.077 ether;
        totalSupply = 0;
        maxSupply = 8000;
        maxPerWallet = 5;
        // set withdrawal wallet address;
        withdrawWalletAddress = payable(0xFCbB69B9CE13bec64a76878dbFF64e8e787f75Cf);
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI(uint256 tokenId_) public view virtual override returns(string memory) {
        require(_exists(tokenId_), "token does not exist!");
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    function withdraw() external onlyOwner{
        (bool success, ) = withdrawWalletAddress.call{value: address(this).balance }('');
        require(success, 'withdraw failed');
    }

    function mint(uint256 quantity_) public payable {
        require(isPublicMintEnabled, "Minting not enabled");
        require(msg.value == quantity_ * mintPrice, "wrong mint value");
        require(totalSupply * quantity_ <= maxSupply, "sold out");
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, "exceed max wallet");

        for(uint256 i = 0; i < quantity_; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}


