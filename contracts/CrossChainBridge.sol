// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrossChainBridge {
    event TokenLocked(address indexed user, uint256 amount);
    event TokenUnlocked(address indexed user, uint256 amount);

    function lockTokens(uint256 _amount) public {
        // Lock tokens on source chain
        emit TokenLocked(msg.sender, _amount);
    }

    function unlockTokens(address _user, uint256 _amount) public {
        // Unlock tokens on destination chain
        emit TokenUnlocked(_user, _amount);
    }
}