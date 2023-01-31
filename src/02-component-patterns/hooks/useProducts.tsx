import { useEffect, useRef, useState } from 'react'
import { Product, onChangeProductArgs, InitialValues } from '../interfaces/interfaces';

interface IProps {
    product: Product;
    onChange?: (args: onChangeProductArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

const useProducts = ({ onChange, product, value = 0, initialValues }: IProps) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const maxCount = initialValues?.maxCount || 0;

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);

        if (newValue > maxCount) return;

        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return { counter, increaseBy }
}

export default useProducts