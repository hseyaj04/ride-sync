import React from 'react'

function ConfirmRide(props) {

  const fares = props.fare.fares;
  // console.log(props.pickup);
  
  return (
    <div>
        <h3 
        onClick={() => {
            props.setConfirmRidePanel(false)
            props.setVehiclePanel(true)
        }}
        className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
          <i className="text-gray-300 ri-close-line"></i>        
        </h3>
        <div className='mb-7 mt-2 p-1'><h1 className='text-2xl font-semibold'>Confirm your ride</h1></div>


        <div className='flex gap-2 justify-center flex-col items-center'>        
          <img className='h-40' src="https://cdn.dribbble.com/userupload/20528862/file/original-97f1edb7479ab2e21831579239abd489.gif" alt="" />
        
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
          <button onClick={() => {
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
            props.createRide()
          }} className='w-full rounded-lg bg-green-600 p-2 text-white text-lg font-semibold'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide