const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':  // 切换id为action.id的todoItem完成状态
            return state.map(todo => {
                if(todo.id === action.id)
                    return {...todo, completed: !todo.completed};
                else 
                    return todo;
            })
        default:
            return state;
    }

}

export default todos;