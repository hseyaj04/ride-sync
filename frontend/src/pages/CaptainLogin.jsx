import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainLogin = () => {        

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {captain, setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/login`, captain)
        console.log(response.status);
        
        if(response.status == 200){
            console.log("here");
            const data = response.data
            
            setCaptain(data.captain)
            
            
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }
        // console.log(userData);
        
        setEmail('')
        setPassword('') 
        console.log(localStorage.getItem('token'));
        
         
    }
    return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 pb-8' src="https://imgs.search.brave.com/6reAKp4Nc5LY57Y2lC3SwVkYq4JNcszeF2rjJjY34YE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvVWJl/ci1Mb2dvLVBORy1J/bWFnZS5wbmc" alt="" />
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
            <p className='text-center'>Join as Captain? <Link
            to={'/captain-register'}
                className='text-blue-600'
                >Create new Account</Link></p>
        </div>
        
        <div>
            <Link 
            to={'/user-login'}
            className='bg-[#10b461] flex items-center justify-center font-semibold text-white rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base'
            >Sign in as User</Link>
        </div>
        
    </div>
    )
    
}

export default CaptainLogin