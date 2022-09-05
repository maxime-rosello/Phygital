// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./token/ERC721/extensions/ERC721enumerable.sol";
import "./token/ERC721/extensions/ERC721phygital.sol";

contract Phygital is ERC721, ERC721Enumerable {
    string[] public parts;
    constructor() ERC721("Phygital", "PHYG") {
    }

    function mint(string memory _part) public {
        parts.push(_part);
        uint _id = parts.length - 1;
        _safeMint(msg.sender, _id);
    }
    
    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}