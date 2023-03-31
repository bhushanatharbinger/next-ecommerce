import useSwr from 'swr';
import CourseItem from '../../courses-item';
import CoursesLoading from './loading';
import { CourseTypeList } from 'types';

const CoursesContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/courses', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <CoursesLoading />
      }

      {data &&
        <section className="courses-list">
          {data.map((item: CourseTypeList)  => (
            <CourseItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default CoursesContent