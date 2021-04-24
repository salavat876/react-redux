import React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';

//импорт экшена
import {action_add_comments} from '../redux/actions'

const InputForm =({action_add_comments})=>{// передаем экшн в пропсы
    const [userInput,setUserInput] = useState('');
    const [userName,setUserNameInput] = useState('');

    const handleChangeUserInput = (ev) => {
        setUserNameInput(ev.currentTarget.value);
    }

    const handleChangeComment = (ev) =>{
        setUserInput(ev.currentTarget.value);
    }

    const handleSubmit = (ev) =>{
        ev.preventDefault();

        if (!userName.trim() || !userInput.trim()){
            alert('введите все поля!')
        }
            action_add_comments({ //вызываем наш экшн из пропсов
                comment:userInput,
                name: userName,
                date: new Date().toLocaleDateString()
            })
        setUserInput('');
        setUserNameInput('');
    }

    const handleKeyPress = (ev) =>{
        if(ev.key === 'Enter'){
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
                    type="text"
                    onChange={handleChangeUserInput}
                    placeholder="ваше имя"
                />
                <input
                    className ="comment"
                    value={userInput}
                    type="text"
                    onChange={handleChangeComment}
                    onKeyDown={handleKeyPress}
                    placeholder="Ваш комментарий"
                />
                <button className="btn_submit">Отправить</button>
            </form>

        )
}

const mapDispatchToProps = {
    action_add_comments
}

export default connect(null, mapDispatchToProps)(InputForm)