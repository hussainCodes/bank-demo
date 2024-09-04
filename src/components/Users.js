import React from 'react'
import { getAllUsers } from '../API/auth'
import { useQuery } from '@tanstack/react-query'
const Users = () => {
    const {data} = useQuery({
        queryKey:["users"],
        queryFn: getAllUsers,
    })
  return (
    <div>Users</div>
  )
}

export default Users