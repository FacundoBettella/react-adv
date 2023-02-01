import "../styles/custom-styles.css";
import styles from "../styles/styles.module.css";
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
            ({ isMaxCountReached, count, reset, increaseBy }) => (
              <>
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className='text-white text-bold' />
                <ProductCard.Buttons className="custom-button" style={{ display: "flex", justifyContent: "flex-end" }} />
                {/* { JSON.stringify(args, null, 3) } */}

                <div
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 6,
                    padding: 8,
                  }}>

                  <button onClick={() => increaseBy(-2)}> -2 </button>
                  {
                    !isMaxCountReached &&
                    <button onClick={() => increaseBy(+2)}> +2 </button>
                  }
                  <span className={styles.countLabel}>{count}</span>

                  <button onClick={reset}> Reset </button>
                </div>
              </>

            )
          }
        </ProductCard>
      </div>
    </>
  )
}

export default Shopping;