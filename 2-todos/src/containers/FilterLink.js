/*
    得到当前过滤器并且渲染Link
*/

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// ownProps是filterLink作为子组件时被传入的props
const mapStateToProps = (state, ownProps) => {
    return {
        // 判断传入的props.filter是否等于state当前的state.visibilityFilter
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))  // 用户点击时改变state.visibilityFilter
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;