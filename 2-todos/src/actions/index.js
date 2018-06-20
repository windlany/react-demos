/*
    生成各类action的函数
*/

let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,  // 为每一个todoItem生成一个id
        text
    }
}

export const setVisibilityFilter = filter => { // 查看不同状态的todos
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {  //  根据传入id切换该todoItem的完成状态
    return {
        type: 'TOGGLE_TODO',
        id
    }
}