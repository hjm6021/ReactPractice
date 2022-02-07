import produce from 'immer';

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
export const changeInput = (input) => ({ type: CHANGE_INPUT, input: input });
export const insert = (text) => ({
    type: INSERT,
    todo: {
        id: id++,
        text: text,
        done: false,
    },
});
export const toggle = (id) => ({ type: TOGGLE, id: id });
export const remove = (id) => ({ type: REMOVE, id: id });

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return produce(state, (draft) => {
                draft.input = action.input;
            });
        case INSERT:
            return produce(state, (draft) => {
                draft.todos.push(action.todo);
            });
        case TOGGLE:
            return produce(state, (draft) => {
                const todo = draft.todos.find((todo) => todo.id === action.id);
                todo.done = !todo.done;
            });
        case REMOVE:
            return produce(state, (draft) => {
                draft.todos.splice(
                    draft.todos.findIndex((todo) => todo.id === action.id),
                    1
                );
            });
        default:
            return state;
    }
}

export default todos;
