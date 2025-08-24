import { Routes, Route } from 'react-router-dom'
import { StorePage } from './pages/StorePage'

import './styles.css'
import Home from './pages/Home'

function App() {

  return (
    <main className='min-h-[80vh] font-montserrat'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/inbrazzaburger" element={<StorePage />} />
      </Routes>
    </main>
  )
}

export default App
