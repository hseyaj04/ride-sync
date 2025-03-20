import React from 'react'

const WaitingForDriver = () => {
  return (
    <div className='mb-10'>
      {/* remove drop down in production */}
        <h3 
        onClick={() => {
            props.setWaitingForDriver(false)
        }}
        className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
            <i className="text-gray-300 ri-arrow-down-wide-line"></i>
        </h3>

        <div className='flex items-center justify-between'>
          <img className='h-20' src="https://imgs.search.brave.com/ZSfOBcRenS59ty2hfRYzRQNa1Z_44aCWpo3cH6-Fe34/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvRHJp/dmVyLVBORy1JbWFn/ZS1IRC5wbmc" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-semibold'>Captain 123</h2>
            <h4 className='font-semibold -mt-1 text-xl'>MH01 FM1234</h4>
            <p className='text-medium -mt-1 text-gray-800'>Audi Q4</p>
          </div>
        </div>

        <div className='flex gap-2 justify-center flex-col items-center'>        
        
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
        </div>
    </div>
  )
}

export default WaitingForDriver