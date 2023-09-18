import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Navbar,Footer } from './components'
 import Home from './pages/Home'


function App() {
  return (
    <>
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />

      </Routes>

      <Footer/>

    </>

  )
}

export default App
