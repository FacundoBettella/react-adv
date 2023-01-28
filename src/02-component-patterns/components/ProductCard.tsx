import { CSSProperties, ReactElement, createContext } from "react";

import { IProductCardContext, Product } from "../interfaces/interfaces";

import useProducts from "../hooks/useProducts";

import styles from "../styles/styles.module.css";
// import { ProductButtons, ProductImage, ProductTitle } from "./";

export const ProductCardContext = createContext({} as IProductCardContext);

export interface IProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
}

export const ProductCard = ({ product, children, className, style }: IProps) => {
    const { counter, increaseBy } = useProducts();

    return (
        <ProductCardContext.Provider
            value={{
                product,
                counter,
                increaseBy
            }}>
            <div 
                className={`${styles.productCard} ${className}`} 
                style={style}
            >
                {children}
            </div>
        </ProductCardContext.Provider>
    )
};

/*
    Se puede asignar componentes a otro componente de este modo
    cuando los componentes a añadir se encuentran en el mismo archivo.
*/

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
