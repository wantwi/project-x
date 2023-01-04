import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const data = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 21, 31, 41, 51, 61, 18, 91, 110];
const Slider = () => {
  return (
    <div style={{width:"90%", margin:"0 auto"}}>
         <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      infinite={true}
      responsive={responsive}
      autoPlaySpeed={1000}
      keyBoardControl={true}
    //   customTransition="all .5"
    //   transitionDuration={500}
    //   containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {data.map((x) => (
        <div key={x} className="box">
          <div className="img-container">
            <img src={`https://unsplash.it/201/20${x}`} />
          </div>
          <div className="content">
            <div className="">
              <h2>Something here</h2>
            </div>
            <div className="progress-bar"></div>
            
          </div>
          <div className="detail" >
              <div className="learn-more">
                Learn More
              </div>
              <div className="dontate-link">
                Donate Now
              </div>
            </div>
        </div>
      ))}
    </Carousel>
    </div>
   
  );
};

export default Slider;
