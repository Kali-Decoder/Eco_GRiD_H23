import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  let navigate = useNavigate();
 
  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <div id="hero" className="flex justify-center items-center flex-col">
      <h1 id="header-text-first"> ⚡️ </h1>
      <h1 id="header-text-second"> Energy Trade Marketplace</h1>
      <h5 id="header-subtext" className="text-blue-400">Empowering Energy Transactions , <br/>Your Gateway to Sustainable Revenue.</h5>

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Explore
        </button>
        <button id="create" onClick={goCreate}>Create</button>
      </div>
    </div>
  );
};

export default Hero;
