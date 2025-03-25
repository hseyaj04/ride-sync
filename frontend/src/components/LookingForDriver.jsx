import React from 'react'

const LookingForDriver = (props) => {

  const fares = props.fare.fares;
  console.log(fares[props.vehicleType]);
  

  return (
    <div className='mb-10'>
      {/* remove drop down in production */}
        <h3 
        onClick={() => {
            props.setVehicleFound(false)
            props.setConfirmRidePanel(true)
        }}
        className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
<i className="text-gray-300 ri-close-line"></i>            <i className="text-gray-300 ri-close-line"></i>
        </h3>
        <div className='mb-7 mt-2 p-1'><h1 className='text-2xl font-semibold'>Looking for driver</h1></div>


        <div className='flex gap-2 justify-center flex-col items-center'>        
          <img className='h-40' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
        
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
                <h3 className='text-xl  font-semibold'>{fares[props.vehicleType]}</h3>
                <p className='text-base -mt-1 text-gray-700'>Cash</p>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default LookingForDriver