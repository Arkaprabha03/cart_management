import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList'; 
import Cart from './components/Cart';
import { CartProvider} from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <nav>
          <Link to="/">
          <h1>products</h1>
          </Link>
          <Link to="/cart">
          <h1>Cart</h1>
          </Link>
        </nav>
      <Routes>
        <Route path="/" element={<ProductList />} /> 
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
