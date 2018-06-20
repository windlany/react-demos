import React from 'react';

const Item = function (props) {  
    return (
        <li>
            <span className="product">{props.title}</span>
            <span>$  {props.price}</span>
            <span>x  {props.count}</span>
            <button style={{backgroundColor: !props.count && '#ccc'}} disabled={!props.count} onClick={props.onClick}>+</button>
        </li>
    )
} 

export default ({ list, addToCart }) => (
    <div className="products side">
        <h3>products</h3>
        <ul>
            {list.map(item => {
                return <Item key={item.id} {...item} onClick={() => addToCart(item)} />
            })}
        </ul>
    </div>
)