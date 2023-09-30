import React from 'react'
import Course__Card from './Course__Card'

const Courses = () => {
  return (
    <section className="courses" id='courses'>

    <div className="course__title__content">
        <div className="course__title__container">
          <svg xmlns="http://www.w3.org/2000/svg" width="89" height="5" viewBox="0 0 89 5" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M88.4276 2.96901C70.8971 0.352555 53.0702 1.79975 35.4956 1.32865C23.8743 1.01346 12.2522 0.254265 0.639411 7.60211e-05C0.291241 -0.00670236 0.00489244 0.440658 5.67348e-05 1.00326C-0.00456872 1.56587 0.274217 2.02681 0.622177 2.03359C12.2338 2.28778 23.8546 3.04697 35.4746 3.36217C53.0177 3.83327 70.811 2.38267 88.3099 4.99574C88.6568 5.04658 88.9637 4.6365 88.9974 4.07728C89.0289 3.51807 88.7724 3.02324 88.4276 2.96901Z" fill="url(#paint0_linear_148_853)"/>
            <defs>
              <linearGradient id="paint0_linear_148_853" x1="9.05085" y1="0.851063" x2="18.8073" y2="26.6954" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0066CC"/>
                <stop offset="1" stopColor="#124FA2"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="course__title">Trending Courses</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="89" height="5" viewBox="0 0 89 5" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M88.4276 2.96901C70.8971 0.352555 53.0702 1.79975 35.4956 1.32865C23.8743 1.01346 12.2522 0.254265 0.639411 7.60211e-05C0.291241 -0.00670236 0.00489244 0.440658 5.67348e-05 1.00326C-0.00456872 1.56587 0.274217 2.02681 0.622177 2.03359C12.2338 2.28778 23.8546 3.04697 35.4746 3.36217C53.0177 3.83327 70.811 2.38267 88.3099 4.99574C88.6568 5.04658 88.9637 4.6365 88.9974 4.07728C89.0289 3.51807 88.7724 3.02324 88.4276 2.96901Z" fill="url(#paint0_linear_148_853)"/>
            <defs>
              <linearGradient id="paint0_linear_148_853" x1="9.05085" y1="0.851063" x2="18.8073" y2="26.6954" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0066CC"/>
                <stop offset="1" stopColor="#124FA2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="course__title__txt__container">
          <p className="course__title__txt">
            Stay Ahead with Trending Courses: Explore the hottest 
            topics and sought-after skills with our curated collection of 
            trending courses.
          </p>
        </div>
    </div>

      <div className="course__cards__container">
        <Course__Card 
          course__image = {" "}
          instructor__image = {" "}
          instructor__name = {" "}
          instructor__position = {" "}
          course__info = {" "}
          course__rating__stars = {" "}
          course__rating__score = {" "}
          course__duration = {" "}
          course__price = {" "}
        />
      </div>
      
    </section>
  )
}

export default Courses