import React from 'react'

function VehiclePanel(props) {
  return (
    <div>
        <h3 
      onClick={() => {
        props.setVehiclePanel(false)
        props.setConfirmRidePanel(true)
      }}
      className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
        <i className="text-gray-300 ri-arrow-down-wide-line"></i>
      </h3>
        <div className='mb-7 mt-2 p-1'><h1 className='text-2xl font-semibold'>Select Vehicle</h1></div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='active:border-black border-2 border-white  rounded-2xl px-1 py-3 flex items-center justify-between w-full mb-8'>
          <img className='h-20 m-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
          <div className='w-1/2 p-2'>
            <h4 className='font-medium text-lg'>Sedan <span><i className="ri-user-line"></i><i className="ri-user-line"></i><i className="ri-user-line"></i><i className="ri-user-line"></i></span></h4>
            <h5 className='font-medium text-sm'>10 mins away</h5>
            <p className='font-medium text-m text-gray-700'>Premium, sedan rides</p>
          </div>
          <h2 className='text-2xl font-semibold mr-6'>$20.5</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='active:border-black border-2 border-white  rounded-2xl px-1 py-3 flex items-center justify-between w-full mb-8'>
          <img className='h-20 m-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2 p-2'>
            <h4 className='font-medium text-lg'>Auto <span><i className="ri-user-line"></i><i className="ri-user-line"></i><i className="ri-user-line"></i></span></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-medium text-m text-gray-700'>Only for 3 people</p>
          </div>
          <h2 className='text-2xl font-semibold mr-6'>$10.58</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className='active:border-black border-2 border-white  rounded-2xl px-1 py-3 flex items-center justify-between w-full mb-8'>
          <img className='h-20 m-1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2 p-2'>
            <h4 className='font-medium text-lg'>Moped <span><i className="ri-user-line"></i></span></h4>
            <h5 className='font-medium text-sm'>5 mins away</h5>
            <p className='font-medium text-m text-gray-700'>Motercycle, helmet available</p>
          </div>
          <h2 className='text-2xl font-semibold mr-6'>$5.2</h2>
        </div>
    </div>
  )
}

export default VehiclePanel