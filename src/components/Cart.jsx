import React from 'react';

export default function Cart(props) {
  const { cartItems, addItem, removeItem } = props;
  const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  const totalPrice = itemsPrice;

  return (
    <div id="cart-section" className="cart">
      <h2>Cart</h2>
      <br />
      <div>{cartItems.length === 0 && <div>Your cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-name-cart">{item.name}</div>
          <br />

          <div className="item-price-cart">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
          <br />
          <div className="quant-btn">
            <button onClick={() => addItem(item)} className="add">
              +
            </button>
            <button onClick={() => removeItem(item)} className="remove">
              -
            </button>
          </div>
          <br />
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="total-price-section">
            <br />
            <strong>Total Price</strong>
            <br />
            <div className="total-price">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <br />
          <hr />
          <div className="confirm-order-btn">
            <br />
            <br />
            <button onClick={() => alert('Your order has been confirmed :)')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
