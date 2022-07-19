import React from 'react';
import Products from './Products';

export default function Home(props) {
  const { products, addItem } = props;
  return (
    <div className="products-section">
      <div className="products"></div>
      <br />
      <br />
      {products.map((product) => (
        <Products
          key={product.id}
          product={product}
          addItem={addItem}
        ></Products>
      ))}
    </div>
  );
}
