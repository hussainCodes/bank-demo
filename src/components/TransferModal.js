import React, { useState } from "react";
import { transfer } from "../API/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const TransferModal = ({ showModal, setShowModal, username }) => {
  const [amount, setAmount] = useState(0);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transfer(amount, username),
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries(["getAllUsers"]);
    },
    onError: () => {
      alert("Error!");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  if (!showModal) return null;
  return (
    // <div className="flex-row bg-slate-700 h-28 w-28 shadow-2xl self-center justify-center items-center">
    //   <input
    //     onChange={(e) => {
    //       setAmount(e.target.value);
    //     }}
    //   />
    //   <button onClick={mutate}>Transfer</button>
    //   <button onClick={() => setShowModal(false)}>close</button>
    // </div>

    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-white rounded-md shadow-md w-full max-w-md p-6 max-h-[70%]">
        <h2 className="text-3xl text-green-500 font-semibold mb-6">
          Transfer Amount
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white text-sm font-medium mb-2"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Transfer
            </button>
            <button
              type="submit"
              onClick={() => setShowModal(false)}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferModal;
