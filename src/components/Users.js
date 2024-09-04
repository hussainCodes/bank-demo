import React from 'react'
import { getAllUsers } from '../API/auth'
import { useQuery } from '@tanstack/react-query'
const Users = () => {
    const {data: users} = useQuery({
        queryKey:["users"],
        queryFn: getAllUsers,
    })
  return (
    <div className='flex justify-center'>
        <h1>Users</h1>
        <div>
            {users?.map((user)=>{
                <div
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
  )
}

export default Users