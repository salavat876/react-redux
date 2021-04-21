//import react-redux
import {bindActionCreators} from 'redux';
import React from 'react';

//import dumb-component
import Info from '../components/Info';
import InputForm from '../components/form';
import Comments from '../components/comments';

//import action-Creators
import{action_add_comments,action_remove_comments} from '../actions/index'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) =>{
    return {
        addComments:bindActionCreators(action_add_comments,dispatch),
        removeComments:bindActionCreators(action_remove_comments,dispatch)
    }
}

const mapStateToProps = (state) => {
    return{
        userName: state.name,
        comment:state.comment,
        date:state.date
    }
}


function App({userName,comment,date,action_add_comments,action_remove_comments,id}){
    
    const addComments = (comment,name) =>{
        if(comment && name){
            const NewDate = new Date();
            const hour = NewDate.getHours();
            const minute = NewDate.getMinutes();
            const date = NewDate.getDate();

            const newItem = {
                comment:comment,
                name:name,
                fullDate:{
                    hour:hour + declOfNum(hour,[' час ', ' часа ', ' часов ']),
                    minute:minute + declOfNum(minute,[' минута ', ' минуты ', ' минут ']),
                    date:date
                }
            }
        } 
        else{
            alert('Заполните,пожалуйста, все поля!')
        }

    }

    const declOfNum = (number, words) => {

        return words[(number % 100 > 4 && number % 100 < 20) ? 
            2 : 
                [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }

    const removeComments = (id) =>{
        setComments(comments.filter(comment => {
            return comment.id != id
        }))
    }

    return(
        <div className="fixed-container">
            <Info />
            <InputForm
                addComments={action_add_comments}
            />
            <h1>Comments </h1>
            <ul>
                        <li >
                        <Comments
                            userName={userName}
                            comment={comment}
                            action={action_add_comments}
                            removeComments={removeComments}
                        />
                        </li>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)