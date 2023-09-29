import React from 'react'
import Summary__Card from './Summary__Card'
import courses from "../assets/online__courses.png";
import instructors from '../assets/instructors.png'
import students from '../assets/students.png'
import hours from '../assets/hours.png'



const Summary = () => {
  return (
    <section className='summary'>
      <Summary__Card content__name={"Online Courses"} content__icon={courses} content__info={"1K+ "} />
      <Summary__Card content__name={"Instructors"} content__icon={instructors} content__info={"100+ "} />
      <Summary__Card content__name={"Online Students"} content__icon={students} content__info={"20K+ "} />
      <Summary__Card content__name={"Total of Hours"} content__icon={hours} content__info={"10K hours"} />
    </section>
  )
}

export default Summary