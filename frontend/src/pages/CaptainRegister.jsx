import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainRegister = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const [color, setColor] = useState('')
    const [plate, setPlate] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [capacity, setCapacity] = useState(0)
    const {captain, setCaptain} = useContext(CaptainDataContext)
    
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();
        const newData = {
          fullname: {
            firstname: firstName,
            lastname: lastName
          },
          email: email,
          password: password,
          vehicle: {
            color: color,
            plate: plate,
            vehicleType: vehicleType,
            capacity: Number(capacity)
          }
        }

        console.log(newData);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/register`, newData)
        console.log(response);
        
        if(response.status === 201){
          const data = response.data
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
        // console.log(userData);
        
        setEmail('')
        setPassword('') 
        setColor('')
        setPlate('')
        setVehicleType('')
        setCapacity(0)
        setFirstName('')
        setLastName('')       
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

              <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
              <input 
              className='bg-[#eeeeee] rounded mb-5 px-4 py-2 w-full text-base placeholder:text-sm' 
              type="text" 
              required 
              placeholder='Vehicle Color' 
              onChange={(e) => {
                setColor(e.target.value);
              }}
              />
              <input 
              className='bg-[#eeeeee] rounded mb-5 px-4 py-2 w-full text-base placeholder:text-sm' 
              type="text" 
              required 
              placeholder='Vehicle Plate' 
              onChange={(e) => {
              setPlate(e.target.value);
              }}
              />
              <select 
              className='bg-[#eeeeee] rounded mb-5 px-4 py-2 w-full text-base placeholder:text-sm' 
              required 
              value={vehicleType}
              onChange={(e) => {
              setVehicleType(e.target.value); 
              }}
              >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>

              </select>
              <input 
              className='bg-[#eeeeee] rounded mb-5 px-4 py-2 w-full text-base placeholder:text-sm' 
              type="number" 
              required 
              placeholder='Vehicle Capacity' 
              onChange={(e) => {
              setCapacity(e.target.value);
              }}
              />

              <button className='bg-black font-semibold text-white rounded mb-3 px-4 py-2 border w-full text-lg placeholder:text-base'>Signup</button>
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