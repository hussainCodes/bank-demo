import { useQuery } from "@tanstack/react-query";
import React from "react";

const Transaction = ({ transaction }) => {
  const plusOrMinus = transaction.type == "withdraw" ? "-" : "+";

  if (transaction.type == "withdraw") {
    return (
      <>
        <div className="flex justify-between p-5 items-center border border-r-2 border-l-2 w-96 rounded-xl h-14 border-red-500">
          <div className="flex">
            <div>{plusOrMinus}</div>
            <div>{transaction.amount}</div>
          </div>
          <div>{transaction.createdAt.slice(0, 10)}</div>
          <div>{transaction.type}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-between p-5 items-center border border-r-2 border-l-2 w-96 rounded-xl h-14 border-green-500">
        <div className="flex">
          <div>{plusOrMinus}</div>
          <div>{transaction.amount}</div>
        </div>
        <div>{transaction.createdAt.slice(0, 10)}</div>
        <div>{transaction.type}</div>
      </div>
    </>
  );
};

export default Transaction;
