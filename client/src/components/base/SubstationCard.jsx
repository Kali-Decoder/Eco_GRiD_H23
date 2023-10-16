import React, { useEffect, useState } from "react";
import { getDistance } from "geolib";

const SubstationCard = ({ item, setIsOpen }) => {
  const [farness, setFarness] = useState(0);
  useEffect(() => {
    const myLocation = {
      latitude: 22.83038,
      longitude: 76.0216,
    };
    let distance = getDistance(
      { latitude: item?.location?.lat, longitude: item?.location?.lot },
      myLocation
    );
    distance = distance / 1000;
    distance = distance.toFixed(2);
    setFarness(distance);
  }, [item]);
  return (
    <>
      <article className="relative flex flex-col overflow-hidden rounded-lg border ">
        <div className="aspect-square overflow-hidden">
          <img
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src="https://media.istockphoto.com/id/609700424/vector/electrical-substation-the-high-voltage-transformer-and-switch-black-white.jpg?s=612x612&w=0&k=20&c=WHySJZYTqWcTgFZ6KCyjMhtb2aWCuFJA1pbJrh8DkAQ="
            alt=""
          />
        </div>
        <div className="absolute top-0 m-2 rounded-full bg-white">
          <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            {item?.walletAddress}
          </p>
        </div>
        <div className="my-0 mx-auto flex w-full px-4 flex-col items-start justify-between">
          <div className="mb-2 flex flex-col mt-2">
            <p className=" text-sm font-semibold">
              Per Unit : <span className="text-yellow-400">{item?.per_unit} Rupees</span>
            </p>

            <p className="mr-3 text-sm font-semibold">
              Far Away : <span className="text-yellow-400">{farness} KM</span>
            </p>
          </div>
          <h3 className="mb-2 text-sm text-white font-bold">{item?.name}</h3>
        </div>
        <div className=" mx-3 mb-4 justify-between flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <button
            onClick={() => setIsOpen(true)}
            className="flex w-1/2 items-center font-semibold mx-1 justify-center bg-gray-100 text-xs uppercase transition hover:bg-emerald-600 hover:text-white"
          >
            Buy
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center mx-1 font-semibold justify-center w-1/2 bg-gray-200 px-5 transition hover:bg-emerald-500 hover:text-white"
          >
            Sell
          </button>
        </div>
      </article>
    </>
  );
};

export default SubstationCard;
