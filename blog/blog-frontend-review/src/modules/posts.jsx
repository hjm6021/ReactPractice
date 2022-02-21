import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';

const initialState = {
    posts: null,
    error: null,
    lastPage: 1,
};

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes('posts/LIST_POSTS');

export const listPosts = createAction(LIST_POSTS, ({ page, username, tag }) => ({ page, username, tag }));

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);

export function* postsSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga);
}

const posts = handleActions(
    {
        [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => {
            return produce(state, (draft) => {
                draft.posts = posts;
                draft.lastPage = parseInt(response.headers['last-page'], 10);
            });
        },
        [LIST_POSTS_FAILURE]: (state, { payload: error }) => {
            return produce(state, (draft) => {
                draft.error = error;
            });
        },
    },
    initialState
);

export default posts;
