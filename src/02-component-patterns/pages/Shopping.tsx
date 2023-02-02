import { ProductCard } from '../components';
import { products } from "../data/products";

const Shopping = () => {

  return (
    <>
      <h1>Shopping Store</h1>
      <hr style={{ width: "100%" }} />

      <ProductCard
        product={products[2]}
        initialValues={{
          count: 5,
          maxCount: 10,
        }}
      >
        {
          ({ isMaxCountReached, count, reset, increaseBy }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </>
          )
        }
      </ProductCard>
    </>
  )
}

export default Shopping;