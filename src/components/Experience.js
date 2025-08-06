import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Experience = () => {
  return (
    <div className="section resume" id="section-experience">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Experience</div>
          <div className="subtitle">Working with</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.experience}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2022 - 2023</div>
                <div className="name">
                  Senior Frontend Engineer, <br /> Inxeption (ISL, Codify)
                </div>
                <div className="single-post-text">
                  <p>
                  Developed custom web components using React and integrated third-party libraries for seamless functionality. Built advanced features such as real-time notifications, interactive maps with geolocation, and responsive UI components optimized for performance across modern browsers.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date"> 2019 -2020</div>
                <div className="name">
                  FullStack Engineer,<br /> Keyvent (ISL, CCE)
                </div>
                <div className="single-post-text">
                  <p>
                    Built dynamic dashboards and enterprise applications using Vue.js and React.js.
                    Worked with Node.js on backend integrations, ensuring seamless client-server interactions.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date"> 2020 -2023 </div>
                <div className="name">
                  Full Stack Engineer(Team Lead) ,<br /> NavaTec Gmbh (Germany
                  ,Onsite/remote)

                </div>
                <div className="single-post-text">
                  <p>
                    Led the design and development of React Native apps with seamless integrations into
                    existing native ecosystems.
                    Delivered high-performance iOS applications using Swift and ObjectiHealthKit, Core Data, and Background Processing for fitness apps.


                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2012-2014</div>
                <div className="name">
                  Art Director <br />
                  Facebook
                </div>
                <div className="single-post-text">
                  <p>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2010-2012</div>
                <div className="name">
                  Art Director <br />
                  Facebook
                </div>
                <div className="single-post-text">
                  <p>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna.
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="experience_prev prev fas fa-chevron-left" />
            <span className="experience_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
