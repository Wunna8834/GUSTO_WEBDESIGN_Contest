import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Landing } from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/main' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
