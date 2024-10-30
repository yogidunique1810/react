import { useState } from 'react'
import './App.css'
import Product from './pages/Product'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Cart from './pages/Cart'
import RootLayout from './RootLayout'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  ))

  return (
    <>
    
      <div className='container' style={{margin:'30px auto'}}>
      <RouterProvider router={router}/>
      
      </div>
    </>
  )
}

export default App
