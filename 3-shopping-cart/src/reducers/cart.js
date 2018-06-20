import { combineReducers } from 'redux'; 

// 把carts分为三个部分

const list = (list = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART': 
            let b = 1,
                product = {...action.product};
            
            product.count = 1;
            let current = list.map(item => {
                if(item.id === product.id) {
                    item.count++;
                    b = 0;
                }
                return item;
            });

            b === 1 && current.push(product);
            return current;
        case 'REMOVE_PRODUCT': 
            return list.filter(item => {
                if(item.id === action.id) {
                    item.count--;
                }
                return item.count > 0;
            });
        case 'CLEAR_CART':
            return [];
        default:
            return list;
    }
}

const total = (total = 0, action) => {
    if(action.type === 'COUNT_TOTAL') {
        if(action.price === 0) return 0;
        
        return total + action.price;
    } 
    return total;
}

const count = (count = 0, action) => {
    switch(action.type) {
        case 'ADD_COUNT':
            return count + 1;
        case 'REMOVE_COUNT':
            return count - 1;
        case 'CLEAR_COUNT':
            return 0;
        default:
            return count;
    }
}

export default combineReducers({
    list,
    total,
    count
});