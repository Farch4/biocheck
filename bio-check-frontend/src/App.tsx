import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Auth/Login'
import { Register } from './pages/Auth/Register'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

import { useAuth } from './hooks/useAuth'
import { EditProfile } from './pages/EditProfile/EditProfile'
import { Profile } from './pages/Profile/Profile'
import { Photo } from './pages/Photo/Photo'
import { Search } from './pages/Search/Search'

function App() {

  const {auth, loading} = useAuth()
  if(loading)console.log()

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={auth? <Home />: <Navigate to='/login' />} />
            <Route path='/profile' element={auth? <EditProfile />: <Navigate to='/login' />} />
            <Route path="/users/:id" element={<Profile />} />
            <Route path="/photos/:id" element={<Photo />} />
            <Route path="/search" element={<Search />} />
            <Route path='/login' element={!auth? <Login />: <Navigate to='/' />} />
            <Route path='/register' element={!auth? <Register />: <Navigate to='/' />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
