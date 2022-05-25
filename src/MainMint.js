import React from "react";
import { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import fingerMonkeyNFT from "./FingerMonkeyNFT.json";
import Button from 'react-bootstrap/Button';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
  
const fingerMonkeyNFTAddress = "0xb948E9C99fDC995dEfA411C4BFB94503d934d51d";

const MainMint = () => {
    const [mintAmount, setMintAmount] = useState(1);
    const [accounts, setAccounts] = useState([]); 
    const isConnected = JSON.parse(localStorage.getItem("connectionStatus"));

        async function connectAccount() {
            if(window.ethereum)  {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccounts(accounts);
            } else {
                //  Create WalletConnect Provider
                const provider = new WalletConnectProvider({
                    infuraId: "9de8cf7dd24f4ece94441cc3c8307ff9",
                });
                
                //  Enable session (triggers QR Code modal)
                await provider.enable();
    
                const web3Provider = new providers.Web3Provider(provider);
            }
        }


    

    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                fingerMonkeyNFTAddress,
                fingerMonkeyNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.07 * mintAmount).toString()),
                });
                console.log('response: ', response);
            }catch (err){
                console.log('error: ',err);
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if(mintAmount >= 5) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <div className="minter" id="mintnft">
            <div className="minter-conta">
                <h1 className="header">MINT NFT</h1>
                {isConnected ? 
                (
                <div>
                    <div className="flexone">
                        <button onClick={handleDecrement} className="mintcounter">-</button>
                        <input type="number" value={mintAmount} className="minterinput bg-transparent border appearance-none border-white border-opacity-25 rounded w-full py-2 px-1 h-12 text-white leading-tight font-bold"/>
                        <button onClick={handleIncrement} className="mintcounter">+</button>
                    </div>
                    <button onClick={handleMint} className="mintbtn bg-dark text-white p-2 mt-4 rounded font-weight-bold">Mint FingerMonkey NFT</button>
                </div>
                ) :
                (
                    <button onClick={connectAccount} className="nav-link text-dark bg-white p-2 outline-none rounded mt-4">You Must Connect Wallet To Mint</button>
                )
                }
            </div>
        </div>
    )
};

export default MainMint;