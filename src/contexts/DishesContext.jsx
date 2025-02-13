import React, { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../services/api'
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const DishesContext = createContext();

export function DishesProvider ({children}) {
  const { user } = useContext(AuthContext)
  const [ menu, setMenu ] = useState(null)
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q")

  useEffect (() => {
    fetchDishes(searchTerm)
  }, [])

  const fetchDishes = (searchTerm) => {
    if (user) {
      const path = searchTerm ? `dishes/?q=${searchTerm}` : '/dishes'
      api.get(path)
      .then(response => {
        setMenu(response.data)
      })
      .catch(error => console.error("Erro ao buscar pratos:", error))
    }
  }

  return (
    <DishesContext.Provider value={{menu, setMenu, fetchDishes}} >
      {children}
    </DishesContext.Provider>
  )
}