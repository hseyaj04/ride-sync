import React, {useState, useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

function Home() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
  }



  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '60%',
        opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    }else{
      gsap.to(panelRef.current, {
        height:'0%'
      })
      gsap.to(panelCloseRef.current, {
        opacity:0
      })
    }
    
  }, [panelOpen] )


  useGSAP(() => {
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
    
  }, [vehiclePanel])

  return (
    <div className='h-screen relative'>
      <img className='w-20 ml-5 mt-4 absolute' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
      <div className='h-screen w-screen'>
        {/* Temp Img */}
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[25%] p-5 bg-white relative rounded-t-lg'>
          <h5 
          className='absolute opacity-0 top-5 right-6 text-3xl'
          ref={panelCloseRef}
          onClick={() => {
            setPanelOpen(false)
          }}
          >
            <i className="ri-arrow-down-s-fill"></i>
          </h5>
          <h4 className='font-semibold text-3xl mb-4'>Find a trip</h4>
          <form className='' onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-18 w-[4px] top-24 left-9.5 rounded-3xl bg-gray-800'></div>
            <input 
            className='bg-[#eee] w-full px-10 py-2 my-2 text-lg rounded-lg' 
            type="text" 
            placeholder='Add a pickup location' 
            value={pickup}
            onClick={() => {
              setPanelOpen(true)
            }}
            onChange={(e) => {
              setPickup(e.target.value)
            }}
            />
            <input 
            className='bg-[#eee] w-full px-10 py-2 my-2 text-lg rounded-lg' 
            type="text" 
            placeholder='Enter your destination' 
            value={destination}
            onClick={() => {
              setPanelOpen(true)
            }}
            onChange={(e) => {
              setDestination(e.target.value)
            }}
            />
          </form>
        </div>
        <div 
        className=' bg-white h-[60%]'
        ref={panelRef}
        >
          <LocationSearchPanel setVehiclePanel = {setVehiclePanel} setPanelOpen={setPanelOpen}/>
        </div>
      </div>
      <div 
      className='fixed z-10 bottom-0 bg-white p-3 w-full translate-y-full' 
      ref={vehiclePanelRef}
      >
      <h3 
      onClick={() => {
        setVehiclePanel(false)
      }}
      className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
        <i className="text-gray-300 ri-arrow-down-wide-line"></i>
      </h3>
        <div className='mb-7 mt-2 p-1'><h1 className='text-2xl font-semibold'>Select Vehicle</h1></div>

        <div className='active:border-black border-2 border-white  rounded-2xl px-1 py-3 flex items-center justify-between w-full mb-8'>
          <img className='h-20 m-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
          <div className='w-1/2 p-2'>
            <h4 className='font-medium text-lg'>Sedan <span><i className="ri-user-line"></i><i className="ri-user-line"></i><i className="ri-user-line"></i><i className="ri-user-line"></i></span></h4>
            <h5 className='font-medium text-sm'>10 mins away</h5>
            <p className='font-medium text-m text-gray-700'>Premium, sedan rides</p>
          </div>
          <h2 className='text-2xl font-semibold mr-6'>$20.5</h2>
        </div>

        <div className='active:border-black border-2 border-white  rounded-2xl px-1 py-3 flex items-center justify-between w-full mb-8'>
          <img className='h-20 m-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2 p-2'>
            <h4 className='font-medium text-lg'>Auto <span><i className="ri-user-line"></i><i className="ri-user-line"></i><i className="ri-user-line"></i></span></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-medium text-m text-gray-700'>Only for 3 people</p>
          </div>
          <h2 className='text-2xl font-semibold mr-6'>$10.58</h2>
        </div>

        <div className='active:border-black border-2 border-white  rounded-2xl px-1 py-3 flex items-center justify-between w-full mb-8'>
          <img className='h-20 m-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2 p-2'>
            <h4 className='font-medium text-lg'>Moped <span><i className="ri-user-line"></i></span></h4>
            <h5 className='font-medium text-sm'>5 mins away</h5>
            <p className='font-medium text-m text-gray-700'>Motercycle, helmet available</p>
          </div>
          <h2 className='text-2xl font-semibold mr-6'>$5.2</h2>
        </div>


      </div>
    </div>
  )
}

export default Home



