import React, { Component, Fragment } from "react";
import LandingPage from "./components/LandingPage";
import UserDashboard from "./components/UserDashboard";
import { Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import Explore from "./pages/Explore";
import SubstationMarketPlace from "./pages/SubstationMarketPlace";
import Authscreen from "./components/AuthVerification";
import RegisterUser from "./components/RegisterUser";
import InvoiceGenerator from "./components/InvoiceGenerator";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/user-dashboard" exact element={<UserDashboard />} />
        <Route path="/marketplace" exact element={<MarketPlace />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route
          path="/:id/substations"
          exact
          element={<SubstationMarketPlace />}
        />
        <Route path="/auth" exact element={<Authscreen />} />
        <Route path="/register" exact element={<RegisterUser />} />
        <Route path="/invoice" exact element={<InvoiceGenerator/>}/>
      </Routes>
    </>
  );
};

export default App;
