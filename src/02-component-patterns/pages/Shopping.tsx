import "../styles/custom-styles.css"

import useShoppingCart from "../hooks/useShoppingCart";

import { ProductButtons, ProductCard, ProductImage } from '../components';

import { products } from "../data/products";

const Shopping = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <>
      <h1>Shopping Store</h1>

      <hr style={{ width: "100%" }} />

      <div className="shopping-div">

        {
          products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              className='bg-dark'
              style={{ backgroundColor: "#70D1F8" }}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductCard.Image
                className="custom-image"
              />
              <ProductCard.Title
                className='text-white text-bold'
              />
              <ProductCard.Buttons
                className="custom-button"
                style={{ display: "flex", justifyContent: "flex-end" }}
              />
            </ProductCard>
          ))
        }

        <div className='shopping-card'>
          {
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard
                key={key}
                product={product}
                className='bg-dark'
                style={{ width: "100px" }}
                onChange={onProductCountChange}
                value={product.count}
              >
                <ProductImage
                  image={product.img}
                  className="custom-image"
                />
                <ProductButtons
                  className="custom-button"
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </ProductCard>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Shopping;