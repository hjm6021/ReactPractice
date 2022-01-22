import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
// import { increase, decrease } from '../modules/counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import React, { useCallback } from 'react';

const CounterContainer = () => {
    const number = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    // const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    // const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onIncrease = useCallback(() => dispatch(increaseAsync()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decreaseAsync()), [dispatch]);
    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default React.memo(CounterContainer);
