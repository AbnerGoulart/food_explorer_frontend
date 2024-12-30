import React, {createContext, useEffect, useState} from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider ({children}){
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    async function signIn(email, password){
      try {
        const response = await api.post('/session', { email: email, password: password });
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      } catch (error) {
        console.error(error.response.data.message);
      }
    }

    function signOut() {
      setUser(null);
      localStorage.removeItem('user');
      navigate("/")
    }

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, [])
  
  return (
    <AuthContext.Provider value={{
      user, 
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}