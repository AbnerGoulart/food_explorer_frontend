import React, { createContext, useState, useEffect } from 'react';
import { api } from '../api'

export const DishesContext = createContext();

export function DishesProvider ({children}) {
  const [dishes, setDishes] = useState(null)

  useEffect (() => {
    api.get('/dishes')
    .then(response => setDishes(response.data))
    .catch(error => console.error("Erro ao buscar pratos:", error))
  }, [])

  return (
    <DishesContext.Provider value={{dishes}} >
      {children}
    </DishesContext.Provider>
  )
}