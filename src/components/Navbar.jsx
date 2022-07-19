import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar(props) {
  const { countCartItems } = props;
  return (
    <header className="header">
      <div>
        <h1 className="logo">Best Media</h1>
      </div>
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
    </header>
  );
}
