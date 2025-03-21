import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
        <h3 
        onClick={() => {
            props.setRidePopupPanel(false)
        }}
        className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
            <i className="text-gray-300 ri-arrow-down-wide-line"></i>
        </h3>
        <div className='mb-7 mt-2 p-1'><h1 className='text-2xl font-semibold'>New ride available</h1></div>


        <div className='bg-green-100 rounded-3xl p-4 flex justify-between -mt-3 items-center'>
            <div className='flex items-center gap-3'>
                <img className='rounded-full h-20 w-20 object-cover' src="https://imgs.search.brave.com/BT8cpxPRSCshjiKtMTHN99F7dUZjHkX4Em7P3vxaTT8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzcyLzMyLzE5/LzM2MF9GXzQ3MjMy/MTkxNV9Bbk5uQkpU/b0dvMVZGUVpJMDZ4/eGFJeXlic0R1d21G/Ty5qcGc" alt="" />
                <h2 className='text-lg font-medium'>Stephen Burg</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>


        <div className='flex gap-2 justify-center flex-col items-center'>        
          {/* <img className='h-40' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" /> */}

            

            <div className='w-full'>

            <div className='flex border-b-2 border-gray-300 items-center gap-5 p-3'>
              <i className="ri-map-pin-2-line text-2xl"></i>
              <div>
                <h3 className='text-xl  font-semibold'>N12 C130</h3>
                <p className='text-base -mt-1 text-gray-700'>Hudco, Abad</p>
              </div>
            </div>
            <div className='flex border-b-2 border-gray-300 items-center gap-5 p-3'>
                <i className="ri-map-pin-user-line text-2xl"></i>
                <div>
                  <h3 className='text-xl  font-semibold'>N12 C130</h3>
                  <p className='text-base -mt-1 text-gray-700'>Hudco, Abad</p>
                </div>
            </div>
            <div className='flex border-b-2 border-gray-300 items-center gap-5 p-3'>
              <i className="ri-currency-fill text-2xl text-green-600"></i>              
              <div>
                <h3 className='text-xl  font-semibold'>$20.5</h3>
                <p className='text-base -mt-1 text-gray-700'>Cash</p>
              </div>
            </div>
            
          </div>
          <div className='flex w-full mt-3 -mb-2'>
            <button onClick={() => {
                props.setConfirmRidePopupPanel(true)
            }} className='w-full m-1.5 rounded-lg bg-green-600 py-3 text-white text-lg font-semibold'>Confirm</button>
            <button onClick={() => {
                props.setRidePopupPanel(false)
            }} className='w-full m-1.5 rounded-lg bg-red-700 py-3 text-white text-lg font-semibold'>Ignore</button>
          </div>
          
        </div>
    </div>
  )
}

export default RidePopup