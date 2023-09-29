import React from 'react'
import homeImageLeft from '../assets/homeImageLeft.png'
import homeImageRight from '../assets/homeImageRight.png'

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home__image__container__left">
        <img src={homeImageLeft} alt="home image left"  className='home__image__left'/>
      </div>
      <div className="home__content">
        <div className="home__content__announcement">
          <div className="home__content__announcement__header">
          <p className="home__content__announcement__header__title">
            Explore Limitless Learning Opportunities
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 29 28" fill="none">
              <path d="M28.5 14C28.5 21.7319 22.2319 28 14.5 28C6.76811 28 0.5 21.7319 0.5 14C0.5 6.26811 6.76811 0 14.5 0C22.2319 0 28.5 6.26811 28.5 14Z" fill="#FFCC4D"/>
              <path d="M14.4999 16.3334C11.682 16.3334 9.81222 16.0051 7.49989 15.5556C6.97178 15.4537 5.94434 15.5556 5.94434 17.1111C5.94434 20.2222 9.51822 24.1111 14.4999 24.1111C19.4808 24.1111 23.0554 20.2222 23.0554 17.1111C23.0554 15.5556 22.028 15.4529 21.4999 15.5556C19.1876 16.0051 17.3178 16.3334 14.4999 16.3334Z" fill="#664500"/>
              <path d="M7.5 17.1111C7.5 17.1111 9.83333 17.8889 14.5 17.8889C19.1667 17.8889 21.5 17.1111 21.5 17.1111C21.5 17.1111 19.9444 20.2222 14.5 20.2222C9.05556 20.2222 7.5 17.1111 7.5 17.1111Z" fill="white"/>
              <path d="M12.6972 3.43233L9.16451 4.05533L7.34451 0.747437C7.14385 0.382659 6.73162 0.187437 6.32407 0.258992C5.91418 0.331326 5.59529 0.656437 5.53151 1.0671L4.95207 4.7981L1.4194 5.4211C1.00329 5.49421 0.682068 5.82944 0.625291 6.24866C0.568513 6.66788 0.789402 7.07544 1.17207 7.25744L4.33762 8.7601L3.75585 12.5028C3.69129 12.9197 3.90285 13.3303 4.27929 13.5209C4.41851 13.5909 4.56785 13.6243 4.7164 13.6243C4.97074 13.6243 5.22196 13.5248 5.4094 13.335L8.14096 10.5653L11.655 12.2337C12.0361 12.4141 12.4903 12.3293 12.7796 12.0221C13.069 11.7149 13.1265 11.2568 12.9235 10.8873L11.0973 7.56777L13.559 5.07266C13.8561 4.77166 13.9237 4.31277 13.7277 3.93788C13.5302 3.56299 13.111 3.35999 12.6972 3.43233ZM16.303 3.43233L19.8356 4.05533L21.6556 0.747437C21.8563 0.382659 22.2685 0.187437 22.6761 0.258992C23.0852 0.331326 23.4041 0.656437 23.4678 1.0671L24.0473 4.7981L27.58 5.4211C27.9968 5.49421 28.3181 5.82866 28.3741 6.24788C28.4301 6.6671 28.21 7.07466 27.8273 7.25666L24.6617 8.75933L25.2435 12.502C25.3081 12.9189 25.0965 13.3295 24.7201 13.5201C24.5808 13.5901 24.4315 13.6235 24.283 13.6235C24.0286 13.6235 23.7774 13.524 23.59 13.3342L20.8584 10.5645L17.3444 12.2329C16.9633 12.4133 16.5091 12.3285 16.2197 12.0213C15.9304 11.7141 15.8728 11.256 16.0758 10.8865L17.9021 7.56777L15.4404 5.07266C15.1433 4.77166 15.0756 4.31277 15.2716 3.93788C15.47 3.56299 15.8892 3.35999 16.303 3.43233Z" fill="#E95F28"/>
            </svg>
          </p>
          <p className="home__content__announcement__header__txt">
            <p className="home__content__announcement__header__txt__one"> Unlock Your Potential with </p> 
            <p className="home__content__announcement__header__txt__two"> Interactive Learning Adventures.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 40 45" fill="none">
                <g opacity="0.4">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.56463 23.9919C4.80694 18.2885 4.72559 12.7961 4.87447 7.0111C4.9034 5.88131 4.11738 4.94203 3.1198 4.908C2.12161 4.87397 1.28856 5.76558 1.25902 6.89536C1.11797 12.381 1.23191 17.6011 0.05289 23.0186C-0.185808 24.1144 0.407935 25.2237 1.37719 25.4892C2.34584 25.7614 3.32653 25.0876 3.56463 23.9919Z" fill="#0066CC"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1189 35.0447C22.5469 26.3467 30.4878 15.1578 36.0381 3.85995C36.5221 2.87309 36.2068 1.62756 35.334 1.08308C34.4612 0.538605 33.3594 0.892543 32.8753 1.87941C27.5083 12.8029 19.8284 23.6244 11.6789 32.0297C10.9423 32.792 10.8911 34.0851 11.5644 34.9155C12.2377 35.7458 13.3823 35.807 14.1189 35.0447Z" fill="#0066CC"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.254 44.5459C23.9623 45.9819 31.9074 43.5318 38.9164 40.0676C39.8308 39.6116 40.2479 38.407 39.8483 37.3793C39.4481 36.3448 38.3805 35.8751 37.4661 36.3243C31.0828 39.4823 23.8634 41.8235 16.8429 40.5168C15.858 40.333 14.9267 41.0885 14.7646 42.1979C14.6018 43.3072 15.2697 44.3621 16.254 44.5459Z" fill="#0066CC"/>
                </g>
              </svg>
          </p>
          </div>
          <div className="home__content__announcement__footer">
            <p className="home__content__announcement__footer__txt">
              Your Gateway to Interactive Learning Adventures.
              Discover a world of knowledge and growth through our engaging courses  and resources. 
              Join a vibrant community of learners, unlock your  full potential,
              and embark on an enlightening journey towards success.
            </p>
          </div>
        </div>
        <div className="home__content__button__container">
          <button className="home__content__button__left">Get Start</button>
          <button className="home__content__button__right">Try for free</button>
        </div>
      </div>
      <div className="home__image__container__right">
        <img src={homeImageRight} alt="home image right"  className='home__image__right'/>
      </div>
      <div className="home__image__small">
      <img src={homeImageLeft} alt="home image left"  className='home__image__left__small'/>
      <img src={homeImageRight} alt="home image right"  className='home__image__right__small'/>
      </div>
    </section>
  )
}

export default Home