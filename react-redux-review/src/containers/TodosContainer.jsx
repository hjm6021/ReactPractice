import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
    return <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />;
};

const mapStateToProps = (state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
    changeInput: (input) => {
        dispatch(changeInput(input));
    },
    insert: (text) => {
        dispatch(insert(text));
    },
    toggle: (id) => {
        dispatch(toggle(id));
    },
    remove: (id) => {
        dispatch(remove(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
