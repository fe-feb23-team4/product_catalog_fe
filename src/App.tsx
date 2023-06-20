import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Cart';
import { FavoritePage } from './components/FavoritePage/FavoritePage';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { HomePage } from './components/HomePage';
import { MyContextProvider } from './Context/MyContext';
import { ProductPage } from './components/ProductPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <div className="flex-wrapper">
          <HashRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/phones">
                <Route index element={<PhonesPage />} />
                <Route path=":phoneId" element={<ProductDetailsPage />} />
              </Route>
              <Route path="/tablets" element={<TabletsPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/favourite" element={<FavoritePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/test" element={<ProductPage />} />
            </Routes>
          </HashRouter>
        </div>
        <Footer />
      </div>
    </MyContextProvider>
  );
}

export default App;
