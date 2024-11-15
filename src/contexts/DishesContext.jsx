import React, { createContext, useState, useEffect } from 'react';
import { api } from '../api'

export const DishesContext = createContext();

export function DishesProvider ({children}) {
  const [meals, setMeals] = useState({})
  const [mainDishes, setMainDishes] = useState(null)
  const [drinks, setDrinks] = useState(null)

  useEffect (() => {
    fetchData()
  }, [])

  const fetchData = () => {
    api.get('/dishes')
    .then(response => {
      setMeals(response.data.meals)
      setMainDishes(response.data.main_dishes)
      setDrinks(response.data.drinks)
    })
    .catch(error => console.error("Erro ao buscar pratos:", error))
  }

  const contextValue = { meals, mainDishes, drinks }

  return (
    <DishesContext.Provider value={contextValue} >
      {children}
    </DishesContext.Provider>
  )
}