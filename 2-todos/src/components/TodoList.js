/*
    定义todo list
*/

import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => (
    <ul>
        {props.todos.map(todo => {
            // 由于todo是对象为引用类型，所以deepCopy一份
            return <Todo key={todo.id} {...todo} onClick={ () => props.onTodoClick(todo.id) } />
        })} 
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;