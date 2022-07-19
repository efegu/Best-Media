import React from 'react';

export default function Products(props) {
  const { product, addItem } = props;
  return (
    <div className="product">
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
      ></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div className="add-to-cart">
        <br />
        <button onClick={() => addItem(product)}>Add To Cart</button>
        <br />
        <br />
      </div>
    </div>
  );
}
