import React from 'react'
import { Header } from './components/Header'

function App () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }}>
      <Header />
      <div className='banner' style={{
        justifyContent: 'center'
      }}>
        <img src='./assets/Banner.png' alt='' />
      </div>
    </div>
  )
}

export default App
