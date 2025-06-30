import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // <-- Add this

  const addItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // Filter products based on searchTerm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar
        countCartItems={cartItems.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div>
        <Home addItem={addItem} products={filteredProducts} />
        <Cart
          addItem={addItem}
          removeItem={removeItem}
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}

export default App;