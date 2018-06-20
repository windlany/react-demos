import React from 'react';

const Item = function (props) {  
    return (
        <li>
            <span className="product">{props.title}</span>
            <span>$  {props.price}</span>
            <span>x  {props.count}</span>
            <button onClick={props.onClick}>-</button>
        </li>
    )
}

export default ({ list, total, totalCnt, removeProduct, clearCart }) => (
    <div className="cart side">
        <h3>cart</h3> 
        <ul>
            {list.map(item => {
                return <Item key={item.id} {...item} onClick={() => removeProduct(item)}/>
            })}
        </ul>
        <div className="total">
            <p>商品总数：<span>{totalCnt} </span> 件</p>
            <p>总计：<span>${total}</span></p>
            <button className="clear" style={{background: !totalCnt && "#ccc"}} onClick={()=>{clearCart(list)}}>清空购物车</button>
        </div>
    </div>
)