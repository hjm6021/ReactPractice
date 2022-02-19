import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as api from '../lib/api';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';

const initialState = {
    post: null,
    users: null,
};

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

export function* sampleSaga() {
    yield takeLatest(GET_POST, createRequestSaga(GET_POST, api.getPost));
    yield takeLatest(GET_USERS, createRequestSaga(GET_USERS, api.getUsers));
}

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => {
            return produce(state, (draft) => {
                draft.post = action.payload;
            });
        },
        [GET_USERS_SUCCESS]: (state, action) => {
            return produce(state, (draft) => {
                draft.users = action.payload;
            });
        },
    },
    initialState
);

export default sample;
