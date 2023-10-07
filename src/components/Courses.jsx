import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'



import Course__Card from './Course__Card'
import course1 from "../assets/course1.png"
import course2 from "../assets/course2.png"
import course3 from "../assets/course3.png"
import instructor1 from "../assets/instructor1.png"
import instructor2 from "../assets/instructor2.png"
import instructor3 from "../assets/instructor3.png"





const Courses = () => {

  const [toggleState, setToggleState] = useState(0);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    instructor: "",
    position: "",
    duration: "",
    price: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);


  const fetchCourses = () => {
    axios.get("http://localhost:8000/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error(error));
  };




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };



  const addCourse = () => {
    axios.post("http://localhost:8000/courses", newCourse)
      .then((response) => {
        setCourses([...courses, response.data]);
        setNewCourse({
          title: "",
          instructor: "",
          position: "",
          duration: "",
          price: "",
        });
      })
      .catch((error) => console.error(error));
  };  


  const deleteCourse = (id) => {
    axios.delete(`http://localhost:8000/courses/${id}`)
      .then(() => {
        setCourses(courses.filter((course) => course.id !== id));
      })
      .catch((error) => console.error(error));
  };  

  const toggleTab = (index) => {
      setToggleState(index);
  }


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
        <button className="courses__add__course" onClick={() => toggleTab(1)}>
          add
        </button>
        <div className={toggleState === 1 ? "courses__add__form__container" : "courses__add__form__container__close"}>
          <form className='courses__add__form'>
            <h2 className="courses__add__form__title">Add new course</h2>
            <input type="text" name="title" value={newCourse.title}  onChange={handleInputChange} placeholder="Course Title" className='courses__add__form__course title' />
            <input type="text" name="instructor" value={newCourse.instructor} onChange={handleInputChange} placeholder="Instructor" className='courses__add__form__course instructor' />
            <input type="text" name="position" value={newCourse.position} onChange={handleInputChange} placeholder="Instructor Position" className='courses__add__form__course position' />
            <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} placeholder="Course Duration"  className='courses__add__form__course duration'/>
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
              instructor__image = {instructor1}
              instructor__name = {course.instructor}
              instructor__position = {course.position}
              instructor__heart={
                <>

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M13.2867 20.81C12.9467 20.93 12.3867 20.93 12.0467 20.81C9.14675 19.82 2.66675 15.69 2.66675 8.68998C2.66675 5.59998 5.15675 3.09998 8.22675 3.09998C10.0467 3.09998 11.6567 3.97998 12.6667 5.33998C13.1805 4.64585 13.8497 4.0817 14.6207 3.69272C15.3918 3.30374 16.2432 3.10074 17.1067 3.09998C20.1767 3.09998 22.6667 5.59998 22.6667 8.68998C22.6667 15.69 16.1867 19.82 13.2867 20.81Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                
                </>
              }
              course__info = {course.title}
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
  )
}

export default Courses