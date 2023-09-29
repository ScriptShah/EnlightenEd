import React from 'react'
import Home from './components/Home'
import Courses from './components/Courses'
import Instructors from './components/Instructors'
import FeedBack from './components/FeedBack'
import Footer from './components/Footer'
import Header from './components/Header'
import Summary from './components/Summary'

const App = () => {
  return (
    <div className='main'>
      <Header/>
      <Home/>
      <Summary/>
      <Courses/>
      <Instructors/>
      <FeedBack/>
      <Footer/>
    </div>
  )
}

export default App