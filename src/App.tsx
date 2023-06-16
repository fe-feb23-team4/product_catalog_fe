import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';
import { FavoritePage } from './components/FavoritePage/FavoritePage';
import { ItemCard } from './components/ItemCard';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { HomePage } from './components/HomePage';
import { MyContextProvider } from './Context/MyContext';

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <div className="flex-wrapper">
          <HashRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/phones" element={<PhonesPage />} />
              <Route path="/tablets" element={<TabletsPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/favourite" element={<FavoritePage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </HashRouter>
        </div>
        <ItemCard />
        <Footer />
      </div>
    </MyContextProvider>
  );
}

export default App;
