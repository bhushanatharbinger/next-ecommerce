import {authenticator} from 'lib/api/utils/session'

const AdminPage = () => (
  <section className="error-page">
    <div className="container">
      <h1>Admin</h1>
      <p>Welcome Admin</p>
      <a href="/" className="btn btn--rounded btn--yellow">
        Go to home
      </a>
    </div>
  </section>
);

export const getServerSideProps = async ({ req,res })=> {
  const auth = await authenticator.fromCookieWithoutCSRF(req, res);
  console.log('auth',auth)
  if (!auth?.loggedin) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { },
  };
}

export default AdminPage;
