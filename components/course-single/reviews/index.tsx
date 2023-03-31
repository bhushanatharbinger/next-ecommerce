import ReviewsList from './reviews-list';
import Punctuation from './punctuation';
import { CourseType } from 'types';

type ReviewsCourseType = {
  show: boolean;
  course: CourseType
}

const Reviews = ({ show, course }: ReviewsCourseType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="course-single__reviews">
      <Punctuation 
        punctuation={course.punctuation.punctuation}
        countOpinions={course.punctuation.countOpinions}
        votes={course.punctuation.votes} 
      />
      <ReviewsList reviews={course.reviews} />
    </section>
  );
};
  
export default Reviews;
    