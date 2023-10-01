import React from 'react'


const Course__Card = (
  { course__image,
    instructor__image,
    instructor__name,
    instructor__position,
    instructor__heart,
    course__info,
    course__rating__stars,
    course__rating__score,
    course__duration,
    course__price
  }
  ) => {
  return (
    <div className="course__card">
      <div className="course__card__image__container">
        <img src={course__image} alt="image" className="course__card__image" />
      </div>

      <div className="course__card__instructor">
        <div className="course__card__instructor__image__container">
          <img src={instructor__image} alt="image" className="course__card__instructor__image"/>
        </div>
        <div className="course__card__instructor__info">
          <span className="course__card__instructor__name">{instructor__name}</span>
          <span className="course__card__instructor__position">{instructor__position}</span>
        </div>
        <span className="course__card__instructor__heart__sign">
            {instructor__heart}
        </span>
      </div>

      <div className="course__card__course__info">
        <p className="course__card__course__info__txt">
            {course__info}
        </p>
      </div>

      <div className="course__card__course__rating-courseDuration">

        <div className="course__card__course__rating">
          <div className="course__card__course__rating__stars__container">
            {course__rating__stars}
          </div>

          <span className="course__card__course__rating__score">{course__rating__score}</span>
        </div>
        <div className="course__card__course__duration">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M8.33333 5.33333V8.66667M14.1667 8.83333C14.1667 12.0533 11.5533 14.6667 8.33333 14.6667C5.11333 14.6667 2.5 12.0533 2.5 8.83333C2.5 5.61333 5.11333 3 8.33333 3C11.5533 3 14.1667 5.61333 14.1667 8.83333Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.33325 1.33337H10.3333" stroke="#808080" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {course__duration}</div>
      </div>

      <span className="course__card__line"></span>

      <div className="course__card__sell">
        <span className="course__card__sell__price">{course__price}</span>
        <button className="course__card__sell__buy__btn">Buy Now</button>
      </div>
    </div>
  )
}

export default Course__Card