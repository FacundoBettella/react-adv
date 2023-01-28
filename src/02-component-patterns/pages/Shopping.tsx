import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import "../styles/custom-styles.css"

/* Compound component pattern */

const product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png"
}

const product2 = {
  id: 1,
  title: "Coffee Mug",
}

const Shopping = () => {
  return (
    <>
      <h1>Shopping Store</h1>

      <hr style={{ width: "100%" }} />

      <div className="shopping-div">
        <ProductCard product={product} className='bg-dark' >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className='text-white text-bold' />
          <ProductCard.Buttons className="custom-button"  />
        </ProductCard>

        <ProductCard product={product2} className='bg-dark' style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage className="custom-image" />
          <ProductTitle className='text-white text-bold' title='No Product' />
          <ProductButtons className="custom-button" style={{ display: "flex", justifyContent: "flex-end" }}/>
        </ProductCard>
      </div>
    </>
  )
}

export default Shopping;