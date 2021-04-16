//import react/redux
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//import styles
import './css/style.css';
import './sass/style.scss';

//import reducer & main component
import comments from './reducers/comments'
import App from './app';


//


//redux states
const initialState =[]

const store = createStore(comments,initialState);


//react component class
ReactDOM.render(
    <App store={store} />, document.getElementById('root')
)
