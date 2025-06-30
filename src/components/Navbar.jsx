import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = ({ countCartItems, searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      {/* Left side (logo or brand) */}
       <div>
        <h1 className="logo">Best Media</h1>
      </div>
      {/* Center (search bar) */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Right side (cart) */}
      <div className="navbar-cart">
          <div>
        <a href="#cart-section">
          <ShoppingCartOutlinedIcon className="cart-icon" />
          {countCartItems ? (
            <button className="item-amount-cart">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
</div>


    </nav>
  );
};

export default Navbar;