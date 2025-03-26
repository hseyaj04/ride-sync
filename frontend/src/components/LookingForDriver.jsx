import React from 'react'

const LookingForDriver = (props) => {

  const fares = props.fare.fares;
  // console.log(fares[props.vehicleType]);
  

  return (
    <div>
      {/* remove drop down in production */}
        <h3 
        onClick={() => {
            props.setVehicleFound(false)
            props.setConfirmRidePanel(true)
        }}
        className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
          <i className="text-gray-300 ri-close-line"></i>
        </h3>
        <div className='mb-7 mt-2 p-1'><h1 className='text-2xl font-semibold'>Looking for driver</h1></div>


        <div className='flex gap-2 justify-center flex-col items-center'>        
          <img className='h-40' src="https://i.pinimg.com/originals/7c/ce/3b/7cce3b56008c7c99443a099cb167564d.gif" alt="" />
        
          <div className='w-full'>
            <div className='flex border-b-2 border-gray-300 items-center gap-5 p-3'>
                  <i className="ri-map-pin-user-line text-2xl"></i>
                  <div>
                    <h3 className='text-xl  font-semibold'>Pickup</h3>
                    <p className='text-base -mt-1 text-gray-700'>{props.pickup}</p>
                  </div>
              </div>
            <div className='flex border-b-2 border-gray-300 items-center gap-5 p-3'>
              <i className="ri-map-pin-2-line text-2xl"></i>
              <div>
                <h3 className='text-xl  font-semibold'>Destination</h3>
                <p className='text-base -mt-1 text-gray-700'>{props.destination}</p>
              </div>
            </div>
            
            <div className='flex border-b-2 border-gray-300 items-center gap-5 p-3'>
              <i className="ri-currency-fill text-2xl text-green-600"></i>              
              <div>
                <h3 className='text-xl  font-semibold'>₹{fares[props.vehicleType]}</h3>
                <p className='text-base -mt-1 text-gray-700'>Cash</p>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default LookingForDriver