
// importing hooks and axios 

import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'


// importing Course Card as well images

import Course__Card from './Course__Card'
import course1 from "../assets/course1.png"
import course2 from "../assets/course2.png"
import course3 from "../assets/course3.png"
import instructor1 from "../assets/instructor1.png"
import instructor2 from "../assets/instructor2.png"
import instructor3 from "../assets/instructor3.png"





const Courses = () => {

// defining course , setCourse, newCourse , setNewCourse,toggleState and setToggleState hooks.
  const [toggleState, setToggleState] = useState(0);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    course_title: "",
    instructor: "",
    instructor_position: "",
    course_duration: "",
    price: "",
  });


// defining useEffect for everyTime that application trigger an effect.
  useEffect(() => {
    getAllCourses();
  }, []);


  // this function handle changes whenever user type in the inputs of the form and shows on the screen also set values to the new course.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };


// this function toggle the closed form to open and also to be close.  

  const toggleTab = (index) => {
      setToggleState(index);
  }



// this function get all defined courses from the db and turn them into json readable react format and set them to course cards.
  const getAllCourses = async () => {
    const url = "http://localhost:8000/courses/";
  
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
  
    response.json().then(data => {
      setCourses(data);
    });
  }



// With this function user can add a course trough the form and press the add button to save the new course to the db.
  const addCourse = async (e) => {
    e.preventDefault();
    console.log(courses);
  
    setNewCourse({
      instructor: "",
      instructor_position: "",
      course_title: "",
      course_duration: "",
      price: ""
    });
  
    const url = "http://localhost:8000/courses/";
  
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
        "instructor": newCourse['instructor'],
        "instructor_position": newCourse['instructor_position'],
        "course_title": newCourse['course_title'],
        "course_duration": newCourse['course_duration'],
        "price": newCourse['price']
      }) 
    });
  
    response.json().then(response => {
      if (response.status === 'ok') {
        alert("course added successfully")
      } else {
        alert("Failed to add course")
      }
    });
  }



