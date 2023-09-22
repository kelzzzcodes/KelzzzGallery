import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Navbar, Footer, SignIn, SignUp } from './components'

import { Landing, Gallery } from './pages'
import { AuthProvider } from './auth'
import PublicRoute from '../src/components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <Landing />
          </PublicRoute>
        } />
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
      </Routes>

      <Footer />
    </AuthProvider>
  )
}

export default App
