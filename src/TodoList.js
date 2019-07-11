import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TodoActions from './store/actions/todos'
import { bindActionCreators} from 'redux';

const TodoList = ({todos, addTodo, removeTodo}) => (
        <Fragment>
            <ul>
                {todos.map(todo => 
                <li key={todo.id}>
                {todo.text}
                <button onClick={() => removeTodo(todo.id)}>Remover</button>
                </li>)}
            </ul>
            <button onClick={() => addTodo('Entrar na comunidade')}>Adicionar</button>
        </Fragment>
);

TodoList.propTypes = {
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number, 
        text: PropTypes.string,
    })).isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);