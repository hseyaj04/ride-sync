import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = (props) => {


  const [finishRide, setFinishRide] = useState(false)


  const finishRideRef = useRef(null)

  useGSAP(() => {
    if(finishRide){
      gsap.to(finishRideRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(finishRideRef.current, {
        transform: 'translateY(100%)'
      })
    }
    
  }, [finishRide])

  

  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between'>
        <Link to='../captain-login' className='fixed font-bold h-10 w-10 right-8 top-3 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-r-line"></i>
        </Link>
        <img className='ml-3 w-auto h-8 mt-1.5' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
      </div>
      <div className='h-5/6 w-screen'>
          {/* Temp Img */}
          <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg" alt="" />
      </div>
      <div 
      onClick={() => {
        setFinishRide(true)
      }}
      className='h-1/6 flex items-center justify-between p-6 bg-yellow-400 relative'>
        <h3 
          onClick={() => {
            props.setConfirmRidePopupPanel(false)
          }}
          className='w-full text-center absolute top-0 font-semibold text-2xl p-1 right-1'>
              <i className="text-black ri-arrow-down-wide-line"></i>
          </h3>
        <h4 className='font-semibold'>4 KM's away</h4>
        <button
        className='w-1/2 rounded-lg bg-green-600 p-2 text-white text-lg font-semibold'
        >Complete Ride</button>

      </div>
      <div 
      className='fixed h-screen z-10 bottom-0 bg-white p-3 py-7 w-full translate-full' 
      ref={finishRideRef}
      >
        <FinishRide setFinishRide={setFinishRide} />
      </div>

      

    </div>
  )
}

export default CaptainRiding