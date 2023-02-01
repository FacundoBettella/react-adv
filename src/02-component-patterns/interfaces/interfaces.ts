import { IProps as IProductCardProps } from "../components/ProductCard";
import { IButtonProps } from "../components/ProductButtons";
import { IImageProps } from "../components/ProductImage";
import { ITitleProps } from "../components/ProductTitle";

export interface IProductCardContext {
  counter: number;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface Product {
  id: number;
  title?: string;
  img?: string;
}

export interface ProductCardButtons {
  counter: number;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export interface IProductCardHOC {
  ({ product, children, className }: IProductCardProps): JSX.Element;
  Image: (Props: IImageProps) => JSX.Element;
  Title: (Props: ITitleProps) => JSX.Element;
  Buttons: (Props: IButtonProps) => JSX.Element;
}

export interface IProductInCart extends Product {
  count: number;
}

export interface onChangeProductArgs {
  count: number;
  product: Product;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
