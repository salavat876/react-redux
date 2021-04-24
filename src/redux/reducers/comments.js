
import {action_add_comments,action_remove_comments} from '../actions/index';
    
const initialState = {
    comments:[]
}
const comments =(state = initialState,action) => {

    switch(action.type) {

        case action_add_comments:
            return{
                ...state,comment:[...state,state.comment]            
            }


        case action_remove_comments:
            return state.map((comment)=>{
                return comment.id != comment.id
            })
        
        default:
            return state;
    }
}

export default comments;