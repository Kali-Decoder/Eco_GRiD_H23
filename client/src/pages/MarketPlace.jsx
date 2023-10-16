
import Hero from "../components/Hero";
import "../styles/Home.css";
import { hotDropsData } from "../constants/MockupData";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import powerstations from "../data/powerstations.json";
import PowerStationCard from "../components/PowerStationCard";
const Home = () => {
  let navigate = useNavigate();
  const topMostEfficeincyPlants = powerstations.powerstations.filter((item)=>item.efficiency>3);
  return (
    <div id="home">
      <div className=" px-20 pt-10">
        <Link to="">
          <MdOutlineKeyboardBackspace
            onClick={() => navigate(-1)}
            color="white"
            size={50}
          />
        </Link>
      </div>
      <Hero list={hotDropsData} />
      <p id="card-list-header-text"> Hot Power Plants </p>
      {topMostEfficeincyPlants.map((item, i) => {
        return <PowerStationCard item={item} key={i} />;
      })}
    </div>
  );
};

export default Home;
