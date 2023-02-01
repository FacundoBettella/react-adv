import { useEffect, useRef, useState } from 'react'
import { Product, onChangeProductArgs, InitialValues } from '../interfaces/interfaces';

interface IProps {
    product: Product;
    value?: number;
    initialValues?: InitialValues;

    onChange?: (args: onChangeProductArgs) => void;
}

const useProducts = ({ onChange, product, value = 0, initialValues }: IProps) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
}

export default useProducts