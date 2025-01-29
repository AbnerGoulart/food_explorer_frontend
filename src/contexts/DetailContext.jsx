import React, {createContext, useState, useEffect} from 'react'
import { api } from '../api'
import { useParams } from 'react-router-dom'

export const DetailContext = createContext()

export function DetailProvider({ children }) {
  // o hook useParams está capturando o valor do parâmetro id da URL da página
  const { id } = useParams()
  const [dish, setDish] = useState({})

  const fetchData = () => {
    api.get(`/dishes/details/${id}`)
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