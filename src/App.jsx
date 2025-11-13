import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/HomePage'
 import Navbar from './components/Navbar'
 function App() {
   

  return (
    <>
   <main className='relative min-h-screen overflow-x-hidden '></main>  
 <Navbar />
 <Homepage/>
     </>
  )
}

export default App
