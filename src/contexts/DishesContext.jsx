import React, { createContext, useState, useEffect } from 'react';
import { api } from '../services/api'
import { useParams, useSearchParams } from 'react-router-dom';

export const DishesContext = createContext();

export function DishesProvider ({children}) {
  const [ menu, setMenu ] = useState(null)
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q")

  useEffect (() => {
    fetchData()
  }, [])

  const fetchData = () => {
    const path = searchTerm ? `dishes/?q=${searchTerm}` : '/dishes'
    api.get(path)
    .then(response => {
      setMenu(response.data)
    })
    .catch(error => console.error("Erro ao buscar pratos:", error))
  }

  return (
    <DishesContext.Provider value={{menu, setMenu}} >
      {children}
    </DishesContext.Provider>
  )
}