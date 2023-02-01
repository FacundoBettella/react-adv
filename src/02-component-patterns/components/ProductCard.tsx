import { CSSProperties, createContext } from "react";
import { IProductCardContext, IProductCardHandlers, InitialValues, Product, onChangeProductArgs } from "../interfaces/interfaces";
import useProducts from "../hooks/useProducts";
import styles from "../styles/styles.module.css";

export const ProductCardContext = createContext({} as IProductCardContext);

export interface IProps {
    product: Product;
    value?: number;
    initialValues?: InitialValues;
    className?: string;
    style?: CSSProperties;

    onChange?: (args: onChangeProductArgs) => void;
    children: (args: IProductCardHandlers) => JSX.Element;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: IProps) => {

    const { counter, isMaxCountReached, maxCount, increaseBy, reset } = useProducts({ onChange, product, value, initialValues });

    return (
        <ProductCardContext.Provider
            value={{
                counter,
                maxCount,
                increaseBy,
                product,
            }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: maxCount,
                        product,

                        increaseBy: increaseBy,
                        reset: reset,
                    })
                }
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
