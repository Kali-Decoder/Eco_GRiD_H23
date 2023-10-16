import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useAccount } from "wagmi";
import { useUserDataContext } from "../context/DataContext";

const Authscreen = () => {
  const {onLogin ,confetti} = useUserDataContext();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [walletAddress, setWalletAddress] = useState("");
  const { address } = useAccount();
  const handlePaste = async (event) => {
    const pastedText = event.clipboardData.getData("Text");
    setWalletAddress(pastedText);
  };

  

  return (
    <>
      {confetti && <Confetti width={width} height={height} />}
      <div
        className="form-wrapper 
         min-h-screen
         [ p-0 md:p-0 lg:p-0 ]
         [ flex justify-center flex-col items-center ] bg-black"
      >
        
        <div
          className="
               max-w-xl
               rounded-xl
                w-[50%]
               text-[#1A2421]
               bg-black
               [ p-8 md:p-10 lg:p-10 ]
               border"
        >
          <h1 className="mb-6 uppercase text-yellow-300 font-bold [ text-xl md:text-xl lg:text-xl ]">
             Login 
          </h1>

          {true ? (
            <>
              
              <label
                for="walletAddress"
                className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
              >
                <input
                  className="form-input 
              
              border 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#fff] focus:text-white ]"
                  type="text"
                  name="walletAddress"
                  id="walletAddress"
                  placeholder="Paste your Address 0xcfa0b5...407891"
                  onPaste={handlePaste}
                />
              </label>
              <label
                for="Phone Number"
                className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
              >
                <input
                  className="form-input 
              
              border 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#fff] focus:text-white ]"
                  type="text"
                  
                  placeholder="Paste your Pancard Number"

                />
              </label>
              <>
                <button
                  onClick={onLogin}
                  className="form-input w-full mt-4 rounded-lg  text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-800 hover:bg-blue-700 ] cursor-pointer"
                >
                  Login
                </button>
              </>
            </>
          ) : (
            <span className="flex items-center mt-2 font-medium tracking-wide text-red-400 text-xs  ml-1">
              Connect Your Wallet !
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Authscreen;
