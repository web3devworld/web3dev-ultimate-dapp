// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMarketplace is ERC721 {
    uint256 public nextTokenId;

    constructor() ERC721("NFTMarketplace", "NFT") {}

    function mintNFT(address _to, string memory _tokenURI) public {
        _safeMint(_to, nextTokenId);
        _setTokenURI(nextTokenId, _tokenURI);
        nextTokenId++;
    }
}