//import react/redux
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//import styles
import './css/style.css';
import './sass/style.scss';

//import reducer & main component
import comments from './reducers/comments'
import App from './containers/app';
import {action_add_comments,action_remove_comments} from './actions/index'


//redux states
let initialState =[]
//redux store
const store = createStore(comments,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());


// store.dispatch(action_remove_comments({type:'REMOVE_COMMENTS',id}))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root')
)


