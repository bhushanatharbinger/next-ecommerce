type CourseDescriptionType = {
  show: boolean;
}

const Description = ({ show }: CourseDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="course-single__description">
      <div className="course-description-block">
        <i className="icon-cart"></i>
        <h4>Details and course description</h4>
        <p>White Summer Vibes T-shirt in the uiKit line with a colorful print. <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p>
      </div>
      <div className="course-description-block">
        <i className="icon-cart"></i>
        <h4>Details and course description</h4>
        <p>White Summer Vibes T-shirt in the uiKit line with a colorful print. <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p>
      </div>
    </section>
  );
};
  
export default Description;
    