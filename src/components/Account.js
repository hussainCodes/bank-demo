import React from "react";

const Account = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh] gap-20 font-serif">
        <div className="flex flex-col items-center border border-dashed border-gray-400 p-16 rounded-2xl">
          <h1 className="text-lg">Your balance:</h1>
          <h3 className="text-3xl">30,000.00</h3>
        </div>
        <div>
          <fieldset className="border border-dashed border-gray-400 p-10 rounded-2xl font-serif">
            <legend>Make a transaction:</legend>
            <div className="flex flex-col gap-5">
              <div className="flex justify-center gap-5">
                <div>
                  <input
                    className=""
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
              </div>
              <div>
                <input
                  className="border border-black-100  rounded-sm "
                  placeholder="Enter the amount ..."
                />
              </div>
              <div>
                <button
                  className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Account;
