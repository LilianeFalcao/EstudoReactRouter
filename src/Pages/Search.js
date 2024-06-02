import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import styles from "./Search.module.css"

const Search = () => {
    const [searchParams] = useSearchParams()
    const urlSearch = "http://localhost:3000/produtos?" + searchParams;
    const { dados: items, loading, error } = useFetch(urlSearch);

    return (
        <div>
            <h1>Resultado da busca</h1>
            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            <ul className={styles.products}>
                {items && items.map((prod) => (
                    <li className={styles.productsLi} key={prod.id}>
                        <h2 className={styles.headers}>{prod.name}</h2>
                        <p>R$: {prod.value}</p>
                        <Link className={styles.details} to={`/produtos/${prod.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search
