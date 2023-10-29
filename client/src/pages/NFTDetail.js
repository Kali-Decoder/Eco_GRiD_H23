import React, { useState, useEffect } from "react";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { useLocation, useNavigate } from "react-router";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/base/Button";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useARStatus } from "../hooks/isARStatus";
const NFTDetail = () => {
  const [colors, setColors] = useState([]);





  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };



  return (
    <div>
      <div id="nft-detail-card-wrapper">
        <Card
          width="60%"
          height="60vh"
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
              {" "}
              <ColorExtractor getColors={getColors}>
                <img
                  id="detail-image"
                  src="https://images.unsplash.com/photo-1614812513172-567d2fe96a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
              </ColorExtractor>
              <div
                id="detail-info"
                className="flex justify-center items-center flex-col"
              >
                <div id="detail-info-container">
                  <p id="name"> Power Station 1 </p>
                  <p id="description">
                    {" "}
                    Panipat Thermal Power Station I is located at Khukhrana
                    Panipat in Haryana. The power plant is one of the coal based
                    power plants of HPGCL{" "}
                  </p>
                  <button className="flex mt-5 text-center w-full justify-center border items-center px-10 rounded-lg shadow-2xl hover:shadow-sm font-medium hover:text-blue-400">
                    <FaEthereum size="28px" />
                    <p id="price" className="text-2xl">
                      Let's Trade
                    </p>
                  </button>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default NFTDetail;
