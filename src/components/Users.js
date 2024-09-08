import React, { useState } from 'react'
import { getAllUsers } from '../API/auth'
import { useQuery } from '@tanstack/react-query'
import UserItem from './UserItem'
import TransferModal from './TransferModal'
const Users = () => {
    const [showModal, setShowModal] = useState(false)
    
  return (
    <>
    <div  className= ''>
    <div className='flex-row items-center justify-center '>
    <h1>Users</h1>
    </div>
    <div className='flex justify-center '>
        
        <div>
            <UserItem setShowModal={setShowModal}/>
            <TransferModal showModal={showModal} setShowModal={setShowModal} />

           
        </div>
    </div>
    </div>

    
    </>
  )
}

export default Users;