/*
    定义过滤器
*/

import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <p>
        Show:
        {'  '}
        <FilterLink filter="SHOW_ALL">所有任务</FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">正在完成</FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
    </p>
)
export default Footer;