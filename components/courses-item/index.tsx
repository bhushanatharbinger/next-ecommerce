import Link from "next/link";
import { some } from "lodash";
import { CourseTypeList } from "types";
import { useUserContext } from "context/user";
import React from "react";

const CourseItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
}: CourseTypeList) => {
  const { favCourses,toggleFavCourse } = useUserContext();

  const isFavourite = some(favCourses, (courseId) => courseId === id);

  const toggleFav = () => {
    toggleFavCourse(id)
  };

  return (
    <div className="courses-item">
      <div className="course__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart"></i>
        </button>

        <Link href={`/course/${id}`}>
          <a>
            <img src={images ? images[0] : ""} alt="course" />
            {discount && <span className="course__discount">{discount}%</span>}
          </a>
        </Link>
      </div>

      <div className="course__description">
        <h3>{name}</h3>
        <div
          className={
            "course__price " + (discount ? "course__price--discount" : "")
          }
        >
          <h4>${currentPrice}</h4>

          {discount && <span>${price}</span>}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
