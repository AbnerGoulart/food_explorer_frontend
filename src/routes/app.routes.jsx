import { Routes, Route, useNavigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Menu } from '../pages/Menu'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { RedirectToHome } from '../pages/RedirectToHome'

export function AppRoutes(){
  const { type } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/new' element={type == "admin" ? <NewDish /> : <RedirectToHome />} />
      <Route path='/edit/:id' element={type == "admin" ? <EditDish /> : <RedirectToHome />} />
    </Routes>
  )
}