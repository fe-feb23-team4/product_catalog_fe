import './App.scss';
import { CardItem } from './components/CardItem';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CardCatalog } from './components/CardCatalog/CardCatalog';

function App() {
  return (
    <div className="App">
      <Header />
      <CardItem />
      <CardCatalog />
      <Footer />
    </div>
  );
}

export default App;
