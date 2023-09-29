import React from 'react'
import blog from '../assets/blog.png'
const Blog = () => {
  return (
    <div className='blog' id='blog'>
        <div className="blog__container">
        <div className="blog__container__video__container two">
                <img src={blog} alt="blog" className="blog__container__video" />
        </div>       
            <div className="blog__container__context">
                <p className="blog__container__context__title">
                    Discover Our Vision and Product
                </p>
                <p className="blog__container__context__txt">
                    Welcome to our world of possibilities! In this section,
                    we invite you to explore our inspiring vision and 
                    discover our exceptional product. Watch the video to
                    gain insights into our mission, values, and the 
                    transformative impact our platform brings to learners
                    of all backgrounds. Learn how our carefully curated 
                    courses and cutting-edge tools empower you to achieve 
                    your goals and unleash your true potential. Embark on a 
                    journey of knowledge and growth with us 
                    the future of learning awaits.
                </p>    
            </div>  

            <div className="blog__container__video__container">
                <img src={blog} alt="blog" className="blog__container__video" />
            </div>         
        </div>
    </div>
  )
}

export default Blog