import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaSuperpowers } from "react-icons/fa";
import { GiRollingEnergy } from "react-icons/gi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {FiSun} from "react-icons/fi";
import {PiGitDiffLight} from "react-icons/pi";
import {TbBusinessplan} from "react-icons/tb";
import axios from "axios";
const LandingPage = () => {
  // const [imageUrl,setImageUrl] = useState("");
  // useEffect(() => {
  //   (async()=>{
  //     let res = await axios.get("http://localhost:8080/api/get-qrcode");
  //     const {message:{message,qr,qrimage,uniqueId}} = await res.data;
  //     console.log({message,qr,qrimage,uniqueId})
      
  //   })()
  // },[]);
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-black overflow-x-hidden">
        <div className=" flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-6xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="/"
              className="flex mt-4 flex-col items-center mb-5 font-bold text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <GiRollingEnergy size={40} color="white" />
              <span
                className="mx-auto mt-1 text-white select-none"
                style={{ fontSize: "25px" }}
              >
                Eco
                <span className="text-indigo-800">-</span>
                <span className="text-indigo-600">GRiD</span>
              </span>
            </a>
        
        
           
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <nav className="flex flex-wrap justify-center items-center mb-0 text-base  md:border-gray-200">
              <a
                href="#_"
                className="mr-1 text-2xl font-medium leading-6 text-gray-600 hover:text-white"
              >
                Home
              </a>
              <a
                href="#features"
                className="mr-1 text-2xl font-medium leading-6 text-gray-600 hover:text-white"
              >
                Features
              </a>
              <a
                href="#usecases"
                className="mr-1 text-2xl font-medium leading-6 text-gray-600 hover:text-white"
              >
                Use-Cases
              </a>
              
            </nav>
            <a
                   href="/register"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Let's Go, See Future
            </a>
          </div>
        </div>
      </section>

      <section className="px-2 py-32 bg-black md:px-0 overflow-x-hidden">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap justify-between items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <TypeAnimation
                    sequence={[
                      "",
                      10,
                      "",
                      20,
                      "Transforming Grids !",
                      3000,
                      () => {
                        
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="block text-yellow-400"
                  />

                  <TypeAnimation
                    sequence={[
                      "Transforming",
                      1000,
                      "Transforming Lives !",
                      2000,
                      "Transforming",
                      () => {
                        console.log("Sequence completed");
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="block text-indigo-600"
                  />
                </h1>
                <p className="mx-auto text-base text-white sm:max-w-md lg:text-3xl md:max-w-3xl">
                  The <span className="font-bold text-blue-700">Eco-GRiD </span>
                  platform enables efficient energy source management through
                  its energy trading marketplace.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <ConnectButton />
                    
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-end">
              <div className="w-full  h-auto overflow-hidden rounded-sm">
                <FaSuperpowers color="#00C5CD" size={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black" id="features">
        <div className="box-border flex flex-col items-center content-center  mx-auto leading-6 text-black  md:flex-row max-w-7xl mb-10">
          <div className="box-border relative w-full max-w-md mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="https://cdn.devdojo.com/images/december2020/productivity.png"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 mb-8"
              alt="name"
              style={{ width: "100%" }}
            />
          </div>

          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none mt-8">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Boost Productivity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-white border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Achieving complete decentralization, P2P trading, transparency,
              and optimal energy use fosters sustainability and self-reliance in
              our energy system.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Complete Decentralization: Energy grid without central control.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Peer-to-Peer Energy Trading: Direct energy exchange between Sub
                Grid.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Transparency and Accountability: Open, traceable energy
                transactions.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-500 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Optimal energy use and Sustainable, self-reliant energy system.
              </li>
            </ul>
          </div>
        </div>

        <div className="box-border mb-10 flex flex-col items-center content-center px-8 mx-auto mt-5 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 ">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Features Provides
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-white border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Prosumer Empowerment

              </li>
              <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Real-time Monitoring

              </li>
              <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Automated Settlements
              </li>
            </ul>
          </div>

          <div className="box-border relative w-full max-w-md md:ml-6 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-2/3">
            <img
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              alt="name"
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </section>

      <section className="py-20  bg-black container mx-auto">
        <div className="container items-center max-w-6xl px-8 mx-5">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Decentralized Renewable Energy Trading Marketplace!
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  
                </p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span className="font-medium text-white">
                    Cross-Border P2P Trading: Facilitates renewable energy exchange between different nations' grids.

                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span className="font-medium text-white">
                    P2G and G2P Transactions: Enables prosumers to sell excess energy to the grid and vice versa.

                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="font-medium text-white">
                  Blockchain Trust: Utilizes blockchain for secure, transparent, and immutable transaction records.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="section2 mx-auto bg-black flex justify-center items-center" id="usecases">
        <div className="features flex flex-wrap">
          
          <div className="tile real-time">
            <img
              src="https://raw.githubusercontent.com/hammercait/fylo-dark-theme-landing-page/658fd0afb4462e6a7e94996ab981bb7d5b336997/images/icon-collaboration.svg"
              alt="clock icon"
            />
            <h3 className="mt-4 font-bold uppercase text-yellow-300">
            Prosumer-to-Grid and Grid-to-Prosumer Trading (P2G and G2P)
            </h3>
            <p className="mt-4">
            Allowing prosumers, such as households with solar panels etc to sell excess energy generated from renewable sources (P2G) to the central grid, contributing to clean energy generation. 
            </p>
          </div>
          <div className="tile access">
            <FiSun size={100} color="teal" />
            <h3 className="mt-4 font-bold text-yellow-300 uppercase">
            One Sun One World One Grid
            </h3>
            <p className="mt-4">
            Promoting The One Sun One World One Grid (OSOWOG), a transnational electricity grid supplying power all over the world. The idea initiated by  the International Solar Alliance (ISA) in 2018.
            </p>
          </div>
          
          <div className="tile security">
           <PiGitDiffLight size={100} color="teal" />
            <h3 className="mt-4 font-bold uppercase text-yellow-300">
            Cross-Border Energy Trading (P2P)
            </h3>

            <p className="mt-4">
            Promoting
neighboring countries with interconnected energy grids to engage in cross-border energy trading.

            </p>
          </div>
          <div className="tile storage">
            <TbBusinessplan size={100} color="teal" />
            <h3 className="mt-4 font-bold uppercase text-yellow-300">
            Unlocking business potential
            </h3>
            <p className="mt-4">
         Empowering producers to profit from one-time investments, such as solar, through peer-to-peer transactions.
            </p>
          </div>
        </div>
      </div>
      <section className="flex items-center justify-center py-20 bg-black min-w-screen">
        <div className="px-16 bg-black">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
              Don't just take our word for it
            </p>

            <h2 className="relative flex mt-5 items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              See what others are saying
            </h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

            <div className="items-center justify-center w-full mt-20 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                      className="object-cover w-full h-full"
                      alt="name"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-white">John Doe</h4>
                    <p className="text-white">CEO of Something</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-white">
                  "This is a no-brainer if you want to take your business to the
                  next level. If you are looking for the ultimate toolset, this
                  is it!"
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-white">Jane Doe</h4>
                    <p className="text-white">CTO of Business</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-white">
                  "Thanks for creating this service. My life is so much easier.
                  Thanks for making such a great product."
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-white">John Smith</h4>
                    <p className="text-white">Creator of Stuff</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-white">
                  "Packed with awesome content and exactly what I was looking
                  for. I would highly recommend this to anyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Team
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Kali-Decoder</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Eco-GRiD, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
