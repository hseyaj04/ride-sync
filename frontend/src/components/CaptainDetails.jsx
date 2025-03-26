import React, { useContext } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
const CaptainDetails = () => {
  const {captain} = useContext(CaptainDataContext)
  console.log(captain);
  
  return (
    <div>
        <div className='mb-4 flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='rounded-full h-15 w-15 object-cover' src="https://img.freepik.com/free-photo/man-working-as-truck-driver-posing_23-2151489626.jpg?ga=GA1.1.23738412.1742279548&semt=ais_hybrid" alt="avatar" />
              <h4 className='text-lg font-medium capitalize'>{`${captain.fullname.firstname} ${captain.fullname.lastname}`}</h4>
            </div>
            <div>
              <h4 className='text-lg font-semibold'>$80</h4>
              <p className='text-sm font-semibold text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex mt-6 bg-gray-200 rounded-2xl justify-center gap-10 items-start'>
            <div className='text-center m-3'>
              <i className="text-4xl mb-2 font-thin ri-time-fill ri-time-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>online</p>
            </div>
            <div className='text-center m-3'>
              <i className="text-4xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Speed</p>
            </div>
            <div className='text-center m-3'>
              <i className="text-4xl mb-2 font-thin ri-booklet-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Notes</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails