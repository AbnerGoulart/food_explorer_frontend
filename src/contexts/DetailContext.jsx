import React, {createContext, useState, useEffect} from 'react'
import { api } from '../api'

export const DetailContext = createContext()

export function DetailProvider({ children }) {
  const [dish, setDish] = useState({})

  const fetchData = () => {
    api.get('/dishes/details/1')
    .then(response => {
      setDish(response.data)
    })
    .catch(error => console.error("erro ao carregar prato", error))
  }

  useEffect (() => {
    fetchData()
  }, [])

  return (
    <DetailContext.Provider value={dish} >
      {children}
    </DetailContext.Provider>
  )
}