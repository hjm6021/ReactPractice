import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

const initialState = {
    title: '',
    body: '',
    tags: [],
    post: null,
    postError: null,
    originalPostId: null,
};

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST');
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] = createRequestActionTypes('write/UPDATE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key: key,
    value: value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({ title, body, tags }));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post);
export const updatePost = createAction(UPDATE_POST, ({ id, title, body, tags }) => ({ id, title, body, tags }));

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* writeSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}

const write = handleActions(
    {
        [INITIALIZE]: (state) => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_POST]: (state) => ({
            ...state,
            post: null,
            postError: null,
        }),
        [WRITE_POST_SUCCESS]: (state, { payload: post }) => {
            return produce(state, (draft) => {
                draft.post = post;
            });
        },
        [WRITE_POST_FAILURE]: (state, { payload: postError }) => {
            return produce(state, (draft) => {
                draft.postError = postError;
            });
        },
        [SET_ORIGINAL_POST]: (state, { payload: post }) => {
            return produce(state, (draft) => {
                draft.title = post.title;
                draft.body = post.body;
                draft.tags = post.tags;
                draft.originalPostId = post._id;
            });
        },
        [UPDATE_POST_SUCCESS]: (state, { payload: post }) => {
            return produce(state, (draft) => {
                draft.post = post;
            });
        },
        [UPDATE_POST_FAILURE]: (state, { payload: postError }) => {
            return produce(state, (draft) => {
                draft.postError = postError;
            });
        },
    },
    initialState
);

export default write;
