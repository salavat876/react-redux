import {addComments,removeComments} from './types'
import {action_add_comments,action_remove_comments} from '../actions/index'

const comments =(state = [],action) => {

    switch(action.type) {

        case action_add_comments:
            return[
                ...state,
                {
                    id:Math.random().toString(36).substr(2,9),
                    userName:action.name,
                    comment:action.comment,
                    date:action.date
                }
            ]

        case action_remove_comments:
            return state.map((comment)=>{
                return comment.id != comment.id
            })
        
        default:
            return state;
    }
}

export default comments;