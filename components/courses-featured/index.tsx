import CoursesCarousel from './carousel';
import useSwr from 'swr';

const CoursesFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/courses', fetcher);

  return (
    <section className="section section-courses-featured">
      <div className="container">
        <header className="section-courses-featured__header">
          <h3>Trending courses</h3>
          <a href="/courses" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <CoursesCarousel courses={data} />
      </div>
    </section>
  )
};

export default CoursesFeatured