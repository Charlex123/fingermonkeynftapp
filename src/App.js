import { useEffect, useState } from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import bannerbg from "./fingermonkeynftbanner.jpg";
import './styles/index.css';
import Header from "./Header";
import MainMint from "./MainMint";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './styles/main.css';
import {
  VStack,
  useDisclosure,
  Button,
  Text,
  HStack
  // Select,
  // Input,
  // Box
} from "@chakra-ui/react";
import SelectWalletModal from "./Modal";
import { useWeb3React } from "@web3-react/core";
import { CheckCircleIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
// import { networkParams } from "./networks";
import logo from './FingerMonkey.png';
import { connectors } from "./connectors";
import { toHex, truncateAddress } from "./utils";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

library.add(faInstagram, faTwitter, faDiscord, faCheck, faCheckSquare);
export default function Home() {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active
  } = useWeb3React();
  // const [signature, setSignature] = useState("");
  // const [error, setError] = useState("");
  // const [network, setNetwork] = useState(undefined);
  // const [message, setMessage] = useState("");
  // const [signedMessage, setSignedMessage] = useState("");
  // const [verified, setVerified] = useState();

  // const handleNetwork = (e) => {
  //   const id = e.target.value;
  //   setNetwork(Number(id));
  // };

  // const handleInput = (e) => {
  //   const msg = e.target.value;
  //   setMessage(msg);
  // };

  // const switchNetwork = async () => {
  //   try {
  //     await library.provider.request({
  //       method: "wallet_switchEthereumChain",
  //       params: [{ chainId: toHex(network) }]
  //     });
  //   } catch (switchError) {
  //     if (switchError.code === 4902) {
  //       try {
  //         await library.provider.request({
  //           method: "wallet_addEthereumChain",
  //           params: [networkParams[toHex(network)]]
  //         });
  //       } catch (error) {
  //         setError(error);
  //       }
  //     }
  //   }
  // };

  // const signMessage = async () => {
  //   if (!library) return;
  //   try {
  //     const signature = await library.provider.request({
  //       method: "personal_sign",
  //       params: [message, account]
  //     });
  //     setSignedMessage(message);
  //     setSignature(signature);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // const verifyMessage = async () => {
  //   if (!library) return;
  //   try {
  //     const verify = await library.provider.request({
  //       method: "personal_ecRecover",
  //       params: [signedMessage, signature]
  //     });
  //     setVerified(verify === account.toLowerCase());
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // const refreshState = () => {
  //   window.localStorage.setItem("provider", undefined);
  //   setNetwork("");
  //   setMessage("");
  //   setSignature("");
  //   setVerified(undefined);
  // };

  const disconnect = () => {
    // refreshState();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  return (
    <>
    <section className="head-area fontNunito" id="head-area" data-midnight="white">
    
                        <div id="particles-js"></div>
                        <div className="head-content fontNunito container-fluid d-flex align-items-center">
                            <div className="container">
                            <Header/>
                            <div className="head-bg-image"></div>
                                <div className="banner-wrapper">
                                    <div className="align-items-center">
                                        <div className="col-lg-12 col-md-12 mt-5 pt-5">
                                            <div className="banner-content pt-5">
                                                <h1 className="animated" data-animation="fadeInUpShorter" data-animation-delay="1.5s"><h1 className="head1">FINGERMONKEY NFT</h1> <div className="heada pt-2 mt-4 mb-5">Monkeys Are Taking Over</div></h1>
                                                <div className="mt-5">
                                                    {!active ? (
                                                        <button className="mintnft2" onClick={onOpen}>CONNECT WALLET {truncateAddress(account)}</button>
                                                      ) : (
                                                        <button className="mintnft2"  onClick={disconnect}>DISCONNECT</button>
                                                      )}
                                                    <button className="mintnft"><a href="../#mintnft" className="text-white hover:text-yellow-900 px-2">MINT NFT</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <MainMint/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <Carousel
                                slidesPerPage={5}
                                slidesPerScroll={2}
                                animationSpeed={1500}
                                autoPlay={3000}
                                stopAutoPlayOnHover
                                offset={50}
                                itemWidth={250}
                                clickToChange
                                centered
                                >
                                <img src="11.png" className="carousel-img"/>
                                <img src="17.png" className="carousel-img"/>
                                <img src="55.png" className="carousel-img"/>
                                <img src="87.png" className="carousel-img"/>
                                <img src="141.png" className="carousel-img"/>
                            </Carousel>
                            <img src="11.png" className="carousel-img"/>
                                <img src="17.png" className="carousel-img"/>
                                <img src="55.png" className="carousel-img"/>
                                <img src="87.png" className="carousel-img"/>
                                <img src="141.png" className="carousel-img"/>
                        </div>
                    </section>
                    <section className="about-section pt-120 pb-120" id="about-us">
                    <div className='bg-image-overlay'></div>
                    <div className="container">
                        <div className="col-md-12">
                            <div className="about__content">
                                <div className="section__header">
                                    <h1 className="text-center">
                                        About Us
                                    </h1>
                                    <h1 className="text-center">
                                        SPEKTER OF ART
                                    </h1>
                                    <p className="section__title">Finger Monkey NFT Collection features 8888 animated NFT’s created by a group of talented individuals lead by Art H.</p>
                                    <p>
                                        The idea of Finger Monkey NFT was created by Art H. because of his love and passion towards animals. Since his obsession to adopt a Finger Monkey was huge, he decided to illustrate his dream into a Finger Monkey NFT art. Then the Finger Monkey NFT became the first collection for SpecterOfArt.
                                    </p>
                                </div>
                                <p className="about__para">
                                    Their work is so iconic that it is hard to resist not to be a part of their collection family. The artists team up and put all their effort to create distinctive NFT arts which is new to the NFT world.
                                </p>
                                <p className="about__para">
                                    In the Finger Monkey collection some of the animations look cool, some look funny and some of them even look weird.
                                </p>
                                <p className="about__para">
                                    It all depends on what the collector is interested in.
                                </p>
                                <p className="about__para">
                                    Their main goal is to inspire collectors with their colorful, happy and artsy collectives.
                                </p>
                                <p className="about__para">
                                    We share our collection on Twitter, Instagram and Discord
                                    Please like, share and comment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
              <section className="roadmap-section pt-120 pb-120" id="roadmap">
                  <div className='bg-image-overlay'></div>
                  <div className="container">
                      <h1 className="text-center mx-auto py-8 my-8">OUR ROADMAP</h1>
                      <div className="col-lg-12">
                      <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ef8e11', color: '#ffffff', boxShadow: '0px 0px 0px 0px #ef8e11' }}
                            contentArrowStyle={{ borderRight: '10px solid  #ef8e11' }}
                            iconStyle={{ background: '#ef8e11', color: '#ef8e11', width: 40, height: 40,  }}
                        >
                            <h1 className="vertical-timeline-element-title">Launch</h1>
                            <ul className="">
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> A big announcement !!!
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> We are super excited to share our new project to the NFT World.
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Our first NFT collection is our cool and weird Finger Monkeys.
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Which Finger Monkey excites you the most?
                                </li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ef8e11', color: '#ffffff', boxShadow: '0px 0px 0px 0px #ef8e11' }}
                            contentArrowStyle={{ borderRight: '10px solid  #ef8e11' }}
                            iconStyle={{ background: '#ef8e11', color: '#ef8e11', width: 40, height: 40,  }}
                        >
                            <h1 className="vertical-timeline-element-title">Mint</h1>
                            <ul className="">
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> After so much dedication and hard work, our collection is ready to be delivered to the best community.
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Finger Monkey mint day is so close, so get ready to collect some monkeys before they’re all gone.
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> You can find our collection in Opensea.io
                                </li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ef8e11', color: '#ffffff', boxShadow: '0px 0px 0px 0px #ef8e11' }}
                            contentArrowStyle={{ borderRight: '10px solid  #ef8e11' }}
                            iconStyle={{ background: '#ef8e11', color: '#ef8e11', width: 40, height: 40,  }}
                        >
                            <h1 className="vertical-timeline-element-title">Reveal</h1>
                            <ul className="">
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Wohoooo! Isn’t it awesome to have the cutest Finger Monkey in your life? We are sure you are excited about this launch because of its cuteness, uniqueness and weirdness.
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Is this what you imagined you would see in NFT? Are you ready for more crazy, fun and creative projects from the Specter Of Art?
                                </li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ef8e11', color: '#ffffff', boxShadow: '0px 0px 0px 0px #ef8e11' }}
                            contentArrowStyle={{ borderRight: '10px solid  #ef8e11' }}
                            iconStyle={{ background: '#ef8e11', color: '#ef8e11', width: 40, height: 40,  }}
                        >
                            <h1 className="vertical-timeline-element-title">Utility</h1>
                            <p>What utilities does our NFT have?</p>
                            <ul className="">
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Top 1000 rank gets % of royalties
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Bounties:  50$ a week “Wanted Wednesdays” specific monkey on bounty poster
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> Whoever has it, and shows proof gets prize money
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheckSquare} className="fa_timer text-warning"/> And lots more to come! 
                                </li>
                            </ul>
                        </VerticalTimelineElement>
                        </VerticalTimeline>
                      </div>
                  </div>
              </section>
                <section className="faqs-section pt-120 pb-120" id="faq">
                <div className="container">
                    <div className="section__header section__header__center">
                        <h1 className="text-center">
                            FAQ'S            
                        </h1>
                        <h1 className="text-center">How can we help?</h1>
                    </div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className='py-4 px-4 mx-2 my-2'>
                            <Accordion.Header><h5 className="title">How to buy a Finger Monkey NFT?</h5></Accordion.Header>
                            <Accordion.Body className="faq__content">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} className="fa_timer text-dark"/> Sign up for MetaMask wallet and download the extension on your internet browser.
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} className="fa_timer text-dark"/> Make sure you have enough Ethereum in your wallet to cover the total cost including gas fees.
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} className="fa_timer text-dark"/> On mint day, there will be a Connect button at the top of our website to connect to your wallet.
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} className="fa_timer text-dark"/> Click on the mint button and you will be prompted to sign for your transaction. There will be a fee associated with every transaction related to gas prices.
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} className="fa_timer text-dark"/> Once you have made your purchase, your Finger Monkey NFTs will appear in your wallet and on Opensea.io
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='py-4 px-4 mx-2 my-2'>
                            <Accordion.Header><h5 className="title">What is a Finger Monkey?</h5></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Finger Monkey is a collection of 8888 animated NFT’s created by a group of talented individuals.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='py-4 px-4 mx-2 my-2'>
                            <Accordion.Header><h5 className="title">When is the mint day?</h5></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='py-4 px-4 mx-2 my-2'>
                            <Accordion.Header><h5 className="title">What is the mint price?</h5></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    0.077 ETH + GAS FEE
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='py-4 px-4 mx-2 my-2'>
                            <Accordion.Header><h5 className="title">What are airdrops?</h5></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    An airdrop is a distribution of cryptocurrency, tokens, or NFTs that are sent to a web3 wallet address for free as a promotion. Or added value for participating in and experience or purchasing a digital asset. We have future plans for airdrops.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='py-4 px-4 mx-2 my-2'>
                            <Accordion.Header><h5 className="title">What is an NFT?</h5></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    NFT stands for <span style={{fontWeight:'bold'}}>Non-Fungible Token</span>, which is a one-of-a-kind digital asset that belongs to its owners only.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>
            <section>
            <footer className="bg--theme--overlay footer-section bg_fixed bg_img">
                <div className="banner-shape-top">
                        </div>
                            <div className="container mx-auto">
                            <div className="footer-top pt-120 pb-3  top--wave-wrapper ">
                                <div className="footer-logo">
                                    <a href="">
                                        <Image src={logo} width="180px" height="30px" alt="logo"/>
                                    </a>
                                    <p className="footer--text">
                                        Finger Monkey NFT Collection features 8888 animated NFT’s created by a group of talented individuals lead by Art H.
                                    </p>
                                </div>
                                
                                <div className='w-full mx-auto text-enter px-8 py-4'>
                                    <h5 className='text-warning mx-auto text-center mb-4'>FOLLOW</h5>
                                    <ul className="pt-1 flex mx-auto text-center" style={{width:'50%'}}>
                                        <li className="flex mx-auto text-center" style={{cursor: 'pointer'}}>
                                            <a href="https://twitter.com/SpecterOfArtNFT/status/1498512097008783360?s=20&t=FFLpsJW2b4N46qA_KcUVkA" passHref>
                                                <FontAwesomeIcon icon={faTwitter} className="fa-2x fa_timer text-warning"/>
                                            </a>
                                        </li>
                                        <li className="flex mx-auto text-center" style={{cursor: 'pointer'}}>
                                            <a href="https://www.instagram.com/specterofartnft" passHref>
                                                <FontAwesomeIcon icon={faInstagram} className="fa-2x fa_timer text-warning"/>
                                            </a>
                                        </li>
                                        <li className="flex mx-auto text-center" style={{cursor: 'pointer'}}>
                                            <a href="https://discord.com/invite/yZ8YBkwN" passHref>
                                                <FontAwesomeIcon icon={faDiscord} className="fa-2x fa_timer text-warning"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-bottom py-3">
                                <div className="copyright text--white text-center">
                                    FingerMonkeyNFT © 2022        
                                </div>
                            </div>
                        </div>
                    </footer>
            </section>
    </>
  );
}
