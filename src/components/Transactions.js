import React from "react";

const Transactions = () => {
  return (
    <>
      <div>
        <fieldset>
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
      </div>
    </>
  );
};

export default Transactions;
