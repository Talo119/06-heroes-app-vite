import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { Navbar } from '../ui/components'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='/login' element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } 
            />

            <Route path='/*' element={
                <PrivateRoute>
                  <HeroesRoutes />
                </PrivateRoute>
              } 
            />

            
        </Routes>
    </>
  )
}
