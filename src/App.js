import './App.css';
// Config do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';

// Pages
import Home from './Pages/Home';
import About from './Pages/About/About';
import NaoEncontrado from './Pages/NaoEncontrado';
import Product from './Pages/Product';
import Infos from './Pages/Infos';
import Search from './Pages/Search';

// Components
import NavBar from './components/NavBar/NavBar';
import FormBusca from './components/Form/FormBusca';

import { useState } from 'react';

function App() {
  const url = "http://localhost:3000/produtos";
  
  const {dados: items, loading, error} = useFetch(url);

  //controle de input search
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <FormBusca search={search} setSearch={setSearch} />
        <Routes>
          <Route path='/' element={
            <Home 
            error={error}
            loading={loading}
            items={items}
            />} 
          />
          <Route path='/about' element={<About />} />
          {/*nested route*/}
          <Route path='/produtos/:id/info' element={<Infos />} />
          <Route path='/produtos/:id' element={<Product />} />
          {/*SearchRoute */}
          <Route path='/search' element={<Search />}/>
          {/*rota "404" */}
          <Route path='*' element={<NaoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
