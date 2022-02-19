import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
    const number = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increaseAsync()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decreaseAsync()), [dispatch]);

    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default CounterContainer;
