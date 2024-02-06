import logo from './logo.svg';
import './App.css';

import Navibar from './componentes/Layout/Navibar';
import Home from './componentes/paginas/Home';
import Produtos from './componentes/paginas/Produtos';
import Produto from './componentes/paginas/Produto';
import Fazer_Pedido from './componentes/paginas/Fazer_Pedido';
import Pedidos from './componentes/paginas/Pedidos';
import Pedido from './componentes/paginas/Pedido';
import Conteiner from './componentes/Layout/Conteiner';
import Footer from './componentes/Layout/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProdutoForm from './componentes/paginas/ProdutoForm';

function App() {
  return (
    <Router>
      <Navibar/>
      <Routes>
        <Route exact path='/' element={<Conteiner customClass="min-height"><Home/></Conteiner>}/>
      </Routes>
      <Routes>
        <Route path='/produtos' element={<Conteiner customClass="min-height"><Produtos/></Conteiner>}/>
      </Routes>
      <Routes>
        <Route path='/produto/:id' element={<Conteiner customClass="min-height"><ProdutoForm/></Conteiner>}/>
      </Routes>
      <Routes>
        <Route path='/fazerPedido' element={<Conteiner customClass="min-height"><Fazer_Pedido/></Conteiner>}/>
      </Routes>
      <Routes>
        <Route path='/pedidos' element={<Conteiner customClass="min-height"><Pedidos/></Conteiner>}/>
      </Routes>
      <Routes>
        <Route path='/pedido/:id' element={<Conteiner customClass="min-height"><Pedido/></Conteiner>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
