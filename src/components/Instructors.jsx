

import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Instructor__Card from './Instructor__Card'
import instructor__card1 from '../assets/instructor__card1.png' 
import instructor__card2 from '../assets/Instructor__card2.png' 
import instructor__card3 from '../assets/Instructor__card3.png' 
import instructor__card4 from '../assets/Instructor__card4.png' 

const Instructors = () => {
  const [toggleState, setToggleState] = useState(0);
  const [instructors, setInstructors] = useState([]);
  const [newInstructors, setNewInstructors] = useState({
    name: "",
    position: "",
    followers: "",
    cursor: "",
  });


  useEffect(() => {
    getAllInstructors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInstructors({ ...newInstructors, [name]: value });
  };



  const toggleTab = (index) => {
      setToggleState(index);
  }




  
    const getAllInstructors = async () => {
      const url = "http://localhost:8000/instructors/";
  
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
  
      const data = await response.json();
      setInstructors(data.data);
    };




  const addInstructor = async (e) => {
    e.preventDefault();
    console.log(instructors);
  
    setNewInstructors({
      name: "",
      position: "",
      followers: "",
      cursor: ""
    });
  
    const url = "http://localhost:8000/instructors/";
  
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify({
        "name": newInstructors['name'],
        "position": newInstructors['position'],
        "followers": newInstructors['followers'],
        "cursor": newInstructors['cursor'],
      }) 
    });
  
    response.json().then(response => {
      if (response.status === 'ok') {
        alert("instructor added successfully")
      } else {
        alert("Failed to add instructor")
      }
    });
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
            <input type="text" name='name' value={newInstructors.name}  onChange={handleInputChange} placeholder="Instructor Name" className='instructors__add__form__course title' />
            <input type="text" name='position' value={newInstructors.position} onChange={handleInputChange} placeholder="Instructor Position" className='instructors__add__form__course position' />
            <input type="text" name='followers' value={newInstructors.followers} onChange={handleInputChange} placeholder="Instructor Followers"  className='instructors__add__form__course duration'/>
            <input type="text" name='cursor' value={newInstructors.cursor} onChange={handleInputChange} placeholder="Instructor Courser" className='instructors__add__form__course price' />
            <div className="instructors__add__form__button__container">
              <button type="button" className='instructors__add__form__button add' onClick={addInstructor} >Save</button>
              <button type="button" className='instructors__add__form__button close' onClick={() => toggleTab(0)} >close</button>
            </div>
          </form>
        </div>
    <div className="instructors__cards__container">
      {instructors.map((instructor) => (
          <Instructor__Card
          key={instructor.id}
              instructor__card__image={instructor__card1}
              instructor__card__name={instructor.name}
              instructor__card__position={instructor.position}
              instructor__card__followers={instructor.followers}
              instructor__card__courses={instructor.cursor}
          />
      ))}
    </div>
  </section>    
  )
}

export default Instructors
