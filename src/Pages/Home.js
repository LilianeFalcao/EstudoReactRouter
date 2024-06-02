import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = ({error, loading, items}) => {
  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul className={styles.products}>
        {items && items.map((prod) =>(
          <li className={styles.productsLi} key={prod.id}>
              <h2 className={styles.headers}>{prod.name}</h2>
              <p>R$: {prod.value}</p>
              {/*dados dinamicos*/}
              <Link className={styles.details} to={`/produtos/${prod.id}`}>Detalhes</Link>
          </li>
      ))}
      </ul>
    </div>
  );
};

export default Home;