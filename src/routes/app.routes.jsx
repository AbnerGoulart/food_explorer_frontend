import { Routes, Route, useNavigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Menu } from '../pages/Menu'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function AppRoutes(){
  const { type } = useContext(AuthContext)
  const navigate = useNavigate()

  const returToHome = () => {
    alert("Usuário não autenticado")
    return <Route path='/' element={<Home />} />
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/menu' element={<Menu />} />
      {type === "admin" ? <Route path='/new' element={<NewDish />}/> : returToHome}
      {type === "admin" ? <Route path='/edit/:id' element={<EditDish />}/> : null}
    </Routes>
  )
}