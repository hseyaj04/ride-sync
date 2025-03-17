import React, {useContext, useState} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserProtectedWrapper({children}) {

    const token = localStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate() 
    const {user, setUser} = useContext(UserDataContext)
    
    
   
    
    if(!token){
        React.useEffect(() => {
            navigate('/user-login')
        }, [token])
    }

    axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            setUser(response.data.captain)
            setIsLoading(false)
        }
    }).catch((error) => {
        console.log(error);
        localStorage.removeItem('token')
        navigate('/user-login')
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }

  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper