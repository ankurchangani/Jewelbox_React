import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import topLogo from './assets/top-logo/top-logo.jpg'
import ProductPage from './components/ProductPage/ProductPage'
import ProductDetalis from './components/ProductDetalis/ProductDetalis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center'>
      <img src={topLogo} alt=""  />

    </div>

    <ProductPage/>

    <ProductDetalis/>
    
    </>
  )
}

export default App
