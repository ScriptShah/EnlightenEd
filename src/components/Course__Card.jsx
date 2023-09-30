import React from 'react'

const Course__Card = (
  { course__image,
    instructor__image,
    instructor__name,
    instructor__position,
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
        <span className="course__card__instructor__heart__sign"></span>
      </div>

      <div className="course__card__course__info">
        <p className="course__card__course__info__txt">
            {course__info}
        </p>
      </div>

      <div className="course__card__course__rating-courseDuration">

        <div className="course__card__course__rating">
          <div className="course__card__course__rating__stars__container">
            <span className="course__card__course__rating__star">{course__rating__stars}</span>
          </div>

          <span className="course__card__course__rating__score">{course__rating__score}</span>
        </div>
        <div className="course__card__course__duration">{course__duration}</div>
      </div>


      <div className="course__card__sell">
        <span className="course__card__sell__price">{course__price}</span>
        <button className="course__card__sell__buy__btn">Buy Now</button>
      </div>
    </div>
  )
}

export default Course__Card