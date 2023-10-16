import React, { Fragment, useState } from "react";
import SubstationCard from "../components/base/SubstationCard";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import powerstations from "../data/powerstations.json";
import substations from "../data/substations.json";
import { useUserDataContext } from "../context/DataContext";
import {GiRollingEnergy} from "react-icons/gi";
const SubstationMarketPlace = () => {
  const [connectionTypeDown, setConnectionTypeDown] = useState(false);
  const [distanceBetween, setDistanceBetween] = useState(false);
  const [perUnitPriceDown, setPerUnitPriceDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData,setFilteredData]=useState([]);
  const [unitPriceHighLow, setUnitPriceHighLow] = useState(true);
  const [connectionType,setConnectionType] = useState("");
  const [distance,setDistance] = useState(0);

  const {GenerateInvoice} = useUserDataContext();
  const toggleDropdown = () => {
    setConnectionTypeDown(!connectionTypeDown);
  };
  const toggleDistanceDropdown = () => {
    setDistanceBetween(!distanceBetween);
  };
  const togglePerUnitDropdown = () => {
    setPerUnitPriceDown(!perUnitPriceDown);
  };
  let navigate = useNavigate();
  const { id } = useParams();
  const powerstation = powerstations.powerstations.filter(
    (item) => item.id === id
  )[0];
  const filterSubstations = substations.substations.filter(
    (item) => item.powerstation_id === id
  );

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
        <h1 id="header-text-second">
          <span className="text-blue-300">{powerstation.name}</span> <br />
          Sub-Stations
        </h1>
      </div>
      <div className="container mx-auto flex">
        <div className="relative w-56 mx-3">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
            checked={connectionTypeDown}
            
            onChange={(e)=>{
              setConnectionType(e.target.value);
              toggleDropdown();
            }}
          />
          <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-white ring-blue-400 peer-checked:ring"
          >
            Connection Type
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-gray-600 transition ${
              connectionTypeDown ? "peer-checked:rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul
            className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 ${
              connectionTypeDown
                ? "peer-checked:max-h-56 peer-checked:py-3"
                : ""
            }`}
          >
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
            1-10 kV AC
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              10-20 kV AC
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              20-Above kV AC
            </li>
          </ul>
        </div>
        <div className="relative w-56 mx-3">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-2"
            id="select-2"
            checked={distanceBetween}
            onChange={toggleDistanceDropdown}
          />
          <label
            htmlFor="select-2"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-white ring-blue-400 peer-checked:ring"
          >
            Near By Location
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-gray-600 transition ${
              distanceBetween ? "peer-checked:rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul
            className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 ${
              distanceBetween ? "peer-checked:max-h-56 peer-checked:py-3" : ""
            }`}
          >
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              1-10km
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              20-30km
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              30-Above
            </li>
          </ul>
        </div>

        <div className="relative w-56 mx-3">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-3"
            id="select-3"
            checked={perUnitPriceDown}
            onChange={togglePerUnitDropdown}
          />
          <label
            htmlFor="select-3"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-white ring-blue-400 peer-checked:ring"
          >
            Per Unit Price
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-gray-600 transition ${
              perUnitPriceDown ? "peer-checked:rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul
            className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 ${
              perUnitPriceDown ? "peer-checked:max-h-56 peer-checked:py-3" : ""
            }`}
          >
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              Low to High
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              High to Low
            </li>
          </ul>
        </div>
      </div>
      <div className="grid mt-0 grid-cols-4 gap-4 container mx-auto">
        {filterSubstations.map((item, i) => {
          return <SubstationCard setIsOpen={setIsOpen} key={i} item={item} />;
        })}
      </div>

      {isOpen ? (
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0 transparent "
          id="modal"
        >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center backdrop-blur-md bg-white/30 border-2 border-blue-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="group relative w-full md:w-full lg:w-full mb-3">
                  <label
                    for="1"
                    class="block w-full pb-1 mb-3 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Number of Units
                  </label>
                  <input
                    id="1"
                    type="number"
                    class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
              </div>
              <div className="bg-black px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-times"></i> Cancel
                </button>
                <button
                   onClick={GenerateInvoice}
                  type="button"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                >
                  <i className="fas fa-plus"></i> Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Fragment>
      <div
        class="max-w-3xl mx-auto p-6  bg-white rounded shadow-sm my-6"
        id="invoiceCapture"
      >
        <div class="grid items-center">
          <div>
          <a
              href="/"
              className="flex mt-4 flex-col items-center mb-5 font-bold text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <GiRollingEnergy size={40} color="black" />
              <span
                className="mx-auto mt-1 text-blue-600 select-none"
                style={{ fontSize: "25px" }}
              >
                Eco
                <span className="text-indigo-800">-</span>
                <span className="text-indigo-600">GRiD</span>
              </span>
            </a>
        
          </div>
        </div>
        <div class="text-left mt-10">
          <p>Eco-Grid Inc.</p>
          <p class="font-bold text-gray-800">Bill From :</p>
          <p class="text-gray-500 text-sm">Solar Power Station A</p>
          <p class="text-gray-500 text-sm mt-1">Substation B</p>
          
        </div>
        <div class="grid grid-cols-2 items-center mt-8">
          <div>
            <p class="font-bold text-gray-800">Bill to :</p>
            <p class="text-gray-500">
              Laravel LLC.
              <br />
              102, Udaipur , Raj ,India
            </p>
            <p class="text-gray-500">info@user.com</p>
            <p class="font-bold text-gray-800 mt-3">Connection Type : 230V</p>
          </div>

          <div class="text-right">
            <p class="">
              Invoice number:
              <span class="text-gray-500">INV-2023786123</span>
            </p>
            <p>
              Invoice date: <span class="text-gray-500">04/10/2023</span>
              <br />

            </p>
          </div>
        </div>

        <div class="-mx-4 mt-8 flow-root sm:mx-0">
          <table class="min-w-full">
            <colgroup>
              <col class="w-full sm:w-1/2" />
              <col class="sm:w-1/6" />
              <col class="sm:w-1/6" />
              <col class="sm:w-1/6" />
            </colgroup>
            <thead class="border-b border-gray-300 text-gray-900">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Items
                </th>
                <th
                  scope="col"
                  class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                >
                  Amount
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="font-medium text-gray-900">
                    E-Trading Platform
                  </div>
                  <div class="mt-1 truncate text-gray-500">
                    Energy Trade Information.
                  </div>
                </td>
                <td class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                500.0
                </td>
                <td class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                ₹6
                </td>
                <td class="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                ₹3000.00
                </td>
              </tr>
            </tbody>
            <tfoot>
             
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                >
                  Total Tx Charge
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Tax
                </th>
                <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                ₹125
                </td>
              </tr>
              
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  class="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                >
                  Total
                </th>
                <th
                  scope="row"
                  class="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                >
                  Total
                </th>
                <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                ₹3125.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      </Fragment>
    </>
  );
};

export default SubstationMarketPlace;
