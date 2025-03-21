
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    
    axios.post(`${import.meta.env.VITE_API_URL}/captains/logout`, {},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    })
    .catch(e => {
      console.log(e);
      
    })

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout