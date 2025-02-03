import React, {createContext, useEffect, useState} from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export function AuthProvider ({children}){
    const [user, setUser] = useState(null)
    const [type, setType] = useState(null)
    const navigate = useNavigate()

    async function signIn(email, password){
      try {
        const response = await api.post('/session', { email: email, password: password });
        const { token } = response.data
        const user = jwtDecode(token)
        const {user_id, type} = JSON.parse(user.sub)
        console.log(user_id, type)
        setUser(user_id)
        localStorage.setItem('token', token)
        setType(type)

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      } catch (error) {
        console.error(error.response.data.message);
      }
    }

    function signOut() {
      localStorage.removeItem('token');
      setUser("");
      setType(null)
      navigate("/")
    }

    useEffect(() => {
      const token = localStorage.getItem("token")
      // const storedType = localStorage.getItem('type');

      if (token) {
        const { sub } = jwtDecode(token)
        const { user_id, type } =  JSON.parse(sub)
        setUser(user_id);
        setType(type);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      } else {
        setUser("");
      }
    }, [])
  
  return (
    <AuthContext.Provider value={{
      user,
      type, 
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}