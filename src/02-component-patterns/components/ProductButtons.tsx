import { CSSProperties, useContext } from "react";

import { ProductCardContext } from "./ProductCard";
import { ProductCardButtons } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface IButtonProps {
    className?: string;
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: IButtonProps) => {
    const { counter, increaseBy }: ProductCardButtons = useContext(ProductCardContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
};