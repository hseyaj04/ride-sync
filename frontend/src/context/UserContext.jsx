import React, {useState} from 'react'


export const UserDataContext = React.createContext()


const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        fullname:{
            firstname: '',
            lastname: ''
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>


    </div>
  )
}

export default UserContext