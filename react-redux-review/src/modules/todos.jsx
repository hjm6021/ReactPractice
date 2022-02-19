import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리덕스 복습하기',
            done: false,
        },
    ],
};

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let id = 3;
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text: text,
    done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => {
            return produce(state, (draft) => {
                draft.input = input;
            });
        },
        [INSERT]: (state, { payload: todo }) => {
            return produce(state, (draft) => {
                draft.todos.push(todo);
            });
        },
        [TOGGLE]: (state, { payload: id }) => {
            return produce(state, (draft) => {
                const todo = draft.todos.find((todo) => todo.id === id);
                todo.done = !todo.done;
            });
        },
        [REMOVE]: (state, { payload: id }) => {
            return produce(state, (draft) => {
                draft.todos.splice(
                    draft.todos.findIndex((todo) => todo.id === id),
                    1
                );
            });
        },
    },
    initialState
);

export default todos;
