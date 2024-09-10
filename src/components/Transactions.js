import React, { useState } from "react";
import Transaction from "./Transaction";
import { getMyTransactions } from "../API/auth";
import { useQuery } from "@tanstack/react-query";

const Transactions = () => {
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const typeSelector = (e) => {
    setType(e.target.value);
  };

  const { data: transactions } = useQuery({
    queryKey: ["getMyTransactions"],
    queryFn: getMyTransactions,
  });

  const filterByDate = (transaction) => {
    const transactionDate = new Date(transaction.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && transactionDate < start) return false;
    if (end && transactionDate > end) return false;

    return true;
  };

  const transactionsList = transactions
    ?.filter((transaction) => {
      // Filter by type
      const typeMatches = type ? transaction.type.toLowerCase().includes(type.toLowerCase()) : true;
      // Filter by date
      const dateMatches = filterByDate(transaction);

      return typeMatches && dateMatches;
    })
    .map((transaction) => <Transaction transaction={transaction} key={transaction.id} />);

  return (
    <>
      <div>
        <fieldset className="flex justify-center gap-3">
          <div>Filter:</div>
          <div>
            <input type="radio" id="all" name="filter" value="" onClick={typeSelector} />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input type="radio" id="deposits" name="filter" value="deposit" onClick={typeSelector} />
            <label htmlFor="deposits">Deposits</label>
          </div>
          <div>
            <input
              type="radio"
              id="withdraws"
              name="filter"
              value="withdraw"
              onClick={typeSelector}
            />
            <label htmlFor="withdraws">Withdraws</label>
          </div>
        </fieldset>
        <div className="flex justify-center gap-3 ">
          
          <label htmlFor="date">By Date:  </label>

          <input
            type="date"
            id="start"
            name="start-date"
            value={startDate}
            min="2000-01-01"
            max="2030-12-31"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            id="end"
            name="end-date"
            value={endDate}
            min="2000-01-01"
            max="2030-12-31"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center gap-10 mt-10">
          {transactionsList}
        </div>
      </div>
    </>
  );
};

export default Transactions;
