import { GetServerSideProps } from 'next'

import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import CoursesFeatured from '../../components/courses-featured';
import Gallery from '../../components/course-single/gallery';
import Content from '../../components/course-single/content';
import Description from '../../components/course-single/description';
import Reviews from '../../components/course-single/reviews';
import { server } from '../../utils/server'; 

// types
import { CourseType } from 'types';

type CoursePageType = {
  course: CourseType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const cid = query.cid;
  const res = await fetch(`${server}/api/course/${cid}`);
  const course = await res.json();
  return {
    props: {
      course,
    },
  }
}

const course = ({ course }: CoursePageType) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb />

      <section className="course-single">
        <div className="container">
          <div className="course-single__content">
            <Gallery images={course.images} />
            <Content course={course} />
          </div>

          <div className="course-single__info">
            <div className="course-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button>
            </div>

            <Description show={showBlock === 'description'} />
            <Reviews course={course} show={showBlock === 'reviews'} />
          </div>
        </div>
      </section>

      <div className="course-single-page">
        <CoursesFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default course
