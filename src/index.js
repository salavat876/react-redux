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
import {addComments,removeComments} from './actions/index'


//redux states
let initialState =[]
//redux store
const store = createStore(comments,initialState);

store.dispatch(addComments({type:'ADD_COMMENTS',name:'comments'}))
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
, document.getElementById('root')
)

