import React, {useState} from "react";
// import Accordion from 'react-bootstrap/Accordion';
// import Spinner from 'react-bootstrap/Spinner';
import { Image } from "@chakra-ui/react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles/main.css';
import logo from './FingerMonkey.png'

import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
// import {utils} from 'ethers'

const Header = () => {
    const [accounts, setAccounts] = useState([]); 
    const isConnected = JSON.parse(localStorage.getItem("connectionStatus"));
console.log(isConnected)
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

    return(
    <div>
      <header className="">
          <Navbar className="Navbarcss" expand={false}>
                {/* <div className="bg-nav-overlay"></div> */}
                <Container fluid className="conta">
                    <Navbar.Brand href="../"><Image src={logo} width="220px" height="40px" className="" alt="logo"/></Navbar.Brand>             
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='text-white bg-warning'/>
                    <Navbar.Collapse id="responsive-navbar-nav" placement="end" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="../" className="nav-link text-white mt-4">HOME</Nav.Link>
                            <Nav.Link href="../#about-us" className="nav-link text-white">ABOUT</Nav.Link>
                            <Nav.Link href="../#faq" className="nav-link text-white">FAQ</Nav.Link>
                            <Nav.Link href="../#mintnft" className="nav-link text-white text-right"><Button className="text-dark bg-warning p-1 px-4 outline-success">MINT NFT</Button></Nav.Link>
                            <Nav.Link href="../#mintnft" className="nav-link text-white text-right">{isConnected ? (<Button className="text-dark bg-warning p-1 outline-success">WALLET CONNECTED</Button>) : (<Button onClick={connectAccount} className="text-dark bg-warning p-1 outline-none">CONNECT WALLET</Button>)}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    </div>
    )
};

export default Header;