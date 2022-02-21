import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';

const initialState = {
    post: null,
    error: null,
};

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST';

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);

export function* postSaga() {
    yield takeLatest(READ_POST, readPostSaga);
}

const post = handleActions(
    {
        [READ_POST_SUCCESS]: (state, { payload: post }) => {
            return produce(state, (draft) => {
                draft.post = post;
            });
        },
        [READ_POST_FAILURE]: (state, { payload: error }) => {
            return produce(state, (draft) => {
                draft.error = error;
            });
        },
        [UNLOAD_POST]: (state, action) => {
            return produce(state, (draft) => {
                draft = initialState;
            });
        },
    },
    initialState
);

export default post;
