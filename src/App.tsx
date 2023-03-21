import { useState } from 'react'
import './App.css'
import TrendingIcon from './assets/trendingIcon.png'
import CryptoCard from './components/CryptoCard'


function App() {


  return (
    <>
      <div className='header-container'>

      <div className='header-icon'>
        <img src={TrendingIcon} width={16} height={16}/>
      </div>
      <div className='header-style'>
        Trending Assests
        </div>
      </div>
      <div className='card-carousel'>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
        <CryptoCard/>
      </div>
      </>
  )
}

export default App
