import { combineReducers } from 'redux';
import counter, { couterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    sample,
    loading,
});

export function* rootSaga() {
    yield all([couterSaga(), sampleSaga()]);
}

export default rootReducer;
