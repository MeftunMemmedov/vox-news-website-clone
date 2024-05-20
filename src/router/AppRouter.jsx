import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Politics from '../pages/Politics'
import Culture from '../pages/Culture'
import Science from '../pages/Science'
import Money from '../pages/Money'
import Health from '../pages/Health'
import Technology from '../pages/Technology'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/politics' element={<Politics />} />
        <Route path='/culture' element={<Culture />} />
        <Route path='/science' element={<Science/>} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/money' element={<Money />} />
        <Route path='/health' element={<Health />} />
        <Route path='/money' element={<Money />} />
      </Routes>
    </>
  )
}

export default AppRouter
