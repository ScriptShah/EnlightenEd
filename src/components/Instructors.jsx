import {React,useState} from 'react'
import Instructor__Card from './Instructor__Card'
import instructor__card1 from '../assets/instructor__card1.png' 
import instructor__card2 from '../assets/Instructor__card2.png' 
import instructor__card3 from '../assets/Instructor__card3.png' 
import instructor__card4 from '../assets/Instructor__card4.png' 

const Instructors = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
      setToggleState(index);
  }
  return (
    <section className="instructors" id='instructors'>

    <div className="instructors__title__content">

        <div className="instructors__title__container">

          <svg xmlns="http://www.w3.org/2000/svg" width="90" height="5" viewBox="0 0 90 5" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M88.9276 2.96901C71.3971 0.352555 53.5702 1.79975 35.9956 1.32865C24.3743 1.01346 12.7522 0.254265 1.13941 7.60211e-05C0.791241 -0.00670236 0.504892 0.440658 0.500057 1.00326C0.495431 1.56587 0.774217 2.02681 1.12218 2.03359C12.7338 2.28778 24.3546 3.04697 35.9746 3.36217C53.5177 3.83327 71.311 2.38267 88.8099 4.99574C89.1568 5.04658 89.4637 4.6365 89.4974 4.07728C89.5289 3.51807 89.2724 3.02324 88.9276 2.96901Z" fill="#FF9900"/>
          </svg>

          <span className="instructors__title">Our Instructor</span>

          <svg xmlns="http://www.w3.org/2000/svg" width="90" height="5" viewBox="0 0 90 5" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M88.9276 2.96901C71.3971 0.352555 53.5702 1.79975 35.9956 1.32865C24.3743 1.01346 12.7522 0.254265 1.13941 7.60211e-05C0.791241 -0.00670236 0.504892 0.440658 0.500057 1.00326C0.495431 1.56587 0.774217 2.02681 1.12218 2.03359C12.7338 2.28778 24.3546 3.04697 35.9746 3.36217C53.5177 3.83327 71.311 2.38267 88.8099 4.99574C89.1568 5.04658 89.4637 4.6365 89.4974 4.07728C89.5289 3.51807 89.2724 3.02324 88.9276 2.96901Z" fill="#FF9900"/>
          </svg>

        </div>

        <div className="instructors__title__txt__container">

          <p className="instructors__title__txt">
            Meet the Masters Behind the Knowledge: Discover our expert 
            instructors who bring learning to life.
          </p>

        </div>
    </div>
        <button className="instructors__add__instructor" onClick={() => toggleTab(1)}>
          add
        </button>
        <div className={toggleState === 1 ? "instructors__add__form__container" : "instructors__add__form__container__close"}>
          <form className='instructors__add__form'>
            <h2 className="instructors__add__form__title">Add new instructor</h2>
            <input type="text"  placeholder="Instructor Name" className='instructors__add__form__course title' />
            <input type="text"  placeholder="Instructor Position" className='instructors__add__form__course position' />
            <input type="text"  placeholder="Instructor Followers"  className='instructors__add__form__course duration'/>
            <input type="text"  placeholder="Instructor Courser" className='instructors__add__form__course price' />
            <div className="instructors__add__form__button__container">
              <button type="button" className='instructors__add__form__button add' onClick={() => toggleTab(0)} >Save</button>
              <button type="button" className='instructors__add__form__button close' onClick={() => toggleTab(0)} >close</button>
            </div>
          </form>
        </div>
    <div className="instructors__cards__container">
      <Instructor__Card
        instructor__card__image={instructor__card1}
        instructor__card__name={"Mahmood Fazile"}
        instructor__card__position={"UI / UX designer"}
        instructor__card__followers={"2,340"}
        instructor__card__coursers={12}
      />

      <Instructor__Card
        instructor__card__image={instructor__card2}
        instructor__card__name={"Leslie Alexander"}
        instructor__card__position={"Software Engineering"}
        instructor__card__followers={"2,340"}
        instructor__card__coursers={12}
      />

      <Instructor__Card
        instructor__card__image={instructor__card3}
        instructor__card__name={"Devon Lane"}
        instructor__card__position={"Leader Manager"}
        instructor__card__followers={"2,340"}
        instructor__card__coursers={12}
      />

      <Instructor__Card
        instructor__card__image={instructor__card4}
        instructor__card__name={"Savannah Nguyen"}
        instructor__card__position={"Mobile Developer"}
        instructor__card__followers={"2,340"}
        instructor__card__coursers={12}
      />
    </div>
  </section>    
  )
}

export default Instructors


// FF9900