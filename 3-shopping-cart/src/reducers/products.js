const products = (products = [], action) => {
    switch(action.type) {
        case 'RECEIVE_PRODUCT': // 获取所有商品
            return [...action.products];
        case 'CANCEL_IN_CART': 
            return products.map(item => {
                if(item.id === action.product.id) {
                    item.count++;
                }
                return item;
            });  
        case 'LEAVE_TO_CART': // 当该物品被添加入购物车则将物品数量减1
            return products.map(item => {
                if(item.id === action.id) {
                    item.count -= 1;
                }
                return item;
            })
        case 'CLEAR_IN_CART':
            let current = [...action.products];
            let currentList = [...products];

            for(let i = 0; i < currentList.length; i++) {
                for(let j = 0; j < current.length; j++) {
                    if(currentList[i].id === current[j].id) {
                        currentList[i].count += current[j].count;
                    }
                }
            }
            
            return currentList;
        default:
            return products;
    }
}

export default products;