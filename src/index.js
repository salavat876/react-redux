//импортируем библиотеки
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//импорт стилей
import './css/style.css';
import './sass/style.scss';

//импорт reducer и главного компонента
import comments from './reducers/comments'
import App from './app';



//react component function
const initialState =[]

const store = createStore(comments,initialState);


//react component class
ReactDOM.render(
    <App store={store} />, document.getElementById('root')
)
