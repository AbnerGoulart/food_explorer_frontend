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
        handleToken(token)
        localStorage.setItem('token', token)
      } catch (error) {
        console.error(error.response.data.message);
      }
    }

    function handleToken(token) {
        const { sub } = jwtDecode(token)
        const {user_id, type} = JSON.parse(sub)
        setUser(user_id)
        setType(type)
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    function signOut() {
      localStorage.removeItem('token');
      delete api.defaults.headers.common["Authorization"];
      setUser("");
      setType(null)
      navigate("/")
    }

    useEffect(() => {
      const token = localStorage.getItem("token")

      if (token) {
        handleToken(token)
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