import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import CardView from './components/CardView';
import ProductCatalog from './components/ProductCatalog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductCatalog />
      <ProductCatalog />
      <ProductCatalog />
    </div>
  );
}

export default App;
