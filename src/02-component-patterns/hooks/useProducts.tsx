import { useEffect, useState } from 'react'
import { Product, onChangeProductArgs } from '../interfaces/interfaces';

interface IProps {
    product: Product;
    onChange?: (args: onChangeProductArgs) => void;
    value?: number;
}

const useProducts = ({ onChange, product, value = 0 }: IProps) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ count: newValue, product});
    }

    useEffect(() => {
        setCounter(value);
    }, [value])

    return { counter, increaseBy }
}

export default useProducts