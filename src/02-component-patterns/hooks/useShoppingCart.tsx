import { useState } from 'react'
import { IProductInCart, Product } from '../interfaces/interfaces';

const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: IProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            const productInCart: IProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

            if (Math.max(productInCart.count + count, 0) > 0) {

                productInCart.count += count;

                return {
                    ...oldShoppingCart,
                    [productInCart.id]: productInCart
                }
            }

            const { [productInCart.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest }


            /* The code below works fine if we modify useProducts contolled part...*/
            //   if (count === 0) {
            //     /*  delete shoppingCart[product.id]; */

            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart; /* MAGIC */
            //     return { ...rest }
            //   }

            //   return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, count }
            //   }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}

export default useShoppingCart