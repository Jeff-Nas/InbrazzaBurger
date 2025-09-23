import './styles.css'
import { Routes, Route } from 'react-router-dom'
import { StorePage } from './pages/StorePage'
import Home from './pages/Home'
import { Product } from './pages/Product'

function App() {

  return (
    <main className='min-h-[80vh]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/inbrazzaburger" element={<StorePage />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </main>
  )
}

export default App
