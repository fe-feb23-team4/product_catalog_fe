import './App.scss';
import { CardItem } from './components/CardItem';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CardItem />
      <Footer />
    </div>
  );
}

export default App;
