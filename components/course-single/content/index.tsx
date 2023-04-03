import React from 'react';
import { some } from 'lodash';
import { CourseType, CourseStoreType } from 'types';
import { useUserContext } from "context/user";
type CourseContent = {
  course: CourseType;
}

const Content = ({ course }: CourseContent) => {
  const { favCourses,toggleFavCourse,addToCart } = useUserContext();
  const isFavourite = some(favCourses, courseId => courseId === course.id);

  const toggleFav = () => {
    toggleFavCourse(course.id)
  }

  const _addToCart = () => {
    const courseToSave: CourseStoreType = { 
      id: course.id,
      name: course.name,
      thumb: course.images ? course.images[0] : '',
      price: course.currentPrice,
    }

    addToCart(courseToSave);
  }

  return (
    <section className="course-content">
      <div className="course-content__intro">
        <h5 className="course__id">Course ID: {course.id}</h5>
        <span className="course-on-sale">Sale</span>
        <h2 className="course__name">{course.name}</h2>

        <div className="course__prices">
          <h4>${ course.currentPrice }</h4>
          {course.discount &&
            <span>${ course.price }</span>
          }
        </div>
      </div>

      <div className="course-content__filters">
        <div className="course-filter-item">
          <div className="quantity-buttons">
            <button type="submit" onClick={() => _addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    