import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop'; // Will create these next
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<div className="container section"><h2>My Account - Coming Soon</h2></div>} />
            </Routes>
          </main>
          <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#2C5530', color: 'white', marginTop: '2rem' }}>
            <div className="container">
              <p>&copy; 2024 Zen Tea. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
