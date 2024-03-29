import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import styles from './styles/main.css';
import logo from './FingerMonkey.png'
import { Image } from "@chakra-ui/react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

const NavBar = ({accounts, setAccounts}) => {

    // const isConnected = Boolean(accounts[0]);
    
    // async function connectAccount() {
    //     if(window.ethereum)  {
    //         const accounts = await window.ethereum.request({
    //             method: "eth_requestAccounts",
    //         });
    //         setAccounts(accounts);
    //     } else {
    //         //  Create WalletConnect Provider
    //         const provider = new WalletConnectProvider({
    //             infuraId: "9de8cf7dd24f4ece94441cc3c8307ff9",
    //         });
            
    //         //  Enable session (triggers QR Code modal)
    //         await provider.enable();

    //         const web3Provider = new providers.Web3Provider(provider);
    //     }
    // }

    return (<>
            <div className={styles.container}>
                <header className="topfixedheader">
                    <Navbar className="Navbarcss" expand={false}>
                            {/* <div className="bg-nav-overlay"></div> */}
                            <Container fluid className="conta">
                                <Navbar.Brand href="../"><Image src={logo} width="220px" height="40px" className="" alt="logo"/></Navbar.Brand>             
                                <Navbar.Toggle aria-controls="offcanvasNavbar" className='text-white bg-warning'/>
                                <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end"  className="Offcanvascss bg-transparent" >
                                {/* <div className='bg-nav-overlay'></div> */}
                                <Offcanvas.Header closeButton style={{color: 'white'}} className='text-white porelative'>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">FingerMonkey</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="porelative">
                                    <Nav className="justify-content-end flex-grow-1 pe-3 text-dark">
                                        <Nav.Link href="../" className="nav-link text-white">HOME</Nav.Link>
                                        <Nav.Link href="../#about-us" className="nav-link text-white font-weight-bold">ABOUT</Nav.Link>
                                        <Nav.Link href="../#faq" className="nav-link text-white">FAQ</Nav.Link>
                                        <Nav.Link href="../#mintnft" ><Button className="nav-link text-dark bg-warning p-1 px-4 outline-success">MINT NFT</Button></Nav.Link>
                                        {/* {isConnected ? (<Button className="nav-link text-dark bg-warning p-1 outline-success">WALLET CONNECTED</Button>) : (<Button onClick={connectAccount} className="nav-link text-dark bg-warning p-1 outline-none">CONNECT WALLET</Button>)} */}
                                    </Nav>
                                </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                            </Navbar>
                    </header>
                </div>
      </>) 
}
export default NavBar;
