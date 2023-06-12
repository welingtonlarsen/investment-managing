import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CreateBrokerageOrderPage } from './pages/create-brokerage-order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-teal-800 opacity-70">
      <CreateBrokerageOrderPage />
    </div>
  )
}

export default App
