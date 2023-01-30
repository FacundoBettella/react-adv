import "../styles/custom-styles.css"

import { useState } from "react";

import { ProductButtons, ProductCard, ProductImage } from '../components';
import { Product } from '../interfaces/interfaces';

/* Compound component pattern */

const product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png"
}

const product2 = {
  id: 2,
  title: "No stock",
}

const product3 = {
  id: 3,
  title: "Coffee Mug 2",
  img: "./coffee-mug2.png"
}

const products: Product[] = [product, product2, product3];

interface IProductInCart extends Product {
  count: number;
}

const Shopping = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: IProductInCart }>({});

  const onProductCountChange = () => {

  }

  return (
    <>
      <h1>Shopping Store</h1>

      <hr style={{ width: "100%" }} />

      <div className="shopping-div">

        {
          products.map(product => (
            <ProductCard product={product} className='bg-dark' style={{ backgroundColor: "#70D1F8" }}>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className='text-white text-bold' />
              <ProductCard.Buttons className="custom-button" style={{ display: "flex", justifyContent: "flex-end" }} />
            </ProductCard>

          ))
        }

        <div className='shopping-card'>
          <ProductCard
            product={product3}
            className='bg-dark'
            style={{ width: "100px" }}
            onChange={ onProductCountChange }
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-button" style={{ display: "flex", justifyContent: "flex-end" }} />
          </ProductCard>
        </div>

      </div>
    </>
  )
}

export default Shopping;