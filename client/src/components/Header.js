import react, { useContext } from "react";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <div id="header">
      <Link to="/" id="logo">
        NFT Room
      </Link>

      <div id="link-containers">
        <Link to="#" >Start Hunting</Link>
        <Link to="#">Dark NFTs</Link>
        <Link to="#">Community</Link>
        <Link to="#">Craft NFT</Link>
      </div>
    </div>
  );
};

export default Header;
