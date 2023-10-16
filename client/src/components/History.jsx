import React from "react";
import TransactionHistoryCard from "./TransactionHistoryCard";
const History = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-violet-500 w-full uppercase font-semibold  text-3xl mt-4 text-center">
          Transaction History
        </h1>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl mt-10">
          <TransactionHistoryCard id={1} amount={100} days={20} percentage={10} sell={true} />
          <TransactionHistoryCard id={2} amount={1000} days={10} percentage={5} sell={false}/>
          <TransactionHistoryCard id={3} amount={200} days={30} percentage={15} sell={true}/>
          <TransactionHistoryCard id={4} amount={200} days={30} percentage={15} sell={false}/>

          
        </div>
      </div>
    </>
  );
};

export default History;
