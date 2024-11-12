import React, { createContext, useState, useEffect } from 'react';
import { api } from '../api'

export const DishesContext = createContext();

export function DishesProvider ({children}) {
  const [meals, setMeals] = useState({})
  const [mainDishes, setMainDishes] = useState(null)
  const [juices, setJuices] = useState(null)

  useEffect (() => {
    fetchData()
  }, [])

  const fetchData = () => {
    api.get('/dishes')
    .then(response => {
      setMeals(response.data.meals)
      setMainDishes(response.data.main_dishes)
      setJuices(response.data.juices)
    })
    .catch(error => console.error("Erro ao buscar pratos:", error))
  }

  const contextValue = { meals, mainDishes, juices }

  return (
    <DishesContext.Provider value={contextValue} >
      {children}
    </DishesContext.Provider>
  )
}