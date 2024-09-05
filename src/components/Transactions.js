import React from "react";
import Transaction from "./Transaction";
import { getMyTransactions } from "../API/auth";

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
  ];

  //   const {data: transactions} = useQuery({
  //     queryKey: ["getMyTransactions"],
  //     queryFn: getMyTransactions
  // })

  const transactionsList = transactions.map((transaction) => (
    <Transaction transaction={transaction} />
  ));

  return (
    <>
      <div>
        <fieldset className="flex">
          <legend>Filter:</legend>
          <div>
            <input type="radio" id="all" name="filter" value="all" checked />
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

        <div className="flex flex-col items-center gap-10 mt-10">
          {transactionsList}
        </div>
      </div>
    </>
  );
};

export default Transactions;
