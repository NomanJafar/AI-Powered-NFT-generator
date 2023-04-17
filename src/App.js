import { useState, useEffect } from "react";
import { NFTStorage, File } from "nft.storage";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import axios from "axios";

// Components
import Spinner from "react-bootstrap/Spinner";
import Navigation from "./components/Navigation";

// ABIs
import NFT from "./abis/NFT.json";

// Config
import config from "./config.json";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <div className="form">
        <form action="submit" className="form">
          <input type="text" placeholder="Give it a name" />
          <input type="text" placeholder="Description" />
          <input type="submit" value="Create and Mint" />
         
        </form>
        <div className="image">
        <img src="" alt="AI generated Image" />
          </div>
      </div>
      <p> View &nbsp; &nbsp;<a href="" rel="_blank" >MetaData </a></p>
    </div>
  );
}

export default App;
