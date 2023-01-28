import { useContext } from "react";

import { ProductCardContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
export interface ITitleProps {
    title?: string;
    className?: string;
  }
  
export const ProductTitle = ({ title, className }: ITitleProps ) => {
    const { product } = useContext(ProductCardContext);

    return (
        <span className={` ${styles.productDescription} ${className}` }>
            { title ? title : product.title }
        </span>
    )
};