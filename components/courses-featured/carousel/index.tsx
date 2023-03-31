import CourseItem from '../../courses-item';
import { CourseTypeList } from 'types';
import { Swiper, SwiperSlide } from 'swiper/react';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type CoursesCarouselType = {
  courses: CourseTypeList[]
}

const CoursesCarousel = ({ courses }: CoursesCarouselType) => {
  if (!courses) return <div>Loading</div>;

  return (
    <div className="courses-carousel">
      <Swiper 
      spaceBetween={spaceBetween} 
      loop={true} 
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-wrapper">
        {courses.map(item => (
          <SwiperSlide key={item.id}>
            <CourseItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CoursesCarousel