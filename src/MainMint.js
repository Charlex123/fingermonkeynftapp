import React from "react";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import fingerMonkeyNFT from "./FingerMonkeyNFT.json";
import { useWeb3React } from "@web3-react/core";
import {
    useDisclosure
  } from "@chakra-ui/react";
  
const fingerMonkeyNFTAddress = "0xb948E9C99fDC995dEfA411C4BFB94503d934d51d";

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const { isOpen, onOpen } = useDisclosure();
    const {
      active
    } = useWeb3React();

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
            <div className="minter-bg-image"></div>
            <div className="minter-conta">
                <h1 className="header">MINT NFT</h1>
                {active ? 
                (
                <div>
                    <div className="flexone">
                        <button onClick={handleDecrement} className="mintcounter">-</button>
                        <input type="number" value={mintAmount} className="minterinput"/>
                        <button onClick={handleIncrement} className="mintcounter">+</button>
                    </div>
                    <button onClick={handleMint} className="mintbtn">Mint FingerMonkey NFT</button>
                </div>
                ) :
                (
                    <p className="connectwallet">You must connect your wallet to MINT!</p>
                )
                }
            </div>
        </div>
    )
};

export default MainMint;