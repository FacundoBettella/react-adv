import { useState } from 'react'
import { IProductInCart, Product } from '../interfaces/interfaces';

const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: IProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {
                /*  delete shoppingCart[product.id]; */

                const { [product.id]: toDelete, ...rest } = oldShoppingCart; /* MAGIC */
                return { ...rest }
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}

export default useShoppingCart