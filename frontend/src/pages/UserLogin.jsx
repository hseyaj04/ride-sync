import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'
import { useContext } from 'react'
const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, setUser} = useContext(UserDataContext)

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, newUser)
        if(response.status === 200){
            const data = response.data
            setUser(data.user);
            localStorage.setItem('token', data.token)
            navigate('/home');
            
        }
        
        // console.log(userData);
        
        setEmail('')
        setPassword('')        
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 pb-8' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
            <form onSubmit={submitHandler}>
                <h3 
                className='text-lg font-medium mb-2'
                >What's your email</h3>
                <input 
                className='bg-[#eeeeee] rounded mb-7 px-4 py-2  w-full text-lg placeholder:text-lg' 
                type="email" 
                required 
                placeholder='email@example.com' 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                />
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input 
                className='bg-[#eeeeee] rounded mb-7 px-4 py-2 w-full text-lg placeholder:text-lg' 
                type="password" 
                required 
                placeholder='password' 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                />
                <button className='bg-black font-semibold text-white rounded mb-3 px-4 py-2 border w-full text-lg placeholder:text-base'>Log in</button>
            </form>
            <p className='text-center'>New here? <Link
            to={'/user-register'}
                className='text-blue-600'
                >Create new Account</Link></p>
        </div>
        
        <div>
            <Link 
            to={'/captain-login'}
            className='bg-[#10b461] flex items-center justify-center font-semibold text-white rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as captain</Link>
        </div>
        
    </div>
  )
}

export default UserLogin