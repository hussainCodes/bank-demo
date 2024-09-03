import React,{useState} from 'react'
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../API/auth';
const Login = () => {
    const [user, setUser] = useState({});
    const handleChange = (e)=>{
        if(e.target.name ==="image"){
            setUser({...user , [e.target.name]:e.target.files[0]})
        }else{
            setUser({...user, [e.target.name]:e.target.value})
        }
    }
    const {mutate} = useMutation({
        mutationKey:["login"],
        mutationFn:()=>loginUser(user)
    
        
    }) 
    const handleSubmit = (e)=>{
        e.preventDefualt();
        mutate();
        console.log(user);
        
    }
    
      return (
        <div className='bg-blue-300 justify-center flex items-center h-[100vh]'>
            <div className='border p-5 rounded-xl bg-white shadow-2xl'>
            <form onSubmit={handleSubmit}>
           <div className='flex flex-col gap-2 '>
           <h1 >Register</h1> 
           <div>
            <label>Username: </label>
           <input
           type='name'
           onChange={handleChange} 
           />
           </div>
           <div>
            <label>Password: </label>
           <input
           type="password"
           onChange={handleChange}
           className=''
           />
           </div>
         
           <button
           type='submit'
           className=''>
            Login
           </button>
           </div>
           </form>
           </div>
           
        </div>
      )
}

export default Login