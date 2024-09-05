import React, { useState } from 'react'
import { transfer } from '../API/auth'
import {  useMutation, useQueryClient } from '@tanstack/react-query'
const TransferModal = ({showModal,setShowModal}) => {
const [amount, setAmount] = useState()
const queryClient = useQueryClient();
const {mutate} = useMutation({
    mutationKey:["transfer"],
    mutationFn: ()=>transfer(amount),
    onSuccess:()=>{
        setShowModal(false);
        queryClient.invalidateQueries(["getAllUsers"])
    },
    onError:()=>{
        alert("Error!")
    }
})
  return (
    <div className='flex-row bg-slate-700 h-28 w-28 shadow-2xl self-center justify-center items-center'>
        <input />
        <button onClick={mutate}>
            Transfer
        </button>
    </div>
  )
}

export default TransferModal