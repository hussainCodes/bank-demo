import React from "react";
import Transaction from "./Transaction";
import { getMyTransactions } from "../API/auth";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const Transactions = () => {
  const transactions = [
    {
      amount: 200,
      date: "10-7-1878",
      type: "withdraw",
    },
    {
      amount: 548,
      date: "2-9-2055",
      type: "deposit",
    },
    {
      amount: 120,
      date: "1-12-2030",
      type: "withdraw",
    },
    {
      amount: 200,
      date: "10-7-1878",
      type: "withdraw",
    },
    {
      amount: 548,
      date: "2-9-2055",
      type: "deposit",
    },
    {
      amount: 120,
      date: "1-12-2030",
      type: "withdraw",
    },
  ];

  //   const {data: transactions} = useQuery({
  //     queryKey: ["getMyTransactions"],
  //     queryFn: getMyTransactions
  // });

  const transactionsList = transactions.map((transaction) => (
    <Transaction transaction={transaction} />
  ));

  return (
    <>
      <div>
        <fieldset className="flex justify-center gap-3">
          <div>Filter:</div>
          <div>
            <input type="radio" id="all" name="filter" value="all" />
            <label for="all">All</label>
          </div>
          <div>
            <input type="radio" id="deposits" name="filter" value="deposits" />
            <label for="deposits">Deposits</label>
          </div>
          <div>
            <input
              type="radio"
              id="withdraws"
              name="filter"
              value="withdraws"
            />
            <label for="withdraws">Withdraws</label>
          </div>
        </fieldset>
        <div className="flex justify-center">
          <input type="radio" id="date" name="filter" value="date" />
          <label for="date">By Date:</label>

          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2000-01-01"
            max="2030-12-31"
            disabled
          />
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2000-01-01"
            max="2030-12-31"
            disabled
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
