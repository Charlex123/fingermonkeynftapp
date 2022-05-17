import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { StrictMode } from "react";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <Web3ReactProvider getLibrary={getLibrary}>
//       </Web3ReactProvider>
//     </ChakraProvider>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </ChakraProvider>
  </StrictMode>,
  rootElement
);

// import ReactDOM from "react-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import { Web3ReactProvider } from "@web3-react/core";
// import { ethers } from "ethers";

// import App from "./App";

// const getLibrary = (provider) => {
//   const library = new ethers.providers.Web3Provider(provider);
//   library.pollingInterval = 8000; // frequency provider is polling
//   return library;
// };

