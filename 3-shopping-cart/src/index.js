import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { getAllProducts } from './actions';
import App from './App';

const middelware = [thunk];

if(process.env.NODE_ENV !== 'production') {
    middelware.push(createLogger());
} 

const store = createStore(
    reducers,
    applyMiddleware(...middelware)
);

store.dispatch(getAllProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)