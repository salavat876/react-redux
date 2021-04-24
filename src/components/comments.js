import React from 'react';

import {connect} from 'react-redux';

//импорт экшена
import {action_remove_comments} from '../redux/actions';

const Comments = ({action_remove_comments,Comments})=>{

const remove_comments = id => {
    action_remove_comments()
}
    return Comments.map(item =>(
            <div className ="item-comment">
            <div className="flex-row">

                <div className="userName">
                    <span className="userName_span">Имя:{item.name}</span>
                    <div> </div>
                </div>

                <p className="comment-text"> {item.comment}
                </p>
            </div>


            <button className="item-delete" onClick={()=>action_remove_comments(item.id)}>
                X
            </button>
        </div>
        ))

}

const mapStateToProps = state => {
    return {
        Comments: state.comment
    }
}

const mapDispatchToProps = {
    action_remove_comments,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)