import _products from './data.json';

export default {
    getProducts: (cb, time) => setTimeout(() => cb(_products), 100 || time),
} 