import React from 'react'

const Summary__Card = ({content__icon,content__info,content__name}) => {
  return (
    <div className='summary__card'>
      <div className="summary__card__content">
        <div className="summary__card__content__icon__container">
          <img className='summary__card__content__icon__image' src={content__icon}/>
        </div>
        <div className="summary__card__content__txt">
          <span className="summary__card__content__txt__info">{content__info}</span>
          <span className="summary__card__content__txt__name">{content__name}</span>
        </div>
      </div>
    </div>
  )
}

export default Summary__Card