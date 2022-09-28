import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import HomePage from '../components/HomePage'
import ProfilePage from '../components/ProfilePage'
import Footer from './Footer'
import Header from './Header'

const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={ <HomePage />}/>
        <Route path="/profile/:id"  element={ <ProfilePage/>} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default CustomRouter