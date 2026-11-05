import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App