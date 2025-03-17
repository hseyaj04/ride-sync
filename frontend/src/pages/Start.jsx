import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='h-screen bg-cover bg-center bg-[url(https://imgs.search.brave.com/caeeH3_qMwQBDQLyum2jZ7WmA3KQK3L5bHjN8v3Mviw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4Lzlh/L2RiLzA4OWFkYjEy/ZmIxOTM1ZDRlYzYz/YzM3ODJhOTU4MDYw/LmpwZw)] pt-8 w-full justify-between flex-col flex bg-red-400'>
            <img className='w-16 ml-8' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
            <div className='bg-white pb-7 py-5 px-10 '>
                <h2 className='text-2xl font-semibold mt'>
                    Get Started with Uber
                </h2>
                <Link to={'/user-login'} className='flex items-center justify-center w-full py-4 bg-black text-white rounded-xl text-xl mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start