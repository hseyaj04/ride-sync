// import React, {useContext, useState} from 'react'
// import { CaptainDataContext } from '../context/CaptainContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// function CaptainProtectedWrapper({children}) {

//     const token = localStorage.getItem('token')
//     const [isLoading, setIsLoading] = useState(true)
//     const navigate = useNavigate() 
//     const {captain, setCaptain} = useContext(CaptainDataContext)
//     if(!token){
//         React.useEffect(() => {
//             navigate('/captain-login')
//         }, [token])
//     }

//     axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }).then((response) => {
//         if(response.status === 200){
//             setCaptain(response.data.captain)
//             setIsLoading(false)
//         }
//     }).catch((error) => {
//         console.log(error);
//         localStorage.removeItem('token')
//         navigate('/captain-login')
//     })

//     if(isLoading){
//         return <h1>Loading...</h1>
//     }

//   return (
//     <>
//         {children}
//     </>
//   )
// }

// export default CaptainProtectedWrapper


import React, { useContext, useState, useEffect } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CaptainProtectedWrapper({ children }) {
    const token = localStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { setCaptain } = useContext(CaptainDataContext)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
            return
        }

        const fetchCaptainProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                if (response.status === 200) {
                    setCaptain(response.data.captain)
                }
            } catch (error) {
                console.error(error)
                localStorage.removeItem('token')
                navigate('/captain-login')
            } finally {
                setIsLoading(false)
            }
        }

        fetchCaptainProfile()
    }, [token, navigate, setCaptain])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return <>{children}</>
}

export default CaptainProtectedWrapper