/*
    根据当前显示的状态来对 todo 列表进行过滤，并渲染 TodoList
*/

import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

// 根据传入的filter筛选todo item
const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
}

// 将筛选后的todo item映射到props
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

// 将dispatch映射到props
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    }
}

/*
    连接redux和react
    将上面的行为映射到组件TodoList
*/
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;