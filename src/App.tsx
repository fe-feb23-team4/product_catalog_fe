import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CardItem } from './components/CardItem';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';
import { CardCatalog } from './components/CardCatalog/CardCatalog';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/phones" element={<h1>Phones</h1>} />
          <Route path="/tablets" element={<h1>Tablets</h1>} />
          <Route path="/accessories" element={<h1>Accesories</h1>} />
          <Route path="/favourite" element={<h1>Favourite</h1>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
      <CardItem />
      <CardCatalog />
      <Footer />
    </div>
  );
}

export default App;
