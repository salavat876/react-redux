import React from 'react';
import {useDispatch} from 'react-redux';
import {action_add_comments} from '../actions/index'

const InputForm =()=>{
    const dispatch = useDispatch();
    let userName = null
    let comment = null;

const handleChangeUserInput = (ev) => {
    userName = ev.currentTarget.value;
}

const handleChangeComment = (ev) => {
    comment = ev.currentTarget.value;
}

const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch( action_add_comments(comment,userName))


}

const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
        handleSubmit(ev)
    }
}

        return (
            <form
                className="fixed-container"
                onSubmit={handleSubmit}
            >
                <input 
                    className ="user-name_input"
                    value={userName}
                    onChange={handleChangeUserInput}
                    type="text"
                    placeholder="ваше имя"
                />
                <input
                    className ="comment"
                    value={comment}
                    type="text"
                    onChange={handleChangeComment}
                    onKeyDown={handleKeyPress}
                    placeholder="Ваш комментарий"
                />
                <button 
                className="btn_submit">Отправить</button>
            </form>

        )
}

export default InputForm;