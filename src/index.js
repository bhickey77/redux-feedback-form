import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_FEELING':
            return {
                ...state,
                feeling: action.payload
            }
            break;
        case 'ADD_UNDERSTANDING':
        return {
            ...state,
            understanding: action.payload
        }
        break;
        case 'ADD_SUPPORT':
        return {
            ...state,
            support: action.payload
        }
        break;
        case 'ADD_COMMENTS':
        return {
            ...state,
            comments: action.payload
        }
        break;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers(
        {
            feedbackReducer
        }
    )
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
