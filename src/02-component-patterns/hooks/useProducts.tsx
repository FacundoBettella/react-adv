import { useEffect, useRef, useState } from 'react'
import { Product, onChangeProductArgs } from '../interfaces/interfaces';

interface IProps {
    product: Product;
    onChange?: (args: onChangeProductArgs) => void;
    value?: number;
}

const useProducts = ({ onChange, product, value = 0 }: IProps) => {

    const [counter, setCounter] = useState(value);

    /* if onChange comes to useProducts, the reference is tracked (saved) with a true boolean. */
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            /* onChange"!" = Trust me typescript, onChange always exist (!undefined) when isControlled ref is true */
            return onChange!({ count: value, product })
        }

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