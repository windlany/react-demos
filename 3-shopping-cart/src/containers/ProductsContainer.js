import { connect } from 'react-redux';
import { leaveToCart, addToCart, countTotal, addCount } from '../actions';
import Products from '../components/Products';

const mapStateToProps = state => {
    return {
        list: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => {
            dispatch(leaveToCart(item.id)); // 物品离开商品栏
            dispatch(addToCart(item)); // 加入购物车
            dispatch(addCount(true)); // 计算总个数
            dispatch(countTotal(item.price)); // 计算总价格
        }
    }
}

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);

export default ProductsContainer;