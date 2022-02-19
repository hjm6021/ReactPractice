import { createAction, handleActions } from 'redux-actions';

const initialState = {};

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => {
            return {
                ...state,
                [action.payload]: true,
            };
        },
        [FINISH_LOADING]: (state, action) => {
            return {
                ...state,
                [action.payload]: false,
            };
        },
    },
    initialState
);

export default loading;
