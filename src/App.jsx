import React from 'react'
import Home from './components/Home'
import Courses from './components/Courses'
import Instructors from './components/Instructors'
import FeedBack from './components/FeedBack'
import Footer from './components/Footer'
import Header from './components/Header'
import Summary from './components/Summary'
import Blog from './components/Blog'
import CopyRight from './components/CopyRight'
import {grabData} from '../config/helpers';
import Test from './components/test'

const App = () => {
  // grabData();

  return (
    
    <div className='main'>
      <Header/>
      <Home/>
      <Summary/>
      <Blog/>
      <Courses/>
      <Instructors/>
      <FeedBack/>
      <Footer/>
      <CopyRight/>
      <Test/>
    </div>
  )
}

export default App