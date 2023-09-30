import React from 'react'
import title from '../assets/title.png';

const Header = () => {
  return (
    <nav className='header'>
          <div className="burger">
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="30px" viewBox="0 0 24 24" fill="none">

              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="#8f8f8f"/> <path fillRule="evenodd" clipRule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="#8f8f8f"/> <path fillRule="evenodd" clipRule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill="#8f8f8f"/> </g>

            </svg>
          </div>
          <div className="header__logo">
            <img className='header__logo__image' src={title}/>
            <span className='header__logo__txt'>EnlightenEd</span>
          </div>
          <div className="header__menu">
               <a href="#home" className="header__menu__item">Home</a>
               <a href="#courses" className="header__menu__item">Courses</a>
               <a href="#instructors" className="header__menu__item">Instructors</a>
               <a href="#feedback" className="header__menu__item">FeedBack</a>
               <a href="#blog" className="header__menu__item">Blog</a>
               <a href="#contacts" className="header__menu__item">Contacts</a>
               <a href="#footer" className="header__menu__item">About Us</a>
          </div>
          <button className="header__btn">Get Start</button>
    </nav>
  )
}

export default Header