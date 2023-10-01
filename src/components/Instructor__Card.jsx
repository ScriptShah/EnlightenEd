import React from 'react'

const Instructor__Card = (
  { 
    instructor__card__image,
    instructor__card__name,
    instructor__card__position,
    instructor__card__followers,
    instructor__card__coursers,
  }  


) => {
  return (
    <div className='instructor__card'>
      <div className="instructor__Card__image__container">
        <img src={instructor__card__image} alt="image" className="instructor__Card__image" />
      </div>

      <div className="instructor__Card__instructor__info">
        <p className="instructor__info__name">{instructor__card__name}</p>
        <p className="instructor__info__position">{instructor__card__position}</p>
      </div>

      <div className="instructor__card__line"></div>

      <div className="instructor__card__followers-coursers">
        <div className="instructor__card__followers">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="#3577D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#3577D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className="instructor__card__followers__data">{instructor__card__followers} Followers</p>
        </div>
        <div className="instructor__card__coursers">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z" stroke="#3577D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5.48999V20.49" stroke="#3577D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.75 8.48999H5.5" stroke="#3577D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 11.49H5.5" stroke="#3577D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className="instructor__card__coursers__data">{instructor__card__coursers} Courser</p>
        </div>
      </div>
    </div>
  )
}

export default Instructor__Card