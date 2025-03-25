import React, {useState, useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import VehiclePanel from '../components/VehiclePanel'
import LocationSearchPanel from '../components/LocationSearchPanel'
import ConfirmRide from '../components/COnfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import axios from 'axios';

function Home() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [ activeField, setActiveField ] = useState(null)
  const [fare, setFare] = useState({distance: '0', time: '0', fares: {car: '0', auto: '0', motorcycle:'0'}});
  const [vehicleType, setVehicleType] = useState('')

  const waitingForDriverRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
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


  useGSAP(() => {
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
    
  }, [confirmRidePanel])


  useGSAP(() => {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }    
  }, [vehicleFound])

  useGSAP(() => {
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
    
  }, [waitingForDriver])

  

  const handlePickupChange = async (e) => {
    
    setPickup(e.target.value)
    
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        
        setPickupSuggestions(response.data)
        
    } catch(error) {
        // handle error
        console.log(error);
        
    }
}

const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    // console.log(destination);
    
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(response);
        
        setDestinationSuggestions(response.data)
    } catch(error) {
        // handle error
        console.log(error);
        
    }
}

const findTrip = async () => {
  setVehiclePanel(true)
  setPanelOpen(false);
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/rides/get-fare`,{
    params : {pickup, destination},
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  setFare(response.data)
}


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
            <div className='line absolute h-15 w-[3px] top-23 left-9.5 rounded-2xl bg-gray-800'></div>
            <input
              onClick={() => {
                  setPanelOpen(true)
                  setActiveField('pickup')
              }}
              value={pickup}
              onChange={handlePickupChange}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
              type="text"
              placeholder='Add a pick-up location'
            />
            <input
              className="bg-[#eee] w-full px-10 py-2 my-2 text-lg rounded-lg"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              onChange={handleDestinationChange}
            />
            <button 
            onClick={findTrip}
            className='w-full my-2 rounded-lg bg-black text-white py-3 text-lg font-semibold'
            >Continue</button>
          </form>
        </div>
        <div
        className="bg-white h-[60%]"
        ref={panelRef}
        >
        <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
        />
        </div>
      </div>
      <div 
      className='fixed z-10 bottom-0 bg-white p-3 w-full translate-y-full' 
      ref={vehiclePanelRef}
      >
      <VehiclePanel setVehicleType={setVehicleType} setConfirmRidePanel = {setConfirmRidePanel} setVehiclePanel = {setVehiclePanel} fare={fare} setPanelOpen={setPanelOpen}/>
      </div>
      <div 
      className='fixed z-10 bottom-0 bg-white p-3 py-7 w-full translate-y-full' 
      ref={confirmRidePanelRef}
      >
      <ConfirmRide pickup={pickup} destination={destination} vehicleType={vehicleType} setConfirmRidePanel = {setConfirmRidePanel} setVehiclePanel = {setVehiclePanel} fare={fare} setVehicleFound = {setVehicleFound}/>
      </div>
      <div 
      className='fixed z-10 bottom-0 bg-white p-3 py-7 w-full translate-y-full' 
      ref={vehicleFoundRef}
      >
        <LookingForDriver pickup={pickup} destination={destination} vehicleType={vehicleType} fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehicleFound = {setVehicleFound}/>
      </div>
      <div 
      className='fixed z-10 bottom-0 bg-white p-3 py-7 w-full translate-full' 
      ref={waitingForDriverRef}
      >
        <WaitingForDriver setWaitingForDriver = {setWaitingForDriver}/>
      </div>
    </div>
  )
}

export default Home