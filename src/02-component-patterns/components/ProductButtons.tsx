import { CSSProperties, useCallback, useContext } from "react";

import { ProductCardContext } from "./ProductCard";
import { ProductCardButtons } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export interface IButtonProps {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: IButtonProps) => {

    const { counter, maxCount, increaseBy }: ProductCardButtons = useContext(ProductCardContext);

    /* Magic */
    const isMaxReached = useCallback(
        () => !!maxCount && maxCount === counter,
        [counter, maxCount]
    );

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
};