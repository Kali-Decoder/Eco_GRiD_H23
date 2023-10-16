import React, { useState, useEffect } from "react";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { Link } from "react-router-dom";

const PowerStationCard = ({ item }) => {

  return (
    <div>
      <div id="nft-detail-card-wrapper">
        <Card
          width="60%"
          height="60vh"
          
          child={
            //Detail Content
            <div id="detail-content">
              {" "}
              <img id="detail-image" src={item?.img_url} />
              <div
                id="detail-info"
                className="flex justify-center items-center flex-col"
              >
                <div id="detail-info-container">
                  <p id="name" className="text-white font-bold">
                    {item?.name}
                  </p>
                  <p id="description" className="text-white">
                    {item?.description}
                  </p>
                  <div class="flex space-x-2 mt-3 mx-auto justify-center flex-row items-center">
                    <div class="flex w-1/3 flex-col items-center rounded-xl bg-black px-4 py-2">
                      <p class="text-sm font-medium text-gray-300">
                        Sub Stations
                      </p>
                      <p class="text-5xl font-bold text-yellow-400 ">13</p>
                    </div>
                    <div class="flex w-1/3 flex-col items-center rounded-xl bg-black px-4 py-2">
                      <p class="text-sm font-medium text-gray-300">Capacity</p>
                      <p class="text-5xl font-bold text-yellow-400 ">
                        {item?.capacity}
                      </p>
                    </div>
                    <div class="flex w-1/3 flex-col items-center rounded-xl bg-black px-4 py-2">
                      <p class="text-sm font-medium text-gray-300">
                        Efficiency
                      </p>
                      <p class="text-5xl font-bold text-yellow-400 ">{item?.efficiency}</p>
                    </div>
                    <div class=""></div>
                  </div>
                  <p className="text-white font-bold mt-4 text-left">
                    Connection Type
                  </p>
                  <div className="mt-3 flex flex-row ">
                    {item?.connection_types.map((item, i) => {
                      return (
                        <div class="ml-4 text-lg inline-flex items-center font-bold leading-lg uppercase px-3 py-1 bg-orange-200 text-blue-700 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-activity mr-2"
                          >
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <button className="flex mt-5 py-3 text-center w-full justify-center border items-center px-10 rounded-lg shadow-2xl hover:shadow-sm font-medium hover:text-blue-400">
                    <p
                      id="price"
                      style={{ fontSize: "15px" }}
                      className="text-2xl font-bold text-lg hover:text-blue-500"
                    >
                      <Link to={`/${item?.id}/substations`}>Let's Trade</Link>
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

export default PowerStationCard;
