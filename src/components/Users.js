import React from 'react'
import { getAllUsers } from '../API/auth'
import { useQuery } from '@tanstack/react-query'

const Users = () => {
    const {data: users} = useQuery({
        queryKey:["users"],
        queryFn: getAllUsers,
    })
    console.log(users)
  return (
    <div  className= ''>
    <div className='flex-col justify-center '>
    <h1>Users</h1>
    </div>
    <div className='flex justify-center '>
        
        <div>
            {users?.map((user)=>{
            return    <div
                key={user.id}
                className='flex  justify-around items-center rounded-3xl   shadow-2xl w-[100vh] h-24 m-5'>
                    <img
                    src={"https://react-bank-project.eapi.joincoded.com/"+user.image}
                    alt='user'
                    className='self-center	h-20 w-20 rounded-full justify-start items-center'/>
                    
                        <h3 className=' w-fit h-fit'>
                            {user.username}
                            
                        </h3>
                        <h3 className=' w-fit h-fit'>
                           Balance: {user.balance}
                            
                        </h3>
                        
                        <button
                        className='bg-green-500 p-4 rounded-2xl'>Transfer</button>
                        
                </div>

})}
        </div>
    </div>
    </div>
  )
}

export default Users