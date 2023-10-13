import React, { useState ,useEffect} from 'react'
import Summary__Card from './Summary__Card'
import courses from "../assets/online__courses.png";
import instructors from '../assets/instructors.png'
import students from '../assets/students.png'
import hours from '../assets/hours.png'







const Summary = () => {
  const [hoursQuantity,setHoursQuantity] = useState(0);
  const [studentsQuantity,setStudentsQuantity] = useState(0);
  const [instructorsQuantity,setInstructorQuantity] = useState(0);
  const [coursesQuantity,setCoursesQuantity] = useState(0);


  const courseHoursCount = async () => {
    const url  = "http://localhost:8000/courses/";
  
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
  
    response.json().then(res => {
      let hourCount = 0;
      for(let i = 0;i<=res.data.length-1;i++){
        hourCount+= res.data[i].course_duration;
        
      }
      setHoursQuantity(hourCount);
      setCoursesQuantity(res.data.length);
    });
  
  }
  
  
  
  const studentsCount = async () => {
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
  
    const res = await response.json();
    let students = 0;
      for(let i = 0;i<=res.data.length-1;i++){
        students+= res.data[i].followers;
        
      }
      setStudentsQuantity(students);
      setInstructorQuantity(res.data.length);
      
  };

  courseHoursCount();
  studentsCount();


  useEffect(() => {
    const interval = setInterval(() => {
      courseHoursCount();
      studentsCount();
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    
    


    <section className='summary'>
      <Summary__Card content__name={"Online Courses"} content__icon={courses} content__info={coursesQuantity} />
      <Summary__Card content__name={"Instructors"} content__icon={instructors} content__info={instructorsQuantity} />
      <Summary__Card content__name={"Online Students"} content__icon={students} content__info={studentsQuantity} />
      <Summary__Card content__name={"Total of Hours"} content__icon={hours} content__info={hoursQuantity} />
    </section>
  )
}

export default Summary