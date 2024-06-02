import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {
  const { id }  = useParams();

  const url = "http://localhost:3000/produtos/" + id;
  const {dados: produtos, loading, error} = useFetch(url);

  console.log(produtos);
  return (
    <>
      <p>ID do produto {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {produtos && 
        <div>
          <h1>{produtos.name}</h1>
          <p>R$: {produtos.value}</p>
          {/*nested routes */}
          <Link to={`/produtos/${produtos.id}/info`}> Mais informações</Link>
        </div>}
    </>
  )
}

export default Product