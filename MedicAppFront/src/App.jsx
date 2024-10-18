import { useState } from 'react'

import './App.css'
import Inicio from './components/inicio.jsx'
import ImagenTelemedicina from './components/ImagenTelemedicina.jsx'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './core/routes/AppRouter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      {/* <Inicio>TELEMEDICINA</Inicio>
      <ImagenTelemedicina></ImagenTelemedicina> */}
      <RouterProvider router={AppRouter}></RouterProvider>
    </>
  )
}

export default App
