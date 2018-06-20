/*
    定义查看reducer，根据传入的action.filter查看不同的state
*/

// 默认是SHOW_ALL，如果用户点击选择框选择显示其他的选项
// 则会dispatch SET_VISIBILITY_FILTER 改变state.visibilityFilter
const visibilityFilter = (visibilityFilter = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default: 
            return visibilityFilter;
    }
}

export default visibilityFilter;