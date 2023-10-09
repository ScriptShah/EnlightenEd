// importing hooks and axios 

import {React,useState,useEffect} from 'react'
import axios from 'axios'

// importing Instructor Card as well images

import Instructor__Card from './Instructor__Card'
import instructor__card1 from '../assets/instructor__card1.png' 
import instructor__card2 from '../assets/Instructor__card2.png' 
import instructor__card3 from '../assets/Instructor__card3.png' 
import instructor__card4 from '../assets/Instructor__card4.png' 

const Instructors = () => {

  // defining instructor , setInstructor, newInstructor , setNewInstructor,toggleState and setToggleState  hooks.

  const [toggleState, setToggleState] = useState(0);
  const [instructors, setInstructors] = useState([]);
  const [newInstructors, setNewInstructors] = useState({
    name: "",
    position: "",
    followers: "",
    cursor: "",
  });


// defining useEffect for everyTime that application trigger an effect.

  useEffect(() => {
    getAllInstructors();
  }, []);


  // this function handle changes whenever user type in the inputs of the form and shows on the screen also set values to the new course.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInstructors({ ...newInstructors, [name]: value });
  };


// this function toggle the closed form to open and also to be close.  

  const toggleTab = (index) => {
      setToggleState(index);
  }




// this function get all defined instructors from the db and turn them into json readable react format and set them to instructor cards.
  
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




// With this function user can add a instructor trough the form and press the add button to save the new instructor to the db.

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



  // this function delete a specific instructor from db by getting instructor id form which instructor card that button pressed  

  const deleteInstructor = async (instructor_id) => {
    const url = `http://localhost:8000/instructors/${instructor_id}`;
  
    const response = await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
  
    if (response.ok) {
      // Course deleted successfully, update the state or perform any other action
    } else {
      // Handle error if the course deletion failed
    }
  };



 // with this function user can click on update button which refresh the added cards.  
 
  const updateCard = () => {
      getAllInstructors();
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
        <div className="update_add">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none" onClick={updateCard}>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.2417 0.115262C12.9879 0.261887 8.87049 4.31476 5.58124 7.65589C4.46949 8.78514 4.33774 8.96689 4.33774 9.37026C4.33774 9.70864 4.40811 9.86051 4.61899 9.97739C5.05536 10.2194 14.1537 14.5489 15.2566 15.0395C16.3679 15.5338 16.7331 15.5201 17.0156 14.974C17.224 14.5709 17.1554 13.8815 16.6676 11.4786L16.3805 10.0645L16.7137 9.89226C16.897 9.79751 17.6326 9.56239 18.3485 9.36976C19.5456 9.04764 19.826 9.01989 21.8377 9.02439C23.8289 9.02876 24.1316 9.05951 25.2097 9.36626C28.2652 10.2356 31.0765 12.2693 32.7986 14.8563C34.1657 16.9099 35.0572 19.1855 35.3101 21.2678L35.4012 22.0178L39.4945 22.0508L43.5877 22.0836V21.7566C43.5877 21.1833 42.8386 17.7109 42.4604 16.531C42.2596 15.905 41.733 14.6615 41.2899 13.7678C38.6809 8.50464 34.9436 4.89451 29.8134 2.68176C27.3606 1.62376 25.2122 1.23239 21.8377 1.22864C19.365 1.22576 17.616 1.41239 16.2214 1.82764C15.755 1.96664 15.3164 2.08026 15.2467 2.08026C15.1772 2.08026 15.0554 1.75676 14.9761 1.36151C14.8967 0.966262 14.7334 0.514762 14.613 0.358262C14.3475 0.0128873 13.6371 -0.112863 13.2417 0.115262ZM0.016363 22.1933C-0.084012 22.2938 0.297738 24.7661 0.606738 26.0178C2.41224 33.3283 8.03386 39.6505 14.8755 42.0646C18.4954 43.3419 23.4304 43.5741 27.2752 42.648C27.9559 42.4841 28.0397 42.4864 28.1815 42.6728C28.2675 42.7856 28.3377 43.0516 28.3377 43.2639C28.3377 43.9545 28.899 44.5803 29.5185 44.5803C29.8555 44.5803 30.4312 44.0498 34.3014 40.174C36.7212 37.7505 38.7586 35.613 38.8289 35.424C39.0677 34.7809 38.6972 34.2783 37.6456 33.8188C37.3045 33.6696 34.805 32.454 32.0914 31.1173C29.3777 29.7806 27.0117 28.6829 26.8337 28.6778C26.6556 28.6728 26.3587 28.7676 26.1739 28.8888C25.693 29.2039 25.6907 29.1735 26.4526 32.7678C26.6566 33.7303 26.7845 34.5501 26.7369 34.5895C26.6157 34.69 24.9584 35.0498 23.8377 35.2189C22.51 35.4194 20.1371 35.2976 18.8377 34.9626C13.3201 33.5396 9.27186 29.2193 8.14649 23.5526C8.03011 22.9668 7.89899 22.4296 7.85511 22.3588C7.77911 22.2364 0.134488 22.0749 0.016363 22.1933Z" fill="#fff"/>
              </svg>
          <button className="instructors__add__instructor" onClick={() => toggleTab(1)}>
            add
          </button>
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
              deleteCard={() => deleteInstructor(instructor.id)}
          />
      ))}
    </div>
  </section>    
  )
}

export default Instructors
