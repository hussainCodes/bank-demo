import React from "react";

const Account = () => {
  return (
    <>
      <div>
        <div>
          <h1>Your balance:</h1>
          <h3>30,000.00</h3>
        </div>
        <div>
          <fieldset>
            <legend>Make a transaction:</legend>
            <div>
              <input
                type="radio"
                id="deposit"
                name="transaction"
                value="deposit"
                checked
              />
              <label for="deposit">Deposit</label>
            </div>
            <div>
              <input
                type="radio"
                id="withdraw"
                name="transaction"
                value="withdraw"
              />
              <label for="withdraw">Withdraw</label>
            </div>
            <div>
              <input placeholder="Enter the amount ..." />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Account;
