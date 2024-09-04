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
    <div className='flex justify-center items-center'>
    <h1>Users</h1>
    </div>
    <div className='flex justify-center items-center'>
        
        <div className='bg-gray-600 w-80 h-80 '>
            {users?.map((user)=>{
            return    <div
                key={user.id}
                className=''>
                    <img
                    src={user.image}
                    alt='user'
                    className=''/>
                    <div>
                        <h3 className=''>
                            {user.name}
                        </h3>
                    </div>
                </div>

})}
        </div>
    </div>
    </div>
  )
}

export default Users