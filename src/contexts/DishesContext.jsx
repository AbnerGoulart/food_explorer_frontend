import React, { createContext, useState, useEffect } from 'react';
import { api } from '../api'

export const DishesContext = createContext();

export function DishesProvider ({children}) {
  const [ menu, setMenu ] = useState(null)

  useEffect (() => {
    fetchData()
  }, [])

  const fetchData = () => {
    api.get('/dishes')
    .then(response => {
      setMenu(response.data)
    })
    .catch(error => console.error("Erro ao buscar pratos:", error))
  }

  return (
    <DishesContext.Provider value={{menu}} >
      {children}
    </DishesContext.Provider>
  )
}