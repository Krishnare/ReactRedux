import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';


// import { watchFetchProducts } from './saga/saga';
import { productReducer } from './reducer/product-reducer';
import { userReducer } from './reducer/user-reducer';
import { dogReducer } from './reducer/dog-reducers';
import thunk from 'redux-thunk';
import { watchFetchProducts } from './saga/saga';
 
// import { delay } from 'redux-saga';
// import { put, takeEvery } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer,
    dog: dogReducer

});

 
const store = createStore(allReducers,
    {
        products: [{name: 'iPhone'}],
        user: 'Michel'
    },
    applyMiddleware(sagaMiddleware),
    //window.devToolsExtension && window.devToolsExtension()
);
sagaMiddleware.run(watchFetchProducts);
window.store = store;
window.dispatcher = {
    fetchUsers: () =>{
        store.dispatch({type:'FETCH_USERS'});
    }
}

ReactDOM.render(
    <Provider store = { store } >
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();