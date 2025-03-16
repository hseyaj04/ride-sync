import React, {useState} from 'react'
import { Link } from 'react-router-dom'



const CaptainRegister = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullname: {
              firstname: firstName,
              lastname: lastName
            },
            email: email,
            password: password
        })
        // console.log(userData);
        
        setEmail('')
        setPassword('')        
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 pb-5' src="https://imgs.search.brave.com/6reAKp4Nc5LY57Y2lC3SwVkYq4JNcszeF2rjJjY34YE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvVWJl/ci1Mb2dvLVBORy1J/bWFnZS5wbmc" alt="" />
            <form onSubmit={submitHandler}>
              <h3 
              className='text-lg font-medium mb-2'
              >What's your name</h3>
              <div className='flex gap-4 mb-5'>
                <input 
                  className='bg-[#eeeeee] rounded px-4 py-2  w-1/2 text-lg placeholder:text-base' 
                  type="text" 
                  required 
                  placeholder='Firstname' 
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                  />
                  <input 
                  className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base' 
                  type="text" 
                  required 
                  placeholder='Lastname' 
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                  />
              </div>
              <h3 
              className='text-lg font-medium mb-2'
              >What's your email</h3> 
              <input 
              className='bg-[#eeeeee] rounded mb-5 px-4 py-2  w-full text-ls placeholder:text-base' 
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
              className='bg-[#eeeeee] rounded mb-5 px-4 py-2 w-full text-base placeholder:text-sm' 
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
            <p className='text-center'>Already have an account? <Link
            to={'/captain-login'}
                className='text-blue-600'
                >Login here</Link></p>
        </div>
        
        <div>
          <p className='text-[13px] leading-tight'>
          By signing up, you agree to our Privacy Policy. Your data is securely stored, used solely for account management and services, and never sold/shared without consent.
          </p>
        </div>
        
    </div>
  )
}

export default CaptainRegister