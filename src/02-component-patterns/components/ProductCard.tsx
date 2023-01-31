import { CSSProperties, ReactElement, createContext } from "react";

import { IProductCardContext, InitialValues, Product, onChangeProductArgs } from "../interfaces/interfaces";

import useProducts from "../hooks/useProducts";

import styles from "../styles/styles.module.css";
// import { ProductButtons, ProductImage, ProductTitle } from "./";

export const ProductCardContext = createContext({} as IProductCardContext);

export interface IProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeProductArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: IProps) => {

    const { counter, increaseBy } = useProducts({ onChange, product, value, initialValues });

    return (
        <ProductCardContext.Provider
            value={{
                counter,
                increaseBy,
                product,
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
