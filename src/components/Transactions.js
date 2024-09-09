import React, { useState } from "react";
import Transaction from "./Transaction";
import { getMyTransactions } from "../API/auth";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { useQuery } from "@tanstack/react-query";

const Transactions = () => {
  // const transactions = [
  //   {
  //     amount: 200,
  //     date: "10-7-1878",
  //     type: "withdraw",
  //   },
  //   {
  //     amount: 548,
  //     date: "2-9-2055",
  //     type: "deposit",
  //   },
  //   {
  //     amount: 120,
  //     date: "1-12-2030",
  //     type: "withdraw",
  //   },
  //   {
  //     amount: 200,
  //     date: "10-7-1878",
  //     type: "withdraw",
  //   },
  //   {
  //     amount: 548,
  //     date: "2-9-2055",
  //     type: "deposit",
  //   },
  //   {
  //     amount: 120,
  //     date: "1-12-2030",
  //     type: "withdraw",
  //   },
  // ];
//   const [query, setQuery] = useState("")
  const [type, setType] = useState("")
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const typeSelector = (e)=>{
    console.log(e.target.value)
    setType(e.target.value);
  }
  
  const { data: transactions } = useQuery({
    queryKey: ["getMyTransactions"],
    queryFn: getMyTransactions,
  });

//   const transactionsList = transactions?.map((transaction) => (
//     <Transaction transaction={transaction} />
//   ));

const transactionsList = transactions?.filter((transaction)=>{
    if(transaction.type.toLowerCase().includes(type.toLowerCase())){
      return true
    }}).map((transaction) => <Transaction transaction={transaction} key={transaction.id} />);

  return (
    <>
      <div>
        <fieldset className="flex justify-center gap-3">
          <div>Filter:</div>
          <div>
            
            <input type="radio" id="all" name="filter" value="" onClick={typeSelector}/>
            <label for="all">All</label>
          </div>
          <div>
            <input type="radio" id="deposits" name="filter" value="deposit" onClick={typeSelector}/>
            <label for="deposits">Deposits</label>
          </div>
          <div>
            <input
              type="radio"
              id="withdraws"
              name="filter"
              value="withdraw"
              onClick={typeSelector}
            />
            <label for="withdraws">Withdraws</label>
            
          </div>
        </fieldset>
        <div className="flex justify-center ">
          <input type="radio" id="date" name="filter" value="date" />
          <label for="date">By Date:</label>

          <input
            type="date"
            id="start"
            name="start-date"
            value={startDate}
            min="2000-01-01"
            max="2030-12-31"
            // disabled
            onChange={(e)=>setStartDate(e.target.value)}
          />
          <input
            type="date"
            id="end"
            name="end-date"
            value={endDate}
            min="2000-01-01"
            max="2030-12-31"
            // disabled
            onChange={(e)=>setEndDate(e.target.value)}
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
