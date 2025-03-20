import React from 'react'
import {Link} from 'react-router-dom'
const Riding = () => {
  return (
    <div>
      <div className='h-screen w-full'>
        <Link to='../home' className='fixed block h-10 w-10 right-8 top-3 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-home-line"></i>
        </Link>
        <img className='w-20 ml-5 mt-4 absolute' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
        <div className='h-1/2 w-screen'>
          {/* Temp Img */}
          <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg" alt="" />
        </div>
        <div className='h-1/2 p-5'>
              <div className=''>
              {/* remove drop down in production */}
                {/* <h3 
                onClick={() => {
                    props.setWaitingForDriver(false)
                }}
                className='w-full text-center absolute top-0 font-semibold text-2xl p-1'>
                    <i className="text-gray-300 ri-arrow-down-wide-line"></i>
                </h3> */}

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

                    {/* <div className='flex border-b-2 border-gray-300 items-center gap-5 p-3'>
                      <i className="ri-map-pin-2-line text-2xl"></i>
                      <div>
                        <h3 className='text-xl  font-semibold'>N12 C130</h3>
                        <p className='text-base -mt-1 text-gray-700'>Hudco, Abad</p>
                      </div>
                    </div> */}
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
            <button className='w-full bottom-0 rounded-lg bg-green-600 p-2 text-white text-lg font-semibold'>Make a payment</button>
        </div>
      </div>
    </div>
  )
}

export default Riding