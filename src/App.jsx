import { useState } from 'react'
import Header from './Components/Header'
import Homepage from './Components/Homepage'

function App() {

  return (
    <>
      <div className='flex flex-col w-full h-auto'>
        <Header/>
        <Homepage/>
      </div>
    </>
  )
}

export default App
