import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import CoursesFeatured from '../components/courses-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />
      <CoursesFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage