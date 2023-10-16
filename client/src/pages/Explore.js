import react from "react";
import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import "../styles/Explore.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PowerStationCard from "../components/PowerStationCard";
import powerstations from "../data/powerstations.json";
const Explore = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className=" px-20 pt-10">
        <Link to="">
          <MdOutlineKeyboardBackspace
            onClick={() => navigate(-1)}
            color="white"
            size={50}
          />
        </Link>
      </div>
      <div id="hero" className="flex justify-center items-center flex-col">
        <h1 id="header-text-first"> 🔋 </h1>
        <h1 id="header-text-second"> Explore Marketplace</h1>
      </div>

      {powerstations.powerstations.map((item, i) => {
        return <PowerStationCard item={item} key={i} />;
      })}
    </>
  );
};

export default Explore;
