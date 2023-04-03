import React from 'react';
import { useState } from 'react';
import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';

const CoursesFilter = (props: { filters: any; }) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const {filters} = props;
  const addQueryParams = () => {
    // query params changes
  }

  return (
    <form className="courses-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`courses-filter__menu-btn ${filtersOpen ? 'courses-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button>
      
      <div className={`courses-filter__wrapper ${filtersOpen ? 'courses-filter__wrapper--open' : ''}`}>
        <div className="courses-filter__block">
          <button type="button">course type</button>
          <div className="courses-filter__block__content">
            {filters?.topic?.map((item:string) => (
              <Checkbox 
                key={item} 
                name="course-type" 
                label={item} 
              />
            ))}
          </div>
        </div>
        
        <div className="courses-filter__block">
          <button type="button">Level</button>
          <div className="courses-filter__block__content">
            {filters?.level?.map((item:string) => (
             <Checkbox 
             key={item} 
             name="course-level" 
             label={item} 
           />
            ))}
          </div>
        </div>
        
        <div className="courses-filter__block">
          <button type="button">Language</button>
          <div className="courses-filter__block__content">
              {filters?.language?.map((item:string) => (
                <Checkbox 
                key={item} 
                name="course-language" 
                label={item} 
              />
              ))}
          </div>
        </div>

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}
  
export default CoursesFilter
  