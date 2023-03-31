import { useState } from 'react';
import List from './list';

const CoursesContent = () => {
  const [orderCoursesOpen, setOrderCoursesOpen] = useState(false);
  return (
    <section className="courses-content">
      <div className="courses-content__intro">
        <h2>Results <span>(133)</span></h2>
        <button type="button" onClick={() => setOrderCoursesOpen(!orderCoursesOpen)} className="courses-filter-btn"><i className="icon-filters"></i></button>
        <form className={`courses-content__filter ${orderCoursesOpen ? 'courses-order-open' : ''}`}>
          <div className="courses__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <List />
    </section>
  );
};
  
export default CoursesContent
  