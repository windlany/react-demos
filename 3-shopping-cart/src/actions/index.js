import fetch from '../api/fetch';

const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'; // 获取所有物品信息
const ADD_TO_CART = 'ADD_TO_CART';  // 添加进购物车
const LEAVE_TO_CART = 'LEAVE_TO_CART'; // 离开商品栏
const CANCEL_IN_CART = 'CANCEL_IN_CART'; // 从购物车中取消物品
const CLEAR_IN_CART = 'CLEAR_IN_CART';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'; // 从购物车删除物品
const CLEAR_CART = 'CLEAR_CART'; // 清空购物车
const ADD_COUNT = 'ADD_COUNT';
const REMOVE_COUNT = 'REMOVE_COUNT';
const CLEAR_COUNT = 'CLEAR_COUNT';
const COUNT_TOTAL = 'COUNT_TOTAL';

const receiveProduct = (products) => {
    return {
        type: RECEIVE_PRODUCT,
        products
    }
}

// products actions
export const getAllProducts = () => dispatch => {
    // 获取物品，触发RECEIVE_PRODUCT
    fetch.getProducts(products => {
        dispatch(receiveProduct(products));
    });
}

export const leaveToCart = id => {
    return {
        type: LEAVE_TO_CART,
        id
    }
}

export const cancelInCart = product => {
    return {
        type: CANCEL_IN_CART,
        product
    }
}

export const clearInCart = products => {
    return {
        type: CLEAR_IN_CART,
        products
    }
}

// carts actions
export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        product
    }
}

export const removeProduct = id => {
    return {
        type: REMOVE_PRODUCT,
        id
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const addCount = () => {
    return {
        type: ADD_COUNT
    }
}

export const removeCount = () => {  // 计算购物车总件数
    return {
        type: REMOVE_COUNT
    }
}

export const clearCount = () => {
    return {
        type: CLEAR_COUNT
    }
}

export const countTotal = (price) => { // 计算购物车总价钱
    return {
        type: COUNT_TOTAL,
        price
    }
}