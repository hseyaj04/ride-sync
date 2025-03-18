import React from 'react'

function LocationSearchPanel(props) {
  console.log(props);
  
  const locations = [
    "N12, C130 Swami Vivekanand Nagar, Aurangabad, Maharashtra", 
    "2456 Willowbrook Lane, Springfield, CA 94567", 
    "378 Elmhurst Road, Brookside, VT 05089", 
    "5210 Silverpine Circle, Willow Creek, TX 79834"
  ]
  return (
    <div>
            {
              locations.map((location, idx) => {
                return <div onClick={() => {props.setVehiclePanel(true); props.setPanelOpen(false)}} key={idx} className='mx-2 py-2 active:border-black border-2 border-white rounded-2xl flex items-center justify-start mb-7'>
                            <h4 className='text-xl mx-3 bg-gray-200 p-2 rounded-4xl'><i className="ri-map-pin-line"></i></h4>
                            <h4 className='font-semibold'>{location}</h4>
                        </div>
              })
            }
            
    </div>
  )
}

export default LocationSearchPanel