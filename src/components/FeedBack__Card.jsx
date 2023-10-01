import React from 'react'

const FeedBack__Card = ({
  feedback__txt,
  author__image,
  author__name,
  author__position

}) => {
  return (
    <div className="feedback__Card">
        <div className="feedback__Card__container">
          <div className="feedback__Card__feedback">
            <p className="feedback__Card__feedback__txt">
                {feedback__txt}
            </p>
          </div>

          <div className="feedback__Card__author__container">
            <div className="feedback__Card__author__image__container">
              <img src={author__image} alt="author image"  className='feedback__Card__author__image'/>
            </div>
            <div className="feedback__Card__author">
              <p className="feedback__Card__author__name">{author__name}</p>
              <p className="feedback__Card__author__position">{author__position}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FeedBack__Card