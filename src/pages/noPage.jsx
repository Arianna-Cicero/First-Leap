import Layout from "../components/layout";
import error from "../assets/404-error.svg";

function NoPage() {
  return (
    <Layout>
      <div className="container">
        <img src={error} />
      </div>
    </Layout>
  );
}
export default NoPage;
