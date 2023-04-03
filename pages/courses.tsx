import Layout from "layouts/Main";
import Footer from "components/footer";
import Breadcrumb from "components/breadcrumb";
import CoursesFilter from "components/courses-filter";
import CoursesContent from "components/courses-content";
import { getAllFilters } from "lib/db/services/filters.services";

const Courses = (props: { filters: any }) => {
  const { filters } = props;
  return (
    <Layout>
      <Breadcrumb />
      <section className="courses-page">
        <div className="container">
          <CoursesFilter filters={filters} />
          <CoursesContent />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export function getStaticProps() {
  const allFilters = getAllFilters();

  return {
    props: {
      filters: allFilters,
    },
  };
}

export default Courses;
