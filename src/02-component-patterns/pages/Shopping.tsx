import "../styles/custom-styles.css"
import { ProductCard } from '../components';
import { products } from "../data/products";

const Shopping = () => {

  return (
    <>
      <h1>Shopping Store</h1>
      <hr style={{ width: "100%" }} />

      <div className="shopping-div">
        <ProductCard
          product={products[2]}
          className='bg-dark'
          style={{ backgroundColor: "#6bb6d3" }}
          initialValues={{
            count: 5,
            maxCount: 10,
          }}
        >
          {
            () => (
              <>
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className='text-white text-bold' />
                <ProductCard.Buttons className="custom-button" style={{ display: "flex", justifyContent: "flex-end" }} />
              </>

            )
          }
        </ProductCard>
      </div>
    </>
  )
}

export default Shopping;