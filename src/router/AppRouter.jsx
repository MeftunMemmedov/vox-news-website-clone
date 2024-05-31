import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Politics from '../pages/Politics'
import Culture from '../pages/Culture'
import Science from '../pages/Science'
import Money from '../pages/Money'
import Health from '../pages/Health'
import Technology from '../pages/Technology'
import NewsDetails from '../pages/NewsDetails'
import Login from '../pages/Login'
import Author from '../Author/Author'

import NewsList from '../Author/NewsList'
import AddNews from '../Author/AddNews'
import Authors from '../pages/Authors'

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
        <Route path='/login' element={<Login />} />

          <Route path='/author' element={<Author/>} />
          <Route path='/addnews' element={<AddNews />}/>
          <Route path='/news/:id' element={<NewsDetails/>} />
          <Route path='/author/:name' element={<NewsList/>} />
          <Route path='/authors/:name' element={<Authors/>} />

      </Routes>
    </>
  )
}

export default AppRouter
