import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'





function CaptainHome() {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)




  const ridePopupRef = useRef(null)
  const confirmRidePopupRef = useRef(null)

  useGSAP(() => {
    if(ridePopupPanel){
      gsap.to(ridePopupRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(ridePopupRef.current, {
        transform: 'translateY(100%)'
      })
    }
    
  }, [ridePopupPanel])

  useGSAP(() => {
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(100%)'
      })
    }
    
  }, [confirmRidePopupPanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between'>
        <Link to='../captain-login' className='fixed font-bold h-10 w-10 right-8 top-3 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-r-line"></i>
        </Link>
        <img className='ml-3 w-auto h-8 mt-1.5' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
      </div>
      <div className='h-2/3 w-screen'>
          {/* Temp Img */}
          <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg" alt="" />
      </div>
      <div className='h-1/3 p-6'>
        <CaptainDetails />
      </div>

      <div 
      ref={ridePopupRef}
      className='fixed z-10 bottom-0 bg-white p-3 py-7 w-full translate-y-full'
      >
        <RidePopup setConfirmRidePopupPanel= {setConfirmRidePopupPanel} setRidePopupPanel= {setRidePopupPanel}/>
      </div>

      <div 
      ref={confirmRidePopupRef}
      className='fixed h-screen z-10 bottom-0 bg-white p-3 py-7 w-full translate-y-full'
      >
        <ConfirmRidePopup setConfirmRidePopupPanel= {setConfirmRidePopupPanel} setRidePopupPanel= {setRidePopupPanel}/>
      </div>

    </div>
  )
}

export default CaptainHome