//import react/redux
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//import styles
import './css/style.css';
import './sass/style.scss';

//import reducer & main component
import comments from './reducers/comments'
import App from './containers/app';


//redux states
let initialState =[]
//redux store
const store = createStore(comments,initialState);


//react component class
ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
, document.getElementById('root')
)
