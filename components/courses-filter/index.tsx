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
            {filters?.map(type => (
              <Checkbox 
                key={type.id} 
                name="course-type" 
                label={type.name} 
              />
            ))}
          </div>
        </div>
        
        <div className="courses-filter__block">
          <button type="button">Size</button>
          <div className="courses-filter__block__content checkbox-square-wrapper">
            {filters?.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="course-size" 
                label={type.label} />
            ))}
          </div>
        </div>
        
        <div className="courses-filter__block">
          <button type="button">Color</button>
          <div className="courses-filter__block__content">
            <div className="checkbox-color-wrapper">
              {filters?.map(type => (
                <CheckboxColor key={type.id} valueName={type.color} name="course-color" color={type.color} />
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}
  
export default CoursesFilter
  