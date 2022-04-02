import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';





const commentReducer =(state = '', action) =>{

    if(action.type === 'ADD_COMMENT'){
        return action.payload
    }
    return state
}
const feelingReducer =(state = 0, action) =>{

    if(action.type === 'ADD_FEELING'){
        return action.payload
    }
    return state
}
const supportReducer =(state = 0, action) =>{

    if(action.type === 'ADD_SUPPORT'){
        return action.payload
    }
    return state
}
const understandingReducer =(state = 0, action) =>{

    if(action.type === 'ADD_UNDERSTANDING'){
        return action.payload
    }
    return state
}


const storeInstance = createStore(combineReducers({
    commentReducer,
    feelingReducer,
    supportReducer,
    understandingReducer
}),
applyMiddleware(logger),
);


ReactDOM.render(
    <Provider store = {storeInstance}>
<App />
</Provider>

, document.getElementById('root'));
registerServiceWorker();
