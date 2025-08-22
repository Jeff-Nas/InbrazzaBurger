import { Routes, Route } from 'react-router-dom'

import './styles.css'
import Home from './pages/Home'

function App() {

  return (
    <main className='min-h-[80vh]'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