// this function delete a specific course from db by getting course id form which course card that button pressed  
  const deleteCourse = async (course_id) => {
    const url = `http://localhost:8000/courses/${course_id}`;
  
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
    getAllCourses();
}


  



  return (

    // course section starts from here !
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
        <div className="update_add"> 

          <div className="update__icon course">

            <svg id='update__icon_course' xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" onClick={updateCard}>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.2417 0.115262C12.9879 0.261887 8.87049 4.31476 5.58124 7.65589C4.46949 8.78514 4.33774 8.96689 4.33774 9.37026C4.33774 9.70864 4.40811 9.86051 4.61899 9.97739C5.05536 10.2194 14.1537 14.5489 15.2566 15.0395C16.3679 15.5338 16.7331 15.5201 17.0156 14.974C17.224 14.5709 17.1554 13.8815 16.6676 11.4786L16.3805 10.0645L16.7137 9.89226C16.897 9.79751 17.6326 9.56239 18.3485 9.36976C19.5456 9.04764 19.826 9.01989 21.8377 9.02439C23.8289 9.02876 24.1316 9.05951 25.2097 9.36626C28.2652 10.2356 31.0765 12.2693 32.7986 14.8563C34.1657 16.9099 35.0572 19.1855 35.3101 21.2678L35.4012 22.0178L39.4945 22.0508L43.5877 22.0836V21.7566C43.5877 21.1833 42.8386 17.7109 42.4604 16.531C42.2596 15.905 41.733 14.6615 41.2899 13.7678C38.6809 8.50464 34.9436 4.89451 29.8134 2.68176C27.3606 1.62376 25.2122 1.23239 21.8377 1.22864C19.365 1.22576 17.616 1.41239 16.2214 1.82764C15.755 1.96664 15.3164 2.08026 15.2467 2.08026C15.1772 2.08026 15.0554 1.75676 14.9761 1.36151C14.8967 0.966262 14.7334 0.514762 14.613 0.358262C14.3475 0.0128873 13.6371 -0.112863 13.2417 0.115262ZM0.016363 22.1933C-0.084012 22.2938 0.297738 24.7661 0.606738 26.0178C2.41224 33.3283 8.03386 39.6505 14.8755 42.0646C18.4954 43.3419 23.4304 43.5741 27.2752 42.648C27.9559 42.4841 28.0397 42.4864 28.1815 42.6728C28.2675 42.7856 28.3377 43.0516 28.3377 43.2639C28.3377 43.9545 28.899 44.5803 29.5185 44.5803C29.8555 44.5803 30.4312 44.0498 34.3014 40.174C36.7212 37.7505 38.7586 35.613 38.8289 35.424C39.0677 34.7809 38.6972 34.2783 37.6456 33.8188C37.3045 33.6696 34.805 32.454 32.0914 31.1173C29.3777 29.7806 27.0117 28.6829 26.8337 28.6778C26.6556 28.6728 26.3587 28.7676 26.1739 28.8888C25.693 29.2039 25.6907 29.1735 26.4526 32.7678C26.6566 33.7303 26.7845 34.5501 26.7369 34.5895C26.6157 34.69 24.9584 35.0498 23.8377 35.2189C22.51 35.4194 20.1371 35.2976 18.8377 34.9626C13.3201 33.5396 9.27186 29.2193 8.14649 23.5526C8.03011 22.9668 7.89899 22.4296 7.85511 22.3588C7.77911 22.2364 0.134488 22.0749 0.016363 22.1933Z" fill="#0066CC"/>
            </svg>

            </div>
          <button className="courses__add__course" onClick={() => toggleTab(1)}>
            add
          </button>
        </div>




        <div className={toggleState === 1 ? "courses__add__form__container" : "courses__add__form__container__close"}>
          <form className='courses__add__form'>
            <h2 className="courses__add__form__title">Add new course</h2>
            <input type="text" name="course_title" value={newCourse.course_title}  onChange={handleInputChange} placeholder="Course Title" className='courses__add__form__course title' />
            <input type="text" name="instructor" value={newCourse.instructor} onChange={handleInputChange} placeholder="Instructor" className='courses__add__form__course instructor' />
            <input type="text" name="instructor_position" value={newCourse.instructor_position} onChange={handleInputChange} placeholder="Instructor Position" className='courses__add__form__course position' />
            <input type="text" name="course_duration" value={newCourse.course_duration} onChange={handleInputChange} placeholder="Course Duration"  className='courses__add__form__course duration'/>
            <input type="text" name="price" value={newCourse.price} onChange={handleInputChange} placeholder="price" className='courses__add__form__course price' />
            <div className="courses__add__form__button__container">
              <button type="button" className='courses__add__form__button add' onClick={addCourse} >Save</button>
              <button type="button" className='courses__add__form__button close' onClick={() => toggleTab(0)} >close</button>
            </div>
          </form>
        </div>
 
        <div className="course__cards__container">
          {courses && courses.data && courses.data.map((course) =>(
            <Course__Card key={course.id}
              course__image = {course1}
              deleteCard={() => deleteCourse(course.id)}
              instructor__image = {instructor3}
              instructor__name = {course.instructor}
              instructor__position = {course.position}
              instructor__heart={
                <>

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M13.2867 20.81C12.9467 20.93 12.3867 20.93 12.0467 20.81C9.14675 19.82 2.66675 15.69 2.66675 8.68998C2.66675 5.59998 5.15675 3.09998 8.22675 3.09998C10.0467 3.09998 11.6567 3.97998 12.6667 5.33998C13.1805 4.64585 13.8497 4.0817 14.6207 3.69272C15.3918 3.30374 16.2432 3.10074 17.1067 3.09998C20.1767 3.09998 22.6667 5.59998 22.6667 8.68998C22.6667 15.69 16.1867 19.82 13.2867 20.81Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                
                </>
              }
              course__info = {course.course_title}
              course__rating__stars = {
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M9.15327 2.84001L10.3266 5.18668C10.4866 5.51334 10.9133 5.82668 11.2733 5.88668L13.3999 6.24001C14.7599 6.46668 15.0799 7.45334 14.0999 8.42668L12.4466 10.08C12.1666 10.36 12.0133 10.9 12.0999 11.2867L12.5733 13.3333C12.9466 14.9533 12.0866 15.58 10.6533 14.7333L8.65994 13.5533C8.29994 13.34 7.70661 13.34 7.33994 13.5533L5.34661 14.7333C3.91994 15.58 3.05327 14.9467 3.42661 13.3333L3.89994 11.2867C3.98661 10.9 3.83327 10.36 3.55327 10.08L1.89994 8.42668C0.926606 7.45334 1.23994 6.46668 2.59994 6.24001L4.72661 5.88668C5.07994 5.82668 5.50661 5.51334 5.66661 5.18668L6.83994 2.84001C7.47994 1.56668 8.51994 1.56668 9.15327 2.84001Z" fill="#FFB800"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M9.15327 2.84001L10.3266 5.18668C10.4866 5.51334 10.9133 5.82668 11.2733 5.88668L13.3999 6.24001C14.7599 6.46668 15.0799 7.45334 14.0999 8.42668L12.4466 10.08C12.1666 10.36 12.0133 10.9 12.0999 11.2867L12.5733 13.3333C12.9466 14.9533 12.0866 15.58 10.6533 14.7333L8.65994 13.5533C8.29994 13.34 7.70661 13.34 7.33994 13.5533L5.34661 14.7333C3.91994 15.58 3.05327 14.9467 3.42661 13.3333L3.89994 11.2867C3.98661 10.9 3.83327 10.36 3.55327 10.08L1.89994 8.42668C0.926606 7.45334 1.23994 6.46668 2.59994 6.24001L4.72661 5.88668C5.07994 5.82668 5.50661 5.51334 5.66661 5.18668L6.83994 2.84001C7.47994 1.56668 8.51994 1.56668 9.15327 2.84001Z" fill="#FFB800"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M9.15327 2.84001L10.3266 5.18668C10.4866 5.51334 10.9133 5.82668 11.2733 5.88668L13.3999 6.24001C14.7599 6.46668 15.0799 7.45334 14.0999 8.42668L12.4466 10.08C12.1666 10.36 12.0133 10.9 12.0999 11.2867L12.5733 13.3333C12.9466 14.9533 12.0866 15.58 10.6533 14.7333L8.65994 13.5533C8.29994 13.34 7.70661 13.34 7.33994 13.5533L5.34661 14.7333C3.91994 15.58 3.05327 14.9467 3.42661 13.3333L3.89994 11.2867C3.98661 10.9 3.83327 10.36 3.55327 10.08L1.89994 8.42668C0.926606 7.45334 1.23994 6.46668 2.59994 6.24001L4.72661 5.88668C5.07994 5.82668 5.50661 5.51334 5.66661 5.18668L6.83994 2.84001C7.47994 1.56668 8.51994 1.56668 9.15327 2.84001Z" fill="#FFB800"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M9.15327 2.84001L10.3266 5.18668C10.4866 5.51334 10.9133 5.82668 11.2733 5.88668L13.3999 6.24001C14.7599 6.46668 15.0799 7.45334 14.0999 8.42668L12.4466 10.08C12.1666 10.36 12.0133 10.9 12.0999 11.2867L12.5733 13.3333C12.9466 14.9533 12.0866 15.58 10.6533 14.7333L8.65994 13.5533C8.29994 13.34 7.70661 13.34 7.33994 13.5533L5.34661 14.7333C3.91994 15.58 3.05327 14.9467 3.42661 13.3333L3.89994 11.2867C3.98661 10.9 3.83327 10.36 3.55327 10.08L1.89994 8.42668C0.926606 7.45334 1.23994 6.46668 2.59994 6.24001L4.72661 5.88668C5.07994 5.82668 5.50661 5.51334 5.66661 5.18668L6.83994 2.84001C7.47994 1.56668 8.51994 1.56668 9.15327 2.84001Z" fill="#FFB800"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M9.15327 2.84001L10.3266 5.18668C10.4866 5.51334 10.9133 5.82668 11.2733 5.88668L13.3999 6.24001C14.7599 6.46668 15.0799 7.45334 14.0999 8.42668L12.4466 10.08C12.1666 10.36 12.0133 10.9 12.0999 11.2867L12.5733 13.3333C12.9466 14.9533 12.0866 15.58 10.6533 14.7333L8.65994 13.5533C8.29994 13.34 7.70661 13.34 7.33994 13.5533L5.34661 14.7333C3.91994 15.58 3.05327 14.9467 3.42661 13.3333L3.89994 11.2867C3.98661 10.9 3.83327 10.36 3.55327 10.08L1.89994 8.42668C0.926606 7.45334 1.23994 6.46668 2.59994 6.24001L4.72661 5.88668C5.07994 5.82668 5.50661 5.51334 5.66661 5.18668L6.83994 2.84001C7.47994 1.56668 8.51994 1.56668 9.15327 2.84001Z" fill="#D2D2D2"/>
                  </svg>
                </>
              }
              course__rating__score = {"4.0"}
              course__duration = {course.duration}
              course__price = {course.price}
            />
          ))}
        </div>

        <div className="course__showButton__container">
            <button className="course__showButton">
              Show All
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="arrow-right">
                <path id="Vector" d="M5 12H19" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_2" d="M12 5L19 12L12 19" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>  
            </button>
        </div>
    </section>
    // course section ends here !
  )
}

export default Courses