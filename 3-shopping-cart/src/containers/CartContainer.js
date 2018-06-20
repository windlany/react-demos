import { connect } from 'react-redux';
import { cancelInCart, clearInCart, removeProduct, countTotal, removeCount, clearCart, clearCount } from '../actions';
import Cart from '../components/Cart';

const mapStateToProps = state => {
    return {
        list: state.cart.list,
        total: state.cart.total, 
        totalCnt: state.cart.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: (item) => {  // 点击购物车减少按钮删除商品并减少总数
            dispatch(cancelInCart(item));
            dispatch(removeProduct(item.id)); 
            dispatch(removeCount()); // 商品总数
            dispatch(countTotal(0-item.price));  // 计算价格
        },
        clearCart: (item) => {
            dispatch(clearCart());
            dispatch(clearInCart(item));
            dispatch(clearCount());
            dispatch(countTotal(0));  // 计算价格
        }
    }
}

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer;