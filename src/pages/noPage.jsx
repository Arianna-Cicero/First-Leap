import Layout from "../components/layout";
import error from "../assets/404-error.svg";

function NoPage() {
  return (
    <Layout>
      <div className="container text-center">
        <img src={error} style={{ width: 600 }} />
        <h1>Oopsie!</h1>
        <p className="text-break">
          A página que estavas a tentar encontrar pode ter sido apagada, o nome
          foi modificado ou está temporalmente indisponível.
        </p>
        <a className="btn btn-outline-success " role="button" href="/home">
          Voltar para a homepage
        </a>
      </div>
    </Layout>
  );
}
export default NoPage;
