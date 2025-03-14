import React, { useState } from 'react';
import { ethers } from 'ethers';

const App = () => {
    const [balance, setBalance] = useState(0);

    const connectWallet = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            setBalance(ethers.utils.formatEther(balance));
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <div>
            <h1>Web3Dev Strategy Consulting</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            <p>Balance: {balance} ETH</p>
        </div>
    );
};

export default App;