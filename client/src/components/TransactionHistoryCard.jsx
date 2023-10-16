import React from "react";
import { Link } from "react-router-dom";
const TransactionHistoryCard = ({ amount, days, percentage, sell, id }) => {
  return (
    <>
      <Link
        to={`/transaction/${id}`}
        className="flex items-center p-4 bg-gray-900 rounded shadow-sm hover:shadow-2xl"
      >
        <div
          className={`flex flex-shrink-0 items-center justify-center ${
            sell ? "bg-green-200" : "bg-red-200"
          } h-16 w-16 rounded`}
        >
          {sell ? (
            <svg
              className="w-6 h-6 fill-current text-green-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              class="w-6 h-6 fill-current text-red-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-xl text-white font-bold">${amount}</span>
          <div className="flex items-center justify-between">
            <span className="text-white">Revenue last {days} days</span>
            <span
              className={`${
                sell ? "text-green-600" : "text-red-500"
              } font-bold ml-2`}

              style={{ fontSize: "1.2rem" }}
            >
              {sell ? "+" : "-"} {percentage}%
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TransactionHistoryCard;
